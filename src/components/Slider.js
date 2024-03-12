import Carousel from 'react-bootstrap/Carousel';
import dbImage from '../Images/db.jpg';
import pmImage from '../Images/pm.jpeg';
import omImage from '../Images/om.jpg';
import { Link } from 'react-router-dom';
function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <Link to="/">
        <img
          className="d-block w-100"
          src={dbImage}
          alt="Dashboard"
          style={{ width: '100%', height: '600px' }}
        />
         </Link>
         <Carousel.Caption>
          <Link to="/">
            <h5><button>Dashboard</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pmImage}
          alt="Second slide"
          style={{ width: '100%', height: '600px' }}
        />
        <Carousel.Caption>
          <Link to="/products">
            <h5><button>Product Management</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={omImage}
          alt="Third slide"
          style={{ width: '100%', height: '600px' }}
        />
        <Carousel.Caption>
          <Link to="/orders">
          <h5><button>Order Management</button></h5>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;