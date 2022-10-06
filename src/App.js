import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContentInfo from './components/ContentInfo';
// Styles
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <div>
          <Navbar />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Content" element={<ContentInfo />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
