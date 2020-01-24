import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
  transform: rotate(${props => props.rotation}deg);
  display: inline-block;
  width: 170px;
  height: 190px;
  background: white;
  padding: 0;
  overflow: hidden;
  border-radius: 1px;
  box-shadow: grey 1px 1px;
  margin: 15px;
  transition: transform 100ms ease-in-out;
  transition: box-shadow 50ms;

  &:hover {
    transform: translate(-5px, -5px) rotate(${props => props.rotation}deg);
    box-shadow: grey 7px 7px 3px;
  }
`;

const PhotoImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto 0 auto;
  display: block;
  object-fit: cover;
  border: 1px #f6f6f6 solid;
`;

const PhotoNote = styled.p`
  color: black;
  margin: 0 auto;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  font-size: 20px;
`;

const MAX_ROTATION = 20;

export default class Photo extends React.Component {
  state = {
    rotation: Math.floor(Math.random() * MAX_ROTATION - MAX_ROTATION / 2)
  };

  render() {
    const { url, note, click } = this.props;
    const { rotation } = this.state;

    return (
      <Wrapper rotation={rotation} onClick={click}>
        <PhotoImage src={url} alt={"TODO: SOMETHING NEEDS TO BE HERE"} />
        <PhotoNote>{note}</PhotoNote>
      </Wrapper>
    );
  }
}