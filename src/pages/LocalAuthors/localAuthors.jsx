import React, { useEffect, useState } from "react";
import { ROUTE_NAMES } from "../../constants";
import UserNavBar from "../../components/UserNavBar/userNavBar";
import "./localAuthors.css";

const LocalAuthors = () => {
  const [narrative, setNarrative] = useState([
    {
      title: "",
      description: "",
      story: ""
    }
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}${ROUTE_NAMES.localauthors}`)
      .then((res) => res.json())
      .then((jsonRes) => setNarrative(jsonRes));
  }, []);

  return (
    <>
      <div className="user__header">
        <UserNavBar />
      </div>
      <div className="row features">
        <h1 className="features-title">Read from our local authors</h1>
        <p className="want-to-write">
          Want to write a story?
          <a href={ROUTE_NAMES.write} className="inner-inner-text">
            Write Now
          </a>
        </p>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
                {narrative.map((s) => {
                  return (
                    <div className="story" key={s._id}>
                      <h1 className="story__title">Title: {s.title}</h1>
                      <p className="story__description">
                        Description: {s.description}
                      </p>
                      <p className="story__story">Story: {s.story}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalAuthors;