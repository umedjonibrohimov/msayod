import React from "react";
import './header.css'

function Header() {
  return(
    <div className="border border-danger" id='header'>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="/">MSayod</a>
          <button class="navbar-toggler" type="button" id='header' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                  <ul class="dropdown-menu dropdown-box" aria-labelledby="navbarDropdown">
                    <li class="nav-item">
                      <a class="nav-link text-white" aria-current="page" href="/hunting">Hunting</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/tourism">Tourism</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/cproject">Conservation Project</a>
                    </li>
                   </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/Gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/Lodging">Lodging</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/aboutus">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header;