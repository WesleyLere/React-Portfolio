import React from "react";
import { projects } from "../lib/portExpo";

function portfolio() {
  return (
    <>
    <section id="work" className="jobs">

      <div className="flex-row">
        <h2 className="section-title secondary-border">Work</h2>
      </div>

      {projects.map((project, i) => (
      <div className="job" key={i}>
        <div className="job-info">
          <div className="job-img">
            <a href={project.link} target="blank">
              <img
                src={project.src}
                className="my-2"
                style={{ width: "100%" }}
                alt={project.name}
              />
            </a>
          </div>
          <div className="job-text">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      )
    )}
    </section>
  </>
  );
};

export default portfolio;