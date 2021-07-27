import './App.scss';
import LandingPage from './components/landingpage/LandingPage';
import About from './components/about/About';
import Features from './components/features/Features';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <main>
        <About />
        <Features />
        <Cards />
      </main>
    </div>
  );
}

export default App;
