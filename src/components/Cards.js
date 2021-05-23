import React from "react";

function Cards(props) {
  const { curElem } = props;
  return (
    <div className="card">
      <img src={curElem.feature_img} className="card-img-top" alt="cards" style={{objectFit:"cover"}}></img>
      <div className="title">
        <p>{curElem.title}</p>
      </div>
      <div style={{ padding: "5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
            {curElem.cat_display[0].category_display}
          </p>
          <p style={{ fontSize: "12px" }}>
            {curElem.auth_display.display_name}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height:"10px"
          }}
        >
          <p style={{fontWeight: "lighter",fontSize: "10px", color: "Background" }}>
            {Math.ceil(
              Math.abs(new Date() - new Date(curElem.pub_date)) /
                (1000 * 60 * 60 * 24)
            )}
            days ago | {curElem.readtime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
