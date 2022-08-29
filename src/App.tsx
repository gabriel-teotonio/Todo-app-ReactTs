import { useState } from "react";
import * as C from "./App.Styles";
import { CreateTodo } from "./components/CreateArea";
import { Itemlist } from "./components/itemList";
import { Item } from "./types/item";


const App = () => {


const [list, setList] = useState<Item[]>([]);

const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)
}

const handleTaskchange = (id: number, done: boolean) => {
  let newList = [...list]
  newList.forEach((item, index) => {
    if(newList[index].id === id){
      newList[index].done = done
    }
  })
  setList(newList)
}



return (
    <C.Container>
      <C.Area>
        <C.Header> <h1>Todo List</h1></C.Header>

        <CreateTodo onEnter={handleAddTask} />

        {list.map((item, index) => (
          <Itemlist
            key={index} 
            item={item}
            onChange={handleTaskchange}
          />
        ))}
      
      </C.Area>
    </C.Container>
  )
}


export default App;