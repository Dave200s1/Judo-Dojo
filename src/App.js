import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CoverPage from './CoverPage';

import Card from './Card';
import MiddleSec from './MiddleSec';
import FooterContainer from './FooterContainer';


function App() {
  return (

    <div className="App">
      
      <Header></Header>
      <main>
        <CoverPage></CoverPage>
      
        <Card></Card>
        <MiddleSec></MiddleSec>
      </main>

      <footer>
      <FooterContainer></FooterContainer>
      </footer>


    </div>

  );
}

export default App;
