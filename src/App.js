
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Card from './components/card.js';
import Data from './data.js';

function App() {
  const dataElements= Data.map(item =>{
    return <Card 
  key={item.id}
  item={item}
    />
  })
  return (
    <div>
      <Navbar/>
      {<Hero/> }
      <section className="cards-list">
      {dataElements}
            </section>
    </div>
  );
}

export default App;
