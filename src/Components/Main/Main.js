import "./Main.css";
import Egg from "./../Images/Desktop/image-transform.jpg";
import Glass from "./../Images/Desktop/image-stand-out.jpg";
import Cherry from "./../Images/Desktop/image-graphic-design.jpg";
import Orange from "./../Images/Desktop/image-photography.jpg";

const areas = [
  {
    image: Cherry,
    title: "Graphic design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    color: "hsl(167, 40%, 24%)",
  },
  {
    image: Orange,
    title: " Photography",
    text: " Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    color: "hsl(198, 62%, 26%)",
  },
];


// const main = [
//   {
//     title: "Transform your brand",
//     text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients throug compelling visuals that do most of the marketing for you.",
//     image: Egg
//   },
//   {
//     title: "Stand out to the right audience",
//     text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
//     image: Glass
//   },
// ]

export default function Main() {
  return (
    <>
      <main className="main_container">
        <div className="grid-container">
          <div className="grid-item">
            <div className="grid-item_text" id="text">
              <h1>
                Transform your <br /> brand
              </h1>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <div className="link_hover">
                <a className="yellow_link" href="/">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <img src={Egg} alt="egg" id="egg" />
          </div>
          <div className="grid-item">
            <img src={Glass} alt="glass" id="glass" />
          </div>
          <div className="grid-item">
            <div className="grid-item_text" id="text">
              <h1>Stand out to the right audience</h1>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <div className="link_hover">
                <a className="pink_link" href="/">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          {areas.map((areas, index) => (
            <div className="grid-item" key={index}>
              <div className="grid-item_areas" >
                <div id="areas"
                  style={{
                    backgroundImage: `url(${areas.image})`,
                    backgroundRepeat: "no-repeat",
                    width: "45em",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  <div className="grid-item_areas_text" key={index}>
                    <h1 style={{ color: areas.color }}>{areas.title}</h1>
                    <p style={{ color: areas.color }}>{areas.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
