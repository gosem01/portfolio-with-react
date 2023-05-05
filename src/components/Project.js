import React from 'react';

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>View project</a>
    </div>
  );
};

export default Project;