import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title.js';
import Navigation from './Components/Navigation.js';
import SectionTitle from './Components/SectionTitle.js';
import ScrollSection from './Components/ScrollSection.js';
import Card from './Components/Card.js';

function App() {
  return (
    <div className="App">
    <Title/>
    <Navigation/>
    <SectionTitle content="Recomended for You"/>
    <Card/>
    <SectionTitle content="Top Content"/>
    <SectionTitle content="Best in Podcasts"/>
    </div>
  );
}

export default App;
