import "./Footer.css";
import Bottle from "./../Images/Desktop/image-gallery-milkbottles.jpg";
import Orange from "./../Images/Desktop/image-gallery-orange.jpg";
import Cone from "./../Images/Desktop/image-gallery-cone.jpg";
import SugarCubes from "./../Images/Desktop/image-gallery-sugarcubes.jpg";

export default function FooterImages() {
  const images = [
    {
      image: Bottle,
    },
    {
      image: Orange,
    },
    {
      image: Cone,
    },
    {
      image: SugarCubes,
    },
  ];

  return (
    <>
      <div
        className="images_container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((images, id) => (
          <div className="images" key={id}>
            <img
              src={images.image}
              alt="footer_images"
              width={360}
              height={"100%"}
              style={{ padding: 0, margin: 0}}
              
            />
          </div>
        ))}
      </div>
    </>
  );
}
