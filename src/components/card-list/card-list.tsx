import CardView from '../card-view/card-view'
import { Monster } from '../../App'
import './card-list.css'

type cardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: cardListProps) => {
    return <div className="card-list">
        {monsters.map(monster => {
            return <CardView key={monster.id} monster={monster} />
        })}
    </div>
}

export default CardList;