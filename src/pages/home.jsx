import 'bootstrap/dist/css/bootstrap.min.css'
import useTitle from '../components/useTitle'
import Banner from '../assets/img/hero-banner.jpg'
export default function App() {
  useTitle('Dashboard | Quiland')

  return (
    <>
      <main>
      {/* Hero Banner */}
      <section
        className="bg-dark text-white py-5"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '650px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>Premium Tech <br />Accessories</h1>
          <p className="lead" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>Discover our curated collection of premium smartphone and gadget <br /> accessories. Quality, style, and innovation in every product.</p>
          <button className="btn btn-primary btn-lg mt-3">Shop Now &rarr;</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 fw-semibold text-center">Popular Categories</h2>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <i className="bi bi-headphones fs-1 text-primary"></i>
              <h5 className="mt-2">Headphones</h5>
            </div>
            <div className="col-md-3">
              <i className="bi bi-battery-charging fs-1 text-success"></i>
              <h5 className="mt-2">Chargers</h5>
            </div>
            <div className="col-md-3">
              <i className="bi bi-phone fs-1 text-warning"></i>
              <h5 className="mt-2">Phone Cases</h5>
            </div>
            <div className="col-md-3">
              <i className="bi bi-usb-plug fs-1 text-danger"></i>
              <h5 className="mt-2">Data Cables</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold">Flash Deals</h3>
          <p>Get up to 50% off on selected items!</p>
          <button className="btn btn-danger">View Offers</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-semibold">Customer Testimonials</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Great quality and fast shipping!"</p>
                <footer className="blockquote-footer">Sarah W.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Found all the accessories I needed in one place."</p>
                <footer className="blockquote-footer">James P.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Affordable and stylish products!"</p>
                <footer className="blockquote-footer">Lina K.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
