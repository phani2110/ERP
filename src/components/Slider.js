import Carousel from 'react-bootstrap/Carousel';
import dbImage from '../Images/db.jpg';
import pmImage from '../Images/pm.jpeg';
import omImage from '../Images/om.jpg';
import oc from '../Images/ocal.jpg';
import { Link } from 'react-router-dom';
import '../slider.css';
import '../responsive.css';
function Slider() {
  return (
    <Carousel data-bs-theme="dark" className="hero_area">
      <Carousel.Item>
      <Link to="/">
        <img
          className="d-block w-100"
          src={dbImage}
          alt="Dashboard"
          style={{ width: '100%', height: '500px' }}
        />
         </Link>
         <Carousel.Caption>
          <Link to="/">
            <h5><button className="sd">Dashboard</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pmImage}
          alt="Second slide"
          style={{ width: '100%', height: '500px' }}
        />
        <Carousel.Caption>
          <Link to="/products">
            <h5><button className="sd">Product Management</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={omImage}
          alt="Third slide"
          style={{ width: '100%', height: '500px' }}
        />
        <Carousel.Caption>
          <Link to="/orders">
          <h5><button className="sd">Order Management</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/">
        <img
          className="d-block w-100"
          src={oc}
          alt="Order Calendar"
          style={{ width: '100%', height: '500px' }}
        />
         </Link>
         <Carousel.Caption>
          <Link to="/orders-calendar">
            <h5><button className="sd">Order Calendar</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;