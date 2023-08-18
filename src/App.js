import "./App.css";
import Nav from "./components/Nav";
import dataBiz from "./images/client-databiz.svg";
import audioPhile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";
import hero from "./images/image-hero-desktop.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <section className="main-section">
          <div className="info">
            <h1 className="title">Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="learn">Learn more</button>
            <div className="graphics">
              <img src={dataBiz} alt="databix logo"></img>
              <img src={audioPhile} alt="audiophile logo"></img>
              <img src={meet} alt="meet logo"></img>
              <img src={maker} alt="maker logo"></img>
            </div>
          </div>

          <div className="main-graphic">
            <img src={hero}></img>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
