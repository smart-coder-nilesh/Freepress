import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assests/logo.png"; 

const App = () => {
  return (
    <div className="container my-4">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center">
        <img src={logo} alt="FreePress Logo" className="me-2" style={{ height: "70px" }} />
        <div className="logo fw-bold fs-4"></div>
      </div>
        <nav>
          <a href="#" className="me-3 text-decoration-none text-dark">
            Sports
          </a>
          <a href="#" className="me-3 text-decoration-none text-dark">
            Business
          </a>
          <a href="#" className="text-decoration-none text-dark">
            Health
          </a>
        </nav>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for articles and news"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </header>

      {/* Trending Stories */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Trending Stories</h2>
        <div className="row">
          {[
            {
              title: "Urban Trends",
              description:
                "Read about the latest urban development trends shaping cities worldwide.",
              image: "https://via.placeholder.com/150", // Replace with real images
            },
            {
              title: "Island Escape",
              description:
                "Discover hidden gems in island getaways and plan your next escape.",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Music Festivals",
              description:
                "Explore the most popular music festivals happening this year.",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Organic Living",
              description:
                "Learn about the health benefits of incorporating organic produce into your diet.",
              image: "https://via.placeholder.com/150",
            },
          ].map((story, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card">
                <img
                  src={story.image}
                  className="card-img-top"
                  alt={story.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories and Articles */}
      <section>
        <h2 className="text-center mb-4">Categories and Articles</h2>
        <div className="row">
          {[
            {
              title: "City Architecture",
              description:
                "Explore the latest trends in urban architecture.",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Home Decor Tips",
              description:
                "Discover how to create a warm and inviting home.",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Adventure Awaits",
              description:
                "Join our adventure club for thrilling experiences.",
              image: "https://via.placeholder.com/150",
            },
          ].map((category, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text">{category.description}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;