import "./Main.css";
import Egg from "./../Images/Desktop/image-transform.jpg";
import Glass from "./../Images/Desktop/image-stand-out.jpg";

//   const main = [
//     {
//       title: "Transform your brand",
//       text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
//       button: "Learn more",
//     },
//     {
//       image: Egg,
//     },
//     {
//       image: Glass,
//     },
//     {
//       title: "Stand out to the right audience",
//       text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
//       button: "Learn more",
//     },
//     {
//       image: Cherry,
//       title: "Graphic design",
//       text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
//     },
//     {
//       image: Orange,
//       title: " Photography",
//       text: " Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
//     },
//   ];

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
          <div class="grid-item">
            <div className="cherry_bg">
              <div class="grid-item_areas">
                <h1>Graphic design</h1>
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div className="tangerin_bg">
              <div class="grid-item_areas">
                <h1> Photography </h1>
                <p>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}