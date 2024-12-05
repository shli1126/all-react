import { Box, Container, Flex } from "@chakra-ui/react";
import logo from "../../public/assets/go.png";


const Navbar = () => {
	return (
		<Container maxW={"900px"}>
			<Box px={4} my={4} borderRadius={"5"}>
				<Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
					<Flex>
						<h2>
							TodoList
						</h2>
					</Flex>
					<Flex>
						<img src={logo} alt='logo' width={50} height={50} />
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}

export default Navbar