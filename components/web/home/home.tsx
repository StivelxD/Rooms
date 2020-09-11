import Stories from './stories';
import LeadCards from './lead-cards';

const Home = () => {
  return (
    <>
      <section className='bg-pink-200'>
        <h1>
          Compra productos de calidad y{' '}
          <span>salva la vida de animales en abandono</span> en el proceso
        </h1>
        <a>Conoce las fundaciones</a>
      </section>
      <LeadCards />
      <Stories />
    </>
  );
};

export default Home;
