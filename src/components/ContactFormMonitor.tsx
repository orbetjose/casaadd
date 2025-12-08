import { useState } from "react";

export default function ContactFormMonitor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    hoja: null as File | null,
    checkbox: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState<string>("");

  const domain = import.meta.env.VITE_WP_DOMAIN;

  const resetMonitor = () => {
    setFormData({
      name: "",
      email: "",
      telefono: "",
      hoja: null,
      checkbox: false,
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files) {
      setFileName(files[0].name);
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const fd = new FormData();

      fd.append("action", "guardar_y_enviar_monitor");

      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("telefono", formData.telefono);
      fd.append("message", formData.message);

      if (formData.hoja) {
        fd.append("hoja", formData.hoja);
      }

      const response = await fetch(`${domain}wp-admin/admin-ajax.php`, {
        method: "POST",
        body: fd,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.data?.message || "Error al enviar el formulario");
      }

      setSuccess(true);
      resetMonitor();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "No se pudo enviar el formulario");
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
                  className="w-full px-2 pt-2 pb-2 border  rounded bg-black-50 border-old-silver focus:outline-pink"
                  required
                />
              </div>
            </div>
            <div>
              <span>Hoja de vida</span>
              <div className="pt-2 w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-old-silver rounded-lg cursor-pointer hover:bg-gray-100 transition ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Haz clic para subir</span> o arrastra tus archivos aquí
                    </p>
                    <p className="text-xs text-old-silver">PDF (máx. 10MB)</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="application/pdf"
                    onChange={handleChange}
                    name="hoja"
                  />
                </label>
                {fileName && (
                  <div className="mt-4">
                    <p className="text-old-silver mt-1">Archivo cargado exitosamente: {fileName}</p>
                  </div>
                )}
              </div>
            </div>

            <label htmlFor="">Cuentanos tu experiencia</label>
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
