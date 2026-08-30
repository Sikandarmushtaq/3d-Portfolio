import Navbar from '../Components/Navbar';
import Cursor from '../Components/Cursor';
import Scene3 from '../Components/Scene3';
import Footer from '../Components/Footer';
import './ServicePage.css';

export default function Animated3D() {
  return (
    <div className="service-page">
      <Cursor />
      <Navbar />

      <Scene3 title="3D Animated Website" />

      <Footer />
    </div>
  );
}