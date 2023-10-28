import { Input } from "@mui/material";

const ContactUs = () => {
  return (
    <>
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
            <a href="/home" class="nav-item nav-link">
              Home
            </a>
            <a href="/" class="nav-item nav-link">
              Service
            </a>
            <a href="/contactUs" class="nav-item nav-link active">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div class="container-fluid bg-primary py-5 bg-hero mb-5">
        <div class="container py-5">
          <div class="row justify-content-start">
            <div class="col-lg-8 text-center text-lg-start">
              <h1 class="display-1 text-white mb-md-4">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="mx-auto text-center mb-5" style={{ maxWidth: "500px" }}>
            <h6 class="text-primary text-uppercase">Contact Us</h6>
            <h1 class="display-5">Please Feel Free To Contact Us</h1>
          </div>
          <div class="row g-0">
            <div class="col-lg-7">
              <div class="bg-primary h-100 p-5">
                <form>
                  <div class="row g-3">
                    <div class="col-6">
                      <Input
                        type="text"
                        class="form-control bg-light border-0 px-4"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div class="col-6">
                      <Input
                        type="email"
                        class="form-control bg-light border-0 px-4"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div class="col-12">
                      <Input
                        type="text"
                        class="form-control bg-light border-0 px-4"
                        placeholder="Subject"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div class="col-12">
                      <textarea
                        class="form-control bg-light border-0 px-4 py-3"
                        rows="2"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-secondary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="bg-secondary h-100 p-5">
                <h2 class="text-white mb-4">Get In Touch</h2>
                <div class="d-flex mb-4">
                  <div
                    class="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="bi bi-geo-alt fs-4 text-white"></i>
                  </div>
                  <div class="ps-3">
                    <h5 class="text-white">Our Office</h5>
                    <span class="text-white">123 Street, Colombo , SL</span>
                  </div>
                </div>
                <div class="d-flex mb-4">
                  <div
                    class="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="bi bi-envelope-open fs-4 text-white"></i>
                  </div>
                  <div class="ps-3">
                    <h5 class="text-white">Email Us</h5>
                    <span class="text-white">info@efarm.com</span>
                  </div>
                </div>
                <div class="d-flex">
                  <div
                    class="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="bi bi-phone-vibrate fs-4 text-white"></i>
                  </div>
                  <div class="ps-3">
                    <h5 class="text-white">Call Us</h5>
                    <span class="text-white">+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-footer bg-primary text-white mt-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-8 col-md-6">
              <div class="row gx-5">
                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 class="text-white mb-4">Get In Touch</h4>
                  <div class="d-flex mb-2">
                    <i class="bi bi-geo-alt text-white me-2"></i>
                    <p class="text-white mb-0">123 Street, Colombo , SL</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-envelope-open text-white me-2"></i>
                    <p class="text-white mb-0">info@efarm.com</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-telephone text-white me-2"></i>
                    <p class="text-white mb-0">+012 345 67890</p>
                  </div>
                  <div class="d-flex mt-4">
                    <a
                      class="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-secondary btn-square rounded-circle me-2"
                      href="#"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      class="btn btn-secondary btn-square rounded-circle"
                      href="#"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 class="text-white mb-4">Quick Links</h4>
                  <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Home
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>About Us
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Our
                      Services
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Meet The
                      Team
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Latest
                      Blog
                    </a>
                    <a class="text-white" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Contact
                      Us
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 class="text-white mb-4">Popular Links</h4>
                  <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Home
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>About Us
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Our
                      Services
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Meet The
                      Team
                    </a>
                    <a class="text-white mb-2" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Latest
                      Blog
                    </a>
                    <a class="text-white" href="#">
                      <i class="bi bi-arrow-right text-white me-2"></i>Contact
                      Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-dark text-white py-4">
        <div class="container text-center">
          <p class="mb-0">
            &copy;{" "}
            <a class="text-secondary fw-bold" href="#">
              Efarm
            </a>
            . All Rights Reserved. Designed by{" "}
            <a class="text-secondary fw-bold" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
