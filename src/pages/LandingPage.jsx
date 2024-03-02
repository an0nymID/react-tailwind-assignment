import CardProducts from '../components/CardProducts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';

function LandingPage() {
  return (
    <div>
      <Header />
      <div className='flex flex-col'>
        <div className="flex">
          <Sidebar />
          <CardProducts />
        </div>
      <Pagination className=' mx-auto' />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
