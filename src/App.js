
import './App.css';
import FooterImages from './Components/Footer/FooterImages';
import FooterNav from './Components/Footer/FooterNav';
// import Footer from './Components/Footer/FooterImages';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Main from './Components/Main/Main';
import Testimonals from './Components/Testimonals/Testimonals';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      <Main />
      <Testimonals />
      <FooterImages />
      <FooterNav />
    </div>
  );
}

export default App;
