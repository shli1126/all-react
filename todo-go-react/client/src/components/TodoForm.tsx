import { Button, Container, Input } from "@chakra-ui/react"
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { BASE_URL } from "../App"
import { Spinner } from "@chakra-ui/react"
import { Alert } from "@/components/ui/alert"

const TodoForm = () => {

    const [todo, setTodo] = useState("")
    const [loading, setLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTodo(e.target.value);
    };

    const addTodo = async () => {
        setLoading(true)
        try {
            const response = await fetch(BASE_URL + '/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ body: todo })
            })
            setLoading(false)
            if (response.ok) {
                setTodo("")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    return (
        <Container maxW="1000px" display="flex" flexDirection="column" alignItems="center">
            <Container maxW="900px" display="flex" alignItems="center">
                <Input
                    color="teal"
                    placeholder="Add a todo here!"
                    _placeholder={{ color: "inherit" }}
                    onChange={handleInputChange}
                    value={todo}
                    disabled={loading}
                />
                <Button ml="5" mr="3"
                    onClick={addTodo}>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <CiSquarePlus />
                    )}
                </Button>
            </Container>

            {showAlert && (
                <Alert status="success" title="Todo added!" mt="3"  maxW="500px"/>
            )}
        </Container>
    )
}

export default TodoForm
