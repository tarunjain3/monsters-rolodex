import CardView from '../card-view/card-view'
import './card-list.css'

const CardList = ({ monsters }) => {
    return <div className="card-list">
        {monsters.map(monster => {
            return <CardView key={monster.id} monster={monster} />
        })}
    </div>
}

export default CardList;