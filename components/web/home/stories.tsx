const Stories = () => {
  return (
    <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 p-4 md:p-0 md:pb-10'>
      <div className='pr-0 md:pr-20'>
        <div className='leading-7 mb-6'>
          <h3 className='text-orange-500 uppercase text-lg font-semibold'>
            Fundación Segunda Oportunidad
          </h3>
          <h2 className='text-3xl font-bold'>Historias que nos inspiran</h2>
        </div>

        <p className='mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo alias provident ducimus cum error quam nam nulla, nobis
          impedit ad, voluptatibus aspernatur sunt eum repellendus accusantium
          odio corporis possimus.
        </p>

        <p className='mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo alias provident ducimus cum error quam nam nulla, nobis
          impedit ad, voluptatibus aspernatur sunt eum repellendus accusantium
          odio corporis possimus.
        </p>

        <a className='border-2 border-orange-400 rounded-lg py-4 px-5 font-semibold inline-block mt-2'>
          Ver fundación
        </a>
      </div>
      <div className='grid grid-cols-4 grid-rows-4 grid-flow-col-dense'>
        <div className='object-cover col-start-2 col-end-5 row-end-5 row-start-1 overflow-hidden rounded-md '>
          <img
            className='object-cover w-full'
            src='/static/images/story.png'
            alt='Historia Fundación'
          />
        </div>

        <div className='col-start-1 row-start-3 col-end-5 relative mt-10'>
          <div>
            <span className=''></span>
            <p className='text-sm w-2/3 mb-10 bg-white bg-opacity-75 rounded-md p-5 py-10'>
              Anualmente hay más de 150.000 animales abandonados que necesitan
              de tu apoyo para que puedan encontrar un nuevo hogar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
