import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-8">
          Página no encontrada
        </h2>
        <p className="text-white mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="space-x-4">
          <button
            onClick={handleGoBack}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
          >
            Volver atrás
          </button>
          <button
            onClick={handleGoHome}
            className="bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;