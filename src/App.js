
import './App.css';
import { TitleContainer, Title } from './components/Title';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      {/*    <Header/> */}
      <TitleContainer>
        <Title />
      </TitleContainer>

      <HomeContent />

      {/* <Service></Service> */}

      {/*  <Solution/> */}
      <Footer />
    </div>
  );
}

export default App;
