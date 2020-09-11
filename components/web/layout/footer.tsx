import Link from 'next/link';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

const Footer = () => {
  return (
    <footer className=' w-full bg-yellow-800'>
      <div className='container mx-auto pb-16 pt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-10 md:pl-0 md:pr-0'>
        <div className='text-white flex flex-col font-light '>
          <h2 className='text-xl uppercase text-yellow-600 font-semibold mb-2'>
            Contáctanos
          </h2>
          <a href='#' className='mb-3'>
            +57 317 735 86 56
          </a>
          <a href='#' className='mb-3'>
            +4 600 15 19
          </a>
        </div>
        <div className='text-white  flex flex-col font-light '>
          <h2 className='text-xl uppercase text-yellow-600 font-semibold mb-2'>
            Información de Interés
          </h2>
          <a href='#' className='mb-3'>
            Registra tu tienda
          </a>
          <a href='#' className='mb-3'>
            Participa con tu fundación
          </a>
          <a href='#' className='mb-3'>
            Política de privacidad
          </a>
          <a href='#' className='mb-3'>
            Términos y condiciones
          </a>
        </div>
        <div className='text-white  flex flex-col font-light '>
          <h2 className='text-xl uppercase text-yellow-600 font-semibold mb-2'>
            Categorías
          </h2>
          <a href='#' className='mb-3'>
            Gatos
          </a>
          <a href='#' className='mb-3'>
            Perros
          </a>
          <a href='#' className='mb-3'>
            Conejos
          </a>
          <a href='#' className='mb-3'>
            Caballos
          </a>
          <a href='#' className='mb-3'>
            Otros
          </a>
        </div>
        <div className='text-white  flex flex-col font-light '>
          <h2 className='text-xl uppercase text-yellow-600 font-semibold mb-2'>
            Acceso rápido
          </h2>

          <a href='#' className='mb-3'>
            Inicio
          </a>
          <a href='#' className='mb-3'>
            Productos
          </a>
          <a href='#' className='mb-3'>
            Tiendas
          </a>
          <a href='#' className='mb-3'>
            Fundaciones
          </a>
          <a href='#' className='mb-3'>
            Ingresar / Registrarse
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
