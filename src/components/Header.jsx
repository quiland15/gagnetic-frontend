import { Container, Nav, Navbar, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/img/Logo1.png'
import '../assets/css/home/header.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="sticky-top bg-white shadow-sm py-3 px-4">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
            <img src={Logo} alt="Logo GT" />
          </div>
          <span className="fw-bold text-primary fs-5">GadgetTech</span>
        </Navbar.Brand>

        {/* Navigation */}
        <Nav className="me-auto ms-4 gap-4 d-none d-lg-flex">
          <Nav.Link href="/" className="text-primary fw-semibold border-bottom border-primary">Home</Nav.Link>
          <Nav.Link href="/shop" className="text-secondary">Shop</Nav.Link>
          <Nav.Link href="/about" className="text-secondary">About</Nav.Link>
          <Nav.Link href="/contact" className="text-secondary">Contact</Nav.Link>
        </Nav>

        {/* Search + Cart + Login */}
        <div className="d-flex align-items-center gap-3">
          <Form className="d-flex align-items-center rounded-pill border px-3 py-1" style={{ minWidth: '260px' }}>
            <FiSearch className="me-2 text-muted" />
            <FormControl
              type="search"
              placeholder="Search products..."
              className="border-0 shadow-none"
            />
          </Form>

          {/* Cart */}
          <div className="position-relative me-2">
            <FaShoppingCart className="fs-5 text-dark" />
            <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
              3
            </Badge>
          </div>

          {/* Login */}
          <Button variant="outline-secondary" className="rounded-3 px-3">Login</Button>
        </div>
      </Container>
    </Navbar>
  );
}