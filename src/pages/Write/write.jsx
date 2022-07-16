import React, { useState } from "react";
import axios from 'axios';
import UserNavBar from "../../components/UserNavBar/userNavBar";

const Write = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
  };

  const handleClick = (e) => {
    const newStory = {
        title: input.title,
        description: input.description
    }
    axios.post('http://localhost:4000/write', newStory);
}

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
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="description"
                      rows="5"
                      onChange={handleChange}
                      value={input.description}
                      autoComplete="off"
                      className="form-control"
                      placeholder="Description"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="btn btn-register"
                  >
                    Save
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
