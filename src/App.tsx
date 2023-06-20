import { useEffect, useState , ChangeEvent} from 'react';

import SearchInput from './components/search-box/seach-input';
import CardList from './components/card-list/card-list';
import { get } from './utils/network'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export type Monster = {
  id: number;
  name: string;
  email: string;
}

function App() {

  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    const fetchMonsters = async () => {
      const users: Monster[] = await get<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }
    fetchMonsters();
  }, [])

  useEffect(() => {
    const filterMosters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMonsters(filterMosters)
  }, [searchQuery, monsters])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setSearchQuery(query);
  }
  return (
    <div className="App text-center">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchInput placeholder="Search monsters" value={searchQuery} onChangeHandler={onChangeHandler} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
