import React from "react";
import "./NewPhotoForm.css";
import { FaRegTimesCircle, FaFileUpload } from "react-icons/fa";

const SAMPLE_IMAGE = `https://firebasestorage.googleapis.com/v0/b/wedding-photos-1eb06.appspot.com/o/samplePicture.jpg?alt=media&token=691e418a-3b6e-44c1-ba36-59bc01f4f553`;

export default class NewPhotoForm extends React.Component {
  //TODO: Change starting url to something else once photo upload has been added.
  state = { newPhoto: { url: SAMPLE_IMAGE, note: "" } };

  render() {
    const { close, submit } = this.props;
    const { newPhoto } = this.state;
    const noteAtMaxLength = newPhoto.note.length >= 12;
    return (
      <div className="new-photo-container">
        <FaRegTimesCircle className="close-button" onClick={() => close()} />
        <div className="new-photo-upload-node">
          <FaFileUpload />
          <form
            className=""
            onSubmit={event => {
              event.preventDefault();
              console.log("submitting");
              console.log(newPhoto);
              submit(newPhoto);
              close();
            }}
          >
            <input
              type="text"
              id="comment"
              className="input note-input"
              auto="off"
              value={newPhoto.note}
              onChange={event => {
                const trimmedValue = event.target.value.slice(0, 12);
                this.setState({
                  newPhoto: {
                    note: trimmedValue,
                    url: this.state.newPhoto.url
                  }
                });
              }}
            />
            <span
              className={`length-note ${noteAtMaxLength ? "max-length" : ""}`}
            >
              {newPhoto.note.length}/12
            </span>
            <button
              className="btn"
              type="submit"
              disabled={newPhoto.url === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
