import * as firebase from "firebase";
import uuid from "uuid";

export default {
  uploadImage: async uri => {
    // generates a random image ID for firebase
    let imageID = uuid.v4() + ".jpg";
    // creates a blob (binary image format)
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(JSON.stringify(e));
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    // creates a reference based off of the generated image ID
    let ref = firebase
      .storage()
      .ref()
      .child(imageID);
    // sends the blob to firebase
    let snapshot = await ref.put(blob, { contentType: "image/jpg" });

    // returns the URL of the uploaded image
    return await snapshot.ref.getDownloadURL();
  }
};
