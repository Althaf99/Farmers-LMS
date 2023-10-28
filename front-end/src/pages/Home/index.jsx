import about from "../../components/img/about.png";
import bgproduct1 from "../../components/img/bg-product-1.png";
import bgproduct2 from "../../components/img/bg-product-2.png";
import blog1 from "../../components/img/blog-1.jpg";
import blog2 from "../../components/img/blog-2.jpg";
import blog3 from "../../components/img/blog-3.jpg";
import carousel1 from "../../components/img/carousel-1.jpg";
import carousel2 from "../../components/img/carousel-2.jpg";
import download2 from "../../components/img/download (2).jpg";
import download3 from "../../components/img/download (3).jpg";
import feature from "../../components/img/feature.png";
import footer from "../../components/img/footer.png";
import fruit from "../../components/img/fruit.png";
import product1 from "../../components/img/product-1.png";
import product2 from "../../components/img/product-2.png";
import team1 from "../../components/img/team-1.jpg";
import team2 from "../../components/img/team-2.jpg";
import team3 from "../../components/img/team-3.jpg";
import testimonial1 from "../../components/img/testimonial-1.jpg";
import testimonial from "../../components/img/testimonial.jpg";
import user from "../../components/img/user.jpg";
import vegetable from "../../components/img/vegetable.png";
const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div class="container-fluid px-5 d-none d-lg-block">
          <div class="row gx-5 py-3 align-items-center">
            <div class="col-lg-3">
              <div class="d-flex align-items-center justify-content-start">
                <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                <h2 class="mb-0">+012 345 6789</h2>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="d-flex align-items-center justify-content-center">
                <a href="index.html" class="navbar-brand ms-lg-5">
                  <h1 class="m-0 display-4 text-primary">
                    <span class="text-secondary">Modern</span>Farm
                  </h1>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="d-flex align-items-center justify-content-end">
                <a
                  class="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  class="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="btn btn-primary btn-square rounded-circle" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
          <a href="index.html" class="navbar-brand d-flex d-lg-none">
            <h1 class="m-0 display-4 text-secondary">
              <span class="text-white">Farm</span>Fresh
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto py-0">
              <a href="/home" class="nav-item nav-link active">
                Home
              </a>
              <a href="/" class="nav-item nav-link">
                Service
              </a>

              <a href="/contactUs" class="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white">Modern Farming</h3>
                  <h1 className="display-5 text-white mb-md-4">
                    Modern farming benefits from ongoing research and innovation
                    in agriculture.
                  </h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white">Modern Farming</h3>
                  <h1 className="display-5 text-white mb-md-4">
                    Farmers can produce more food with less manual labor
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div
                className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Technology</h3>
                <p className="text-white">
                  Modern farming relies heavily on technology, including
                  tractors, combine harvesters, GPS-guided machinery, drones,
                  and computerized systems for monitoring and managing farm
                  operations
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Chemical inputs</h3>
                <p className="text-white">
                  {" "}
                  Modern farming employs synthetic fertilizers, pesticides, and
                  herbicides to improve soil fertility and protect crops from
                  pests and diseases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                <img className="img-fluid mt-auto mx-auto" src={about} />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <div className="mb-3 pb-2">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5">
                  We provide modern solutions to farmers' problems
                </h1>
              </div>
              <p className="mb-4">
                Here, we provide modern solutions to the problems of the
                farmers, by this we can develop the knowledge of the farmers,
                thus strengthening the economy of the farmer
              </p>
              <div className="row gx-5 gy-4">
                <div className="col-sm-6">
                  <i className="fa fa-seedling display-1 text-secondary"></i>
                  <h4>100% Modern</h4>
                  <p className="mb-0">
                    Modern farming relies heavily on technology, including
                    tractors, combine harvesters
                  </p>
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-award display-1 text-secondary"></i>
                  <h4>Good Produkt</h4>
                  <p className="mb-0">
                    Modern farming employs synthetic fertilizers, pesticides,
                    and herbicides to improve soil fertility and protect crops
                    from pests and diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary facts py-5 mb-5">
        <div className="container py-5">
          <div className="row gx-5 gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-star fs-4 text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Our Experience</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    56
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-users fs-4 text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Farm Specialist</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    20
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-check fs-4 text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Complete Project</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    23
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-mug-hot fs-4 text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white">Happy Clients</h5>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    500
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <h6 className="text-primary text-uppercase">Services</h6>
                <h1 className="display-5">Modern Farm</h1>
              </div>
              <p className="mb-4">
                Development of farmer's knowledge and development of economy
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-truck display-1 text-primary mb-3"></i>
                <h4>Basic Facilities</h4>
                <p className="mb-0">
                  Proper land preparation and provision of regular water supply
                  and transportation facilities
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                <h4>Harvesting</h4>
                <p className="mb-0">
                  Proper harvesting and proper storage of the crop and sale of
                  the crop
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-tablet display-1 text-primary mb-3"></i>
                <h4>Agrochemicals</h4>
                <p className="mb-0">
                  Identification of crop diseases and their solutions
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-tractor display-1 text-primary mb-3"></i>
                <h4>Modern machinery</h4>
                <p className="mb-0">
                  Modern machinery used to make farming easier
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-dog display-1 text-primary mb-3"></i>
                <h4>Animals harmful to crops</h4>
                <p className="mb-0">Protecting crops from wild animals</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <i className="fa fa-seedling display-1 text-primary mb-3"></i>
                <h4>Modern plant and seed varieties</h4>
                <p className="mb-0">Modern seeds and modern plants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
        <div className="container py-5 pb-lg-0">
          <div
            className="mx-auto text-center mb-3 pb-2"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-uppercase text-secondary">Features</h6>
            <h1 className="display-5 text-white">Why Choose Us!!!</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-seedling fs-4 text-white"></i>
                </div>
                <h4 className="text-white">100% Modern</h4>
                <p className="mb-0">
                  Modern farming relies heavily on technology, including
                  tractors, combine harvesters
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-award fs-4 text-white"></i>
                </div>
                <h4 className="text-white">Good Produkt</h4>
                <p className="mb-0">
                  Modern farming employs synthetic fertilizers, pesticides, and
                  herbicides to improve soil fertility and protect crops from
                  pests and diseases.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                <p>
                  Here, we provide modern solutions to the problems of the
                  farmers, by this we can develop the knowledge of the farmers,
                  thus strengthening the economy of the farmer
                </p>
                <img className="img-fluid" src={feature} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-tractor fs-4 text-white"></i>
                </div>
                <h4 className="text-white">Modern Farming</h4>
                <p className="mb-0">
                  It represents a departure from traditional or subsistence
                  farming methods and typically involves large-scale commercial
                  operations.
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt fs-4 text-white"></i>
                </div>
                <h4 className="text-white">24/7 Support</h4>
                <p className="mb-0">
                  We provide service at any time of the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-testimonial py-5 my-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel p-5">
                <div className="testimonial-item text-center text-white">
                  <img
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src={download2}
                    alt=""
                  />
                  <p className="fs-5">
                    When the mud is washed away, the farmer is fit to be a king.
                  </p>
                  {/* <hr className="mx-auto w-25"> */}
                  <h4 className="text-white mb-0">Iresh</h4>
                </div>
                <div className="testimonial-item text-center text-white">
                  <img
                    className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4"
                    src={download3}
                    alt=""
                  />
                  <p className="fs-5">
                    When the mud is washed away, the farmer is fit to be a king.
                  </p>
                  {/* <hr className="mx-auto w-25"> */}
                  <h4 className="text-white mb-0">Iresh</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">The Team</h6>
            <h1 className="display-5">
              We Are Professional Researchers For modern Farming
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={team1} alt="" />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Mr Lakshan</h4>
                      <span className="text-white">Researcher</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-twitter text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-facebook-f text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-instagram text-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={team2} alt="" />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Mr Madhumadhava</h4>
                      <span className="text-white">Researcher</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-twitter text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-facebook-f text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-instagram text-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={team3} alt="" />
                    <div
                      className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                      style={{ background: "rgba(52, 173, 84, .85)" }}
                    >
                      <h4 className="text-white">Mr Abeyweera</h4>
                      <span className="text-white">Researcher</span>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-twitter text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-facebook-f text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in text-secondary"></i>
                    </a>
                    <a
                      className="btn btn-square rounded-circle bg-white"
                      href="#"
                    >
                      <i className="fab fa-instagram text-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">Our Blog</h6>
            <h1 className="display-5">Latest Articles From Our Blog Post</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src={blog1} alt="" />
                <a className="blog-overlay" href="">
                  <h4 className="text-white">Paddy Farmers</h4>
                  <span className="text-white fw-bold">Oct 01, 2023</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src={blog2} alt="" />
                <a className="blog-overlay" href="">
                  <h4 className="text-white">Corn Farmers</h4>
                  <span className="text-white fw-bold">Oct 01, 2023</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid" src={blog3} alt="" />
                <a className="blog-overlay" href="">
                  <h4 className="text-white">New Farmers</h4>
                  <span className="text-white fw-bold">Oct 01, 2023</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-footer bg-primary text-white mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-white mb-4">Get In Touch</h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-white me-2"></i>
                    <p className="text-white mb-0">123 Street, Colombo , SL</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-white me-2"></i>
                    <p className="text-white mb-0">info@efarm.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-white me-2"></i>
                    <p className="text-white mb-0">+012 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Quick Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Home
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>About
                      Us
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Our
                      Services
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Meet
                      The Team
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Latest Blog
                    </a>
                    <a className="text-white" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Popular Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Home
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>About
                      Us
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Our
                      Services
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>Meet
                      The Team
                    </a>
                    <a className="text-white mb-2" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Latest Blog
                    </a>
                    <a className="text-white" href="#">
                      <i className="bi bi-arrow-right text-white me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy;{" "}
            <a className="text-secondary fw-bold" href="#">
              Efarm
            </a>
            . All Rights Reserved. Designed by{" "}
            <a className="text-secondary fw-bold" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
