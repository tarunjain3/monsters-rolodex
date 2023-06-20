import { useEffect, useState } from 'react';

import SearchInput from './components/search-box/seach-input';
import CardList from './components/card-list/card-list';

import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(() => users))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const filterMosters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMonsters(filterMosters)
  }, [searchQuery, monsters])

  const onChangeHandler = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  }
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchInput placeholder="Search monsters" value={searchQuery} onChangeHandler={onChangeHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
