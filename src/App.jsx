import "./App.css";
import Gallery from "./components/Gallery.jsx";
import MainPage from "./components/MainPage.jsx";
import Menu from "./components/Menu.jsx";


function App() {
  return (
    <div>
      <div>
        <Menu />
      </div>

      <div>
        <MainPage />
      </div>

      <div>
        <Gallery />
      </div>

      
    </div>
  );
}

export default App;
