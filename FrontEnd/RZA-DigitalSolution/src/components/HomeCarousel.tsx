import Img1 from "../assets/pexels-jimmy-chan-1000529.jpg";
import Img2 from "../assets/pexels-cesar-aguilar-1123765.jpg";
import Img3 from "../assets/pexels-mike-bird-198162.jpg";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

/* The `function HomeCarousel()` is a React functional component that defines a carousel component
using the MDBCarousel, MDBCarouselItem, and MDBCarouselCaption components from the mdb-react-ui-kit
library. This carousel component displays three images with corresponding captions in a slideshow
format. Each MDBCarouselItem represents a slide in the carousel with an image, a title, and a
description. The images are imported using the Img1, Img2, and Img3 variables from the specified
file paths. The carousel is set to fade between slides and show indicators for navigation. */
function HomeCarousel() {
  return (
    <>
      <MDBCarousel showIndicators fade className="mb-1">
        <MDBCarouselItem itemId={1}>
          <img
            height="750"
            src={Img1}
            className="d-block w-100"
            alt="Small Yellow Furred Monkey, Eating Celery on a Rock by a Pond, Wide Eyes"
          />
          <MDBCarouselCaption>
            <h5
              className="fw-bold"
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Baby Monkey Eating Vegetable
            </h5>
            <p
              className="fw-bold"
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Small Yellow Furred Monkey.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            height="750"
            src={Img2}
            className="d-block w-100"
            alt="Panda attempting to eat a massive stalk of bamboo"
          />
          <MDBCarouselCaption>
            <h5
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Panda
            </h5>
            <p
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Panda eating bamboo.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            height="750"
            src={Img3}
            className="d-block w-100"
            alt="Meerkat Statues staring into camera"
          />
          <MDBCarouselCaption>
            <h5
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Meerkats
            </h5>
            <p
              style={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              Meerkat Statues.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
export default HomeCarousel;
