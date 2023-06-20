import CardView from '../card-view/card-view'
import { Monster } from '../../App'
import './card-list.css'

type cardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: cardListProps) => {
    return <div className="card-list d-flex flex-wrap gap-4 justify-content-center mx-auto">
        {monsters.map(monster => {
            return <CardView className='w-20' key={monster.id} monster={monster} />
        })}
    </div>
}

export default CardList;