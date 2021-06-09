import React from "react";
import rain from "../../assets/images/22.png";

export default function CloudImage() {
  return (
    <div className="cloud">
      <div className="cloud__image">
        <img src={rain} alt="cloud" loading="lazy" />
      </div>
    </div>
  );
}
