export const Photos = ({ images }) => {
  return (
    <div className="images-container">
      {images?.map((image, index) => (
        <img className="carousel-photo" key={index} srcSet="" src={image.large} alt="" />
      ))}
    </div>
  );
};
