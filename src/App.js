import './App.scss';
import './components/landingpage/LandingPage.scss';
import LandingPage from './components/landingpage/LandingPage';
import About from './components/about/About';
import Features from './components/features/Features';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <main>
        <About />
        <Features />
      </main>
    </div>
  );
}

export default App;
