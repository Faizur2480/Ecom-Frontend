import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Dashboard extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            User Application
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input type="text" placeholder="Search.." name="search"/>
          <button className="btn btn-outline-light">
              Search
          </button>  
          <div>
          <Link className="btn btn-outline-light" to="/dashboard">
            All
          </Link>
          <Link className="btn btn-outline-light" to="/category">
            Category
          </Link>
          <Link className="btn btn-outline-light" to="/products">
            Products
          </Link>      
          </div>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
