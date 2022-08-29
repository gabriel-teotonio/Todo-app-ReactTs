import * as C from './style'
import { Item } from '../../types/item'


type PropsList = {
    item: Item,
    onChange: (id: number, done:boolean) => void
}


export const Itemlist = ({ item, onChange }: PropsList) => {

    return (
        <C.Container done={item.done}>
            <input type="checkbox"
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
        />
            <label>{item.name}</label>
        </C.Container>
    )
}
