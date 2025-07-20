import 'bootstrap/dist/css/bootstrap.min.css'
import useTitle from '../components/useTitle'
import Banner from '../assets/img/hero-banner.jpg'
export default function App() {
  useTitle('Dashboard | Quiland')

  return (
    <>
      <main>
      {/* Hero Banner */}
      <section className="bg-dark text-white py-5 justify-content-center" style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '650px'
      }}>
        <div className="container justify-content-center text-center py-5">
          <h1 className="display-4 fw-bold">Premium Gadget Accessories</h1>
          <p className="lead">Discover the latest accessories for your smartphone, tablet, and more.</p>
          <button className="btn btn-primary btn-lg mt-3">Shop Now</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 fw-semibold text-center">Popular Categories</h2>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <img src="/assets/headphones.jpg" alt="Headphones" className="img-fluid rounded" />
              <h5 className="mt-2">Headphones</h5>
            </div>
            <div className="col-md-3">
              <img src="/assets/chargers.jpg" alt="Chargers" className="img-fluid rounded" />
              <h5 className="mt-2">Chargers</h5>
            </div>
            <div className="col-md-3">
              <img src="/assets/cases.jpg" alt="Cases" className="img-fluid rounded" />
              <h5 className="mt-2">Phone Cases</h5>
            </div>
            <div className="col-md-3">
              <img src="/assets/cables.jpg" alt="Cables" className="img-fluid rounded" />
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
