import "./MainContent.css";
import Egg from "./../Images/Desktop/image-transform.jpg";
import Glass from "./../Images/Desktop/image-stand-out.jpg";
import Cherry from "./../Images/Desktop/image-graphic-design.jpg";
import Orange from "./../Images/Desktop/image-photography.jpg";

const contentTop = [
  {
    title: "Transform your brand",
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients throug compelling visuals that do most of the marketing for you.",
    image: Egg,
  },
];

const contentBottom = [
  {
    title: "Stand out to the right audience",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital place.",
  },
  {
    image: Glass,
  },
];

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

export default function MainContent() {
  return (
    <>
      <main className="content_container">
        {contentTop.map((contentTop, index) => (
          <div className="top_content">
            <div className="content">
              <div className="content_text">
                <h1> {contentTop.title} </h1>
                <p> {contentTop.text} </p>
                <div className="link_hover">
                  <a className="yellow_link" href="/">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <img src={contentTop.image} alt="" />
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
