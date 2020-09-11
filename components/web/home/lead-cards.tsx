const LeadCards = () => {
  return (
    <section className='container mx-auto  grid grid-cols-1 md:grid-cols-2  gap-4 p-4 md:p-0  mt-10 md:pb-10 '>
      <div className='bg-yellow-200 p-6 py-5 relative br-1 shadow-sm overflow-hidden md:h-40 lg:h-64 lg:p-12 rounded-md '>
        <div className='relative z-10 w-3/5 lg:w-1/2'>
          <h3 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-8 lg:leading-10'>
            ¿Eres una tienda?
          </h3>
          <button className='bg-orange-500 text-white py-2 md:py-3 px-3 md:px-5 rounded-md inline-flex items-center mt-4'>
            <span>Regístrate</span>
            <svg
              className='fill-current w-4 h-4 ml-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>

        <img
          className='absolute top-0  sm:mr-0 right-0 w-screen md:w-96 object-cover h-48 lg:h-full'
          src='/static/images/tiendas.png'
          alt='Eres una tienda'
        />
      </div>

      <div className='bg-red-300 p-6 py-5 relative br-1 shadow-sm overflow-hidden md:h-40 lg:h-64 lg:p-12 rounded-md'>
        <div className='relative z-10 w-4/5 lg:w-1/2'>
          <h3 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-8 lg:leading-10'>
            ¿Eres una fundación?
          </h3>
          <button className='bg-red-400 text-white py-2 md:py-3 px-3 md:px-5 rounded-md inline-flex items-center mt-4'>
            <span>Inscríbete</span>
            <svg
              className='fill-current w-4 h-4 ml-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>

        <img
          className='absolute top-0 sm:mr-0 right-0 w-screen md:w-96 object-cover h-48 lg:h-full'
          src='/static/images/fundaciones.png'
          alt='Eres una fundación'
        />
      </div>
    </section>
  );
};

export default LeadCards;
