import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Logo from '../assets/img/Logo1.png'

export default function Footer() {
  return (
    <footer className="bg-white border-top pt-5 pb-4 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Column 1 - Logo & Desc */}
          <Col md={4} className="text-start">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={Logo} alt="Logo Quiland" className="d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }} />
              <h5 className="mb-0 text-primary fw-bold">Quiland</h5>
            </div>
            <p className="text-muted">
              Your premium destination for smartphone and gadget accessories. Quality products delivered worldwide with fast shipping and excellent support.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5 text-muted">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={2} className="text-start">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-muted">Shop All Products</a></li>
              <li><a href="#" className="text-decoration-none text-muted">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact Support</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Shipping Info</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Returns & Refunds</a></li>
            </ul>
          </Col>

          {/* Column 3 - Categories */}
          <Col md={2} className="text-start">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled text-muted">
              <li><a href="#" className="text-decoration-none text-muted">Phone Cases</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Chargers & Cables</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Audio Accessories</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Power Banks</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Stands & Holders</a></li>
            </ul>
          </Col>

          {/* Column 4 - Stay Connected */}
          <Col md={4} className="text-start">
            <h6 className="fw-bold mb-3">Stay Connected</h6>
            <div className="text-muted d-flex align-items-center mb-1">
              <FiMail className="me-2" />
              <a href="mailto:support@quiland.site" className="text-muted text-decoration-none">support@quiland.site</a>
            </div>
              
            <div className="text-muted d-flex align-items-center mb-1">
              <FiPhone className="me-2" />
              <a href="https://wa.me/6282192987104" target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none">
                +62 821-9298-7104
              </a>
            </div>
            <div className="text-muted d-flex align-items-center"><FiMapPin className="me-2" /> Indonesia, North Sulawesi.</div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="justify-content-between">
          <Col md={6} className="text-muted small text-start">
            © 2025 Quiland. All rights reserved.
          </Col>
          <Col md={6} className="d-flex justify-content-md-end gap-4 text-muted small">
            <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-muted">Terms of Service</a>
            <a href="#" className="text-decoration-none text-muted">Cookie Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}