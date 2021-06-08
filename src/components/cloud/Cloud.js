import React from "react";
import rain from "../../assets/images/22.png";

export default function Cloud() {
  return (
    <div className="cloud">
      <div className="cloud__image">
        <img src={rain} alt="" />
      </div>
    </div>
  );
}
