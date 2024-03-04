import { useState } from 'react';
import CardProducts from '../components/CardManga';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import { fetchDataCall } from '../services/manga.service';
import { useEffect } from 'react';

function LandingPage() {
  const [dataTopManga, setDataTopManga] = useState([]);

  const fetchData = async () => {
    const data = await fetchDataCall();
    if (data.data.data) {
      setDataTopManga(data.data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex">
          <Sidebar />
          <div className='grid grid-cols-5 gap-4 p-4'>
            {dataTopManga.map((item, i) => (
              <CardProducts data={item} key={i} />
            ))}
          </div>
        </div>
        <Pagination className=" mx-auto" />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
