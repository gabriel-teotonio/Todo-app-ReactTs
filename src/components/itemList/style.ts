import styled from "styled-components";

export type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done}:ContainerProps ) => (
`
    display: flex;
    background-color: #20212c;
    padding: 10px ;
    border-radius: 10px;
    margin: .3rem 0;
    gap: 1rem;

    input{
        width: 25px;
        height: 25px;
    }
    label{
        color:#ccc;
        text-decoration: ${done ? 'line-through' : 'initial'} ;
    }
`

))
