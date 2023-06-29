import "./Normalize.css";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
