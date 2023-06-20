import { useEffect, useState } from 'react';
import './App.css';

import SearchInput from './components/search-box/seach-input';
import CardList from './components/card-list/card-list';

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
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchInput placeholder="Search monsters" />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
