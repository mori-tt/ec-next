'use client';
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Hello EC</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;