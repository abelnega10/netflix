import Home from './pages/home/home.js'
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './App.css';
import Banner from './components/Banner/Banner.js';

function App() {
  return (
    <div className="App">
    
     <Header />
     <Banner />
     <Footer/>

    </div>
  );
}

export default App;
