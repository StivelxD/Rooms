import Header from './header';
import Aside from './aside';

const LayoutAdmin = ({ children }) => {
  return (
    <div className='h-full flex'>
      <Aside />

      <div className='w-full'>
        <Header />
        <main className='px-10'>{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
