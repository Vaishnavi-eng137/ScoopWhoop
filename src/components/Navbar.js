import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBookmark,faHamburger} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg nvbar justify-content-between">
        <img
          src="https://s4.scoopwhoop.com/anj/sw120-x-120/682842409.png"
          height="50px"
          width="50px"
          style={{padding:".3rem"}}
        ></img>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                TRENDING
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                VIDEOS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                STORIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                QUIZZES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                MEMES
              </a>
            </li>
          </ul>
        </div>
        <div className="sideIcon">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </nav>
     </div>
  );
}

export default Navbar;
