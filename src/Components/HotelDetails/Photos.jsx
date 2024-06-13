import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires CSS file
import { Carousel } from 'react-responsive-carousel';

export const Photos = ({ images }) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {images?.map((image, index) => (
        <div key={index}>
          <img className="carousel-photo" src={image.large} alt="" />
        </div>
      ))}
    </Carousel>
  );
};
