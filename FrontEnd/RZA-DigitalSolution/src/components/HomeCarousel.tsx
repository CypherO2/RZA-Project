import Img1 from "../assets/pexels-jimmy-chan-1000529.jpg";
import Img2 from "../assets/pexels-cesar-aguilar-1123765.jpg";
import Img3 from "../assets/pexels-mike-bird-198162.jpg";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

function HomeCarousel() {
  return (
    <>
      <MDBCarousel showIndicators fade className="mb-1">
        <MDBCarouselItem itemId={1}>
          <img
            height="900"
            src={Img1}
            className="d-block w-100"
            alt="Small Yellow Furred Monkey, Eating Celery on a Rock by a Pond, Wide Eyes"
          />
          <MDBCarouselCaption>
            <h5>Baby Monkey Eating Vegetable</h5>
            <p>Small Yellow Furred Monkey.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            height="900"
            src={Img2}
            className="d-block w-100"
            alt="Panda attempting to eat a massive stalk of bamboo"
          />
          <MDBCarouselCaption>
            <h5>Panda</h5>
            <p>Panda eating bamboo.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            height="900"
            src={Img3}
            className="d-block w-100"
            alt="Meerkat Statues staring into camera"
          />
          <MDBCarouselCaption>
            <h5>Meerkats</h5>
            <p>Meerkat Statues.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
export default HomeCarousel;
