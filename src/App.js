import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title.js';
import Navigation from './Components/Navigation.js';
import SectionTitle from './Components/SectionTitle.js';
import ScrollSection from './Components/ScrollSection.js';

function App() {
  return (
    <div className="App">
    <Title/>
    <Navigation/>
    <SectionTitle content="Title"/>
    <SectionTitle content="Title2"/>
    <SectionTitle content="Title3"/>
    <ScrollSection/>
    </div>
  );
}

export default App;
