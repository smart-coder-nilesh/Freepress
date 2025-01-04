import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { apis } from "../Api/Api";

const TrendingStories = () => {
  const [stories, setStories] = useState([]);
  const [window, setwindow] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState(0);
  const isFirstRender = useRef(true); 
  // Fetch data from an API
  const fetchStories = async () => {
    try {
      const response = await fetch(`${apis.stories}?page=${page}`);
      const data = await response.json();
      const newStories = data.results.filter(result => !stories.some(story => story.id === result.id)); 
      setStories((stories) => [...stories, ...newStories]);// Assume the API returns an array of stories
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() =>{
    if(stories.length === 0){
      const padding = new Array(4).fill(null);
      setwindow(padding); 
    }else{
      setwindow(stories.slice(scrollPosition, scrollPosition + 4));
    }
    
  }, [stories]);

  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false
      fetchStories();
    }
  }, []);

  // Handle scrolling
  const scroll = (direction) => {
    //const container = document.querySelector(".story-container");

    if (direction === "left") {
      if (scrollPosition === 3 ) {
        return;
      }
      setScrollPosition(scrollPosition - 1);
      const value = parseInt(scrollPosition / 4);
      setPage(value);
      const newWindow = stories.slice(scrollPosition, scrollPosition + 4);
      if (newWindow.length < 4) {
        const padding = new Array(4 - newWindow.length).fill(null);
        setwindow([...newWindow, ...padding]);
      } else {
        setwindow(newWindow);
      }

      //container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      // if(window[0] == null){
      //   return;
      // }
      setScrollPosition(scrollPosition + 1);
      const value = parseInt(scrollPosition / 4);
      setPage(value);
      //container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      const newWindow = stories.slice(scrollPosition, scrollPosition + 4);
      if (newWindow.length < 4) {
        const padding = new Array(4 - newWindow.length).fill(null);
        setwindow([...newWindow, ...padding]);
        fetchStories();
      } else {
        setwindow(newWindow);
      }
    }
  };

  return (
    <section className="mb-5" style={{ marginTop: "95px" }}>
      <h2 className="text-center mb-4 headline">Trending Stories</h2>
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
          {window.map((story, index) =>
            story ? (
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
            ) : (
              <div
                className="card mx-4 skeleton-card"
                key={`skeleton-${index}`}
                style={{
                  width: "300px",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                {/* Skeleton for Image */}
                <div
                  style={{
                    height: "150px",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    animation: "pulse 1.5s infinite",
                  }}
                ></div>

                <div className="card-body">
                  {/* Skeleton for Title */}
                  <div
                    style={{
                      height: "20px",
                      background: "#e0e0e0",
                      borderRadius: "4px",
                      marginBottom: "10px",
                      width: "70%",
                      animation: "pulse 1.5s infinite",
                    }}
                  ></div>

                  {/* Skeleton for Description */}
                  <div
                    style={{
                      height: "14px",
                      background: "#e0e0e0",
                      borderRadius: "4px",
                      marginBottom: "6px",
                      width: "90%",
                      animation: "pulse 1.5s infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "14px",
                      background: "#e0e0e0",
                      borderRadius: "4px",
                      width: "80%",
                      animation: "pulse 1.5s infinite",
                    }}
                  ></div>
                </div>
              </div>
            ))
          }
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
