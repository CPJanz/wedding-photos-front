import React from "react";
import "./Photo.css";

const MAX_ROTATION = 20;

export default class Photo extends React.Component {
  state = {
    hovering: "",
    rotation: Math.floor(Math.random() * MAX_ROTATION - MAX_ROTATION / 2)
  };

  mouseOver = () => {
    this.setState({ hovering: "hovering" });
  };

  mouseOut = () => {
    this.setState({ hovering: "" });
  };

  render() {
    const { url, note, onClick } = this.props;
    const { hovering, rotation } = this.state;

    return (
      <div
        className="photo-wrapper"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className={`photo-container ${hovering}`}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          onClick={onClick}
        >
          <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
          {note.map((line, index) => {
            return (
              <p
                className={note.length > 1 ? "long-note" : "note"}
                key={`${url}-${index}`}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}