import { useState, KeyboardEvent } from "react"
import { Container } from "./style"


type Props = {
    onEnter: (taskName: string) => void
}

export const CreateTodo = ({ onEnter }:Props) => {

    const [ inputText, setInputText ] = useState<string>('')

    const handleKeyUp = (e:KeyboardEvent) => {
        if(e.code === "Enter" && inputText !== ""){
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <Container>
            <div className="image">+</div>
            <input 
            type="text"
            placeholder="insira uma tarefa" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
        />
        </Container>
    )
}
