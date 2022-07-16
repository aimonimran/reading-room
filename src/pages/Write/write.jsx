import React, { useState } from "react";
import { ROUTE_NAMES } from "../../constants";
import axios from "axios";
import UserNavBar from "../../components/UserNavBar/userNavBar";
import "./write.css";

const Write = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    const newStory = {
      title: input.title,
      description: input.description,
      story: input.story,
    };
    axios.post(
      `${process.env.REACT_APP_BACKEND_URL}${ROUTE_NAMES.write}`,
      newStory
    );
    setInput({
      title: "",
      description: "",
      story: "",
    });
  };

  return (
    <>
      <div className="user__header">
        <UserNavBar />
      </div>
      <div className="row features">
        <h1 className="features-title">Write A Story</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
                <form action="" className="save">
                  <div className="form-group">
                    <input
                      name="title"
                      onChange={handleChange}
                      value={input.title}
                      autoComplete="off"
                      className="form-control"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="description"
                      onChange={handleChange}
                      value={input.description}
                      autoComplete="off"
                      className="form-control"
                      placeholder="Description"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="story"
                      rows="7"
                      style={{ resize: "none" }}
                      onChange={handleChange}
                      value={input.story}
                      autoComplete="off"
                      className="form-control"
                      placeholder="Story"
                      required
                    />
                  </div>
                  <p className="want-to-read">
                    Want to read a story from a local author?
                    <a
                      href={ROUTE_NAMES.localauthors}
                      className="inner-inner-text"
                    >
                      Read Now
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-register"
                  >
                    Publish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
