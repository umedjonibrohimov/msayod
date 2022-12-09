import React from "react";
import './header.css';

function Footer() {
  return(
    <div>
      <footer class=" text-center fixed-bottom border border-danger" id='header'>
        <div class="container">
          <section class="mb-4">
            <a class="btn btn-outline-light btn-floating m-1 text-white border border-danger" href="https://www.facebook.com/" role="button"><i class="fab fa-facebook-f "></i></a>
            <a class="btn btn-outline-light btn-floating m-1 text-white border border-danger" href="" role="button"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-floating m-1 text-white border border-danger" href="" role="button"><i class="fab fa-google"></i></a>
            <a class="btn btn-outline-light btn-floating m-1 text-white border border-danger" href="https://www.instagram.com/" role="button"><i class="fab fa-instagram"></i></a>
          </section>
        </div>
        <div class="text-center">
          © 2022 Copyright:
          <a class="text-white" href="/">MSayod</a>
        </div>
        <div class="credits">
          Website developed by: Umedjon Ibrohimov
        </div>
      </footer>
    </div>
  )
}

export default Footer;