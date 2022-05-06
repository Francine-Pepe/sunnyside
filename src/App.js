
import './App.css';
import FooterImages from './Components/Footer/FooterImages';
import FooterNav from './Components/Footer/FooterNav';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Testimonals from './Components/Testimonals/Testimonals';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Testimonals />
      <FooterImages />
      <FooterNav />
    </div>
  );
}

export default App;
