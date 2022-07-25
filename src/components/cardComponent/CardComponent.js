import React, { useEffect, useRef, useState } from "react";
import "./CardComponent.css";
import CardMenu from "./CardMenu";

export default function CardComponent({ title, description, image }) {
  const [style, setStyle] = useState(null);

  const descriptionLength = description.split(" ").length;

  console.log("Description:", descriptionLength);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  useEffect(() => {
    
    if (descriptionLength >= 0 && descriptionLength <= 8) {
      setStyle({
        marginTop: "55px",
      });
    } else if (descriptionLength >= 9 && descriptionLength <= 16) {
      setStyle({
        marginTop: "28px",
      });
    } else if (descriptionLength >= 17) {
      setStyle({
        marginTop: "0px",
      });
    }
  }, [descriptionLength]);

  return (
    <div className="card__component">
      

      <div className="card my-3">
          <div className="deactivated__tag">
            <p>Deactivated</p>
          </div>
        <CardMenu />

        <div className="card__inner">
          <div
            id="inner__title--desc"
            className="inner__title--desc"
            style={style}
          >
            <h6 className="card__title text-start flexible">
              {truncate(title, 40)}
            </h6>
            <p className="card__desc">{truncate(description, 110)}</p>
          </div>

          <div className="image__container">
            <img className="card__image" src={image} alt="Card Image" />
          </div>
          <div className="card__footer">
            <a title="Add Photos" href="#">
              <i className="bi bi-image"></i>
            </a>
            <a title="Add Videos" href="#">
              <i className="bi bi-camera-video"></i>
            </a>
            <a title="Add Audio" href="#">
              <i className="bi bi-mic"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
