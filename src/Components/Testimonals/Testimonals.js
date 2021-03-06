import "./Testimonals.css";
import Emily from "./../Images/image-emily.jpg";
import Thomas from "./../Images/image-thomas.jpg";
import Jennie from "./../Images/image-jennie.jpg";

export default function Testimonals() {
  const testimonals = [
    {
      image: Emily,
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      profession: "Marketing Director",
    },
    {
      image: Thomas,
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      profession: "Chief Operating Officer",
    },
    {
      image: Jennie,
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      profession: "Business Owner",
    },
  ];

  return (
    <>
      <div className="testimonals_container">
        <h1>Client Testimonials</h1>
        <div className="grid_container_testimals">
          {testimonals.map((testimonals, item) => (
            <div className="grid_testimonal" key={item}>
              <img src={testimonals.image} alt="client"  />
              <div className="testimonial_text">
                <p> {testimonals.text} </p>
              </div>
              <div className="testimonial_name">
                <h4> {testimonals.name} </h4>
              </div>
              <div className="testimonial_profession">
                <h5> {testimonals.profession} </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
