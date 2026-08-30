import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import Scene3 from '../Components/Scene3';
import Footer from '../Components/Footer';
import './ServicePage.css';

export default function SaaS() {
  return (
    <div className="service-page">
      <Cursor />
      <Navbar />

      <Scene3 title="SaaS Products" />

      <Footer />
    </div>
  );
}