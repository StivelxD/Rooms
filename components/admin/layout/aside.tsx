import { BiBed } from 'react-icons/bi';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Aside = () => {
  return (
    <aside className='h-screen bg-gray-900 w-84 text-white  flex flex-col justify-between md:visible invisible'>
      <div className='p-10 flex  items-center'>
        <img
          src='/static/logo.png'
          alt='logoModelNetwork'
          className='w-12 mr-2'
        />
        <span className='text-2xl tracking-wide text-blue-500'>
          Model<span className='text-white'>Network</span>
        </span>
      </div>

      <nav className='bg-blue-500 p-3 px-10'>
        <a className='flex justify-between'>
          Habitaciones
          <span>
            <BiBed className='text-2xl' />
          </span>
        </a>
      </nav>

      <div className='px-10'>
        <button className='flex justify-between w-full pb-10'>
          Cerrar sesión <RiLogoutCircleLine />
        </button>
      </div>
    </aside>
  );
};

export default Aside;
