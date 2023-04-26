
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero';
import MainFeatures from './components/MainFeatures'

function App() {
  return (
    <div className="font-reg">
      <div className="bg-black h-[10vh]">
        <Nav/>
        <Hero/>
        <MainFeatures/>
      </div>

    </div>
  );
}

export default App;
