import { Monster } from '../../App'
import './card-view.css'

type cardViewProps = {
    monster: Monster
}
const CardView = ({ monster }: cardViewProps) => {
    const { id, name, email } = monster;
    return <div className='card-container'>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
}
export default CardView;