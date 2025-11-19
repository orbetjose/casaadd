import { useState } from "react";

export default function ContactFormModelo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    redes: "",
    fecha: "",
    horarios: "",
    fotos: [],
    checkbox: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);

  const domain = import.meta.env.VITE_WP_DOMAIN;

  const resetModelo = () => {
    setFormData({
      name: "",
      email: "",
      telefono: "",
      redes: "",
      fecha: "",
      horarios: "",
      fotos: [],
      checkbox: false,
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files) {
      const photos = Array.from(files || []);
      setFileNames(photos.map((f) => f.name));
      setFormData({ ...formData, [name]: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      /*
    ==========================================
      1) Guardar en BD (JSON)
    ==========================================
    */

      const payloadDB = {
        form_type: "modelo",
        name: formData.name,
        email: formData.email,
        telefono: formData.telefono,
        redes: formData.redes,
        fecha: formData.fecha,
        horarios: formData.horarios,
        message: formData.message,
      };

      const resBD = await fetch(`${domain}wp-json/contact-form/v1/submit-modelo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadDB),
      });

      if (!resBD.ok) throw new Error("BD Error");

      setSuccess(true);
      resetModelo();
      /*
    ==========================================
      2) Enviar correo (FormData + fotos)
    ==========================================
    */

      const fd = new FormData();

      fd.append("action", "enviar_correo");
      fd.append("form_type", "modelo");

      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("telefono", formData.telefono);
      fd.append("redes", formData.redes);
      fd.append("fecha", formData.fecha);
      fd.append("horarios", formData.horarios);
      fd.append("message", formData.message);

      // fotos[]
      formData.fotos.forEach((file) => fd.append("fotos[]", file));

      const resMail = await fetch(`${domain}wp-admin/admin-ajax.php`, {
        method: "POST",
        body: fd,
      });

      if (!resMail.ok) throw new Error("Mail Error");
    } catch (err) {
      console.error(err);
      setError("No se pudo enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:max-w-4xl mx-auto py-14 px-8">
      <div className="">
        <div className="text-center pb-4">
          <h3 className="uppercase font-alata-regular font-bold text-old-silver text-2xl">
            Déjanos descubrir tu potencial
          </h3>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm  font-prompt-regular text-old-silver
      ">
            <label>Nombre completo</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-2 pt-2 pb-2 border  rounded bg-black-50 border-old-silver focus:outline-pink"
              required
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <label>Celular</label>
                <input
                  type="telefono"
                  name="telefono"
                  onChange={handleChange}
                  value={formData.telefono}
                  className="w-full px-2 pt-2 pb-2 border  rounded bg-black-50 border-old-silver focus:outline-pink"
                  required
                />
              </div>
              <div className="flex-1">
                <label>Correo</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full px-2 pt-2 pb-2 border rounded bg-black-50 border-old-silver focus:outline-pink"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Redes sociales</label>
              <input
                type="text"
                name="redes"
                id="redes"
                className="w-full px-2 pt-2 pb-2 border rounded bg-black-50 border-old-silver focus:outline-pink"
                onChange={handleChange}
                value={formData.redes}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Fecha de nacimiento</label>
              <input
                type="date"
                className="w-1/2 px-3 py-2 rounded border border-old-silver  text-old-silver 
             outline-none transition
            appearance-none"
                onChange={handleChange}
                value={formData.fecha}
                name="fecha"
              />
            </div>
            <div>
              <span>Fotos (máximo 3)</span>
              <div className="pt-2 w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-old-silver rounded-lg cursor-pointer hover:bg-gray-100 transition ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-old-silver">
                      <span className="font-semibold">Haz clic para subir</span> o arrastra tus archivos aquí
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG (máx. 2MB)</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleChange}
                    accept="image/*"
                    name="fotos"
                  />
                </label>
                {fileNames.length > 0 && (
                  <div className="pt-2">
                    <p className="font-prompt-regular">Los siguientes archivos se cargaron exitosamente: </p>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      {fileNames.map((name, i) => (
                        <li key={i}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-old-silver mb-2">Horarios</label>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {["7:00 a.m. a 2:30 p.m.", "2:30 p.m. a 10:00 p.m.", "10:00 p.m. a 6:30 a.m."].map((hora, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="horarios"
                      value={hora}
                      onChange={handleChange}
                      checked={formData.horarios === hora}
                      className="text-pink-500 focus:ring-pink-500"
                    />
                    <span className="text-sm text-old-silver">{hora}</span>
                  </label>
                ))}
              </div>
            </div>
            <label
              htmlFor=""
              className="">
              Cuentanos tu experiencia
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full px-2 pt-2 pb-2 h-[154px] border  rounded bg-black-50 border-old-silver focus:outline-pink"
              required
            />
            <div className="flex gap-4">
              <input
                type="checkbox"
                required
              />
              <p>
                Si, estoy de acuerdo con las{" "}
                <a
                  href="#"
                  className="underline">
                  políticas de privacidad
                </a>{" "}
                y los{" "}
                <a
                  href="#"
                  className="underline">
                  términos y condiciones
                </a>{" "}
              </p>
            </div>

            <button
              type="submit"
              className="font-prompt-regular px-4 py-2 rounded block w-full text-white bg-pink text-center text-base cursor-pointer"
              disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {success ? (
            <p className="text-green-500 text-center mt-4 font-poppins-bold text-lg ">¡Mensaje enviado con éxito!</p>
          ) : null}
          {error ? <p className="text-red-500 font-poppins-bold text-lg">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
