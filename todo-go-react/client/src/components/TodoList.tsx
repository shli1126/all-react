import { Container } from "@chakra-ui/react"
import TodoListItem from "./TodoListItem"
import { useEffect } from "react"

export type Todo = {
    _id: number,
    body: string,
    completed: boolean
}


const TodoList = () => {
  return (
    <Container >
        <TodoListItem/>
        <TodoListItem/>
        <TodoListItem/>
        <TodoListItem/>
    </Container>
  )
}

export default TodoList
