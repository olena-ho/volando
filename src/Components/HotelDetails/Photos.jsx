export const Photos = ({ images }) => {
  return (
    <div className="images-container">
      {images?.map((image, index) => (
        <img key={index} srcSet="" src={image.small} alt="" />
      ))}
    </div>
  );
};
