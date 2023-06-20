import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(() => users))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <input type="text" placeholder="Enter your name" />
      <div className="moster-list">
        {monsters.map(monster => {
          return <div key={monster.id}>{monster.name}</div>
        })}
      </div>
    </div>
  );
}

export default App;
