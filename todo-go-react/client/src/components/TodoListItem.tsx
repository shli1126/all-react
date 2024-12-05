import { CheckboxCard } from "@/components/ui/checkbox-card"
import { Container } from "@chakra-ui/react"
import { Todo } from "./TodoList"

const TodoListItem = () => {
    return (
        <Container alignItems="center" display="flex" flexDirection="column" mt="50px" >
            <CheckboxCard label="1" description="todo 1" width="500px" maxH="200px" />
        </Container>
    )
}

export default TodoListItem
