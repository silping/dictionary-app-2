import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <span>Click on the image to see full resolution</span>
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    alt={props.keyword}
                    src={photo.src.landscape}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
