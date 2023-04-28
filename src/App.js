
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main';

function App() {
  return (
    <div className="font-reg">
      <div className="bg-black h-[10vh]">
        <header>
        <Nav/>
        </header>
        <main>
        <Main/>
        </main>
      </div>

    </div>
  );
}

export default App;
