import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { apis } from "../Api/Api";

const TrendingStories = () => {
  const [stories, setStories] = useState([]);
  const [window, setwindow] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState(0);
  // Fetch data from an API
  useEffect(() => {
    const fetchStories = async () => {
      try {
      const response = await fetch(`${apis.stories}?page=${page}`);
      const data = await response.json();
      setStories(data.results);
      setwindow(data.results.slice(scrollPosition, scrollPosition + 4 )); // Assume the API returns an array of stories
      } catch (error) {
      console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  // Handle scrolling
  const scroll = (direction) => {
    const container = document.querySelector(".story-container");
    const scrollAmount = 300; // Adjust scroll amount as needed
    if (direction === "left") {
      setScrollPosition(scrollPosition - 1);
      if(stories.length < scrollPosition){
        setScrollPosition(0);
      }
      setwindow(stories.slice(scrollPosition, scrollPosition + 4 ));
      
      //container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      setScrollPosition(scrollPosition + 1);
      //container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setwindow(stories.slice(scrollPosition, scrollPosition + 4 ));
    }
  };

  return (
    <section className="mb-5" style={{ marginTop: "95px" }}>
      <h2 className="text-center mb-4">Trending Stories</h2>
      <div className="position-relative">
        {/* Left Arrow */}
        <button
          className="btn btn-primary position-absolute start-0 top-50 translate-middle-y"
          onClick={() => scroll("left")}
          style={{ zIndex: 10 }}
        >
          &lt;
        </button>

        {/* Stories Container */}
        <div className="d-flex story-container" style={{ whiteSpace: "wrap", padding: "10px" }}>
  {window.length > 0
    ? window.map((story, index) => (
        <div
          className="card mx-4"
          key={index}
          style={{
            width: "300px",
            display: "inline-block",
            transition: "transform 0.35s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={story.image}
            className="card-img-top"
            alt={story.title}
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{story.title}</h5>
            <p className="card-text">{story.description}</p>
          </div>
        </div>
      ))
    : Array.from({ length: 4 }).map((_, index) => (
        <div
          className="card mx-4 skeleton-card"
          key={index}
          style={{
            width: "300px",
            height: "300px",
            display: "inline-block",
            background: "#e0e0e0",
            animation: "pulse 1.5s infinite",
          }}
        ></div>
      ))}
</div>;


        {/* Right Arrow */}
        <button
          className="btn btn-primary position-absolute end-0 top-50 translate-middle-y"
          onClick={() => scroll("right")}
          style={{ zIndex: 10 }}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TrendingStories;
