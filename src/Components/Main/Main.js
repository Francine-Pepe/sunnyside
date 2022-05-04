import "./Main.css";
import Egg from "./../Images/Desktop/image-transform.jpg";
import Glass from "./../Images/Desktop/image-stand-out.jpg";
import Cherry from "./../Images/Desktop/image-graphic-design.jpg";
import Orange from "./../Images/Desktop/image-photography.jpg";

const main = [
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

export default function Main() {
  return (
    <>
      <main className="main_container">
        <div class="grid-container">
          <div class="grid-item">
            <div class="grid-item_text">
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
          <div class="grid-item">
            <img src={Egg} alt="egg" />
          </div>
          <div class="grid-item">
            <img src={Glass} alt="egg" />
          </div>
          <div class="grid-item_text">
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
          {main.map((main, id) => (
            <div class="grid-item">
              <div class="grid-item_areas">
                <div
                  style={{
                    backgroundImage: `url(${main.image})`,
                    backgroundRepeat: 'no-repeat',
                    width: 720,
                    height: 600,
                    justifyContent: "center",
                    alignItems: "flex-end",
                    display: 'flex',
                    
                  }}
                >
                  <div className="grid-item_areas_text">
                    <h1 style={{ color: main.color }}>{main.title}</h1>
                    <p style={{ color: main.color }}>{main.text}</p>
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
