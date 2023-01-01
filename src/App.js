import "./App.css";
import { useState } from "react";
import { storage } from "./firebase";
import firebase from "./firebase";

function App() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`/videos/${file.name}`).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        setProgress(percent);
      },
      console.error,
      () => {
        storage
          .ref(`/videos/${file.name}`)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setUrl(null);
            console.log("Uploaded url: " + url);
          });
      }
    );
  };
  console.log(file);
  console.log(progress);
  return (
    <div className="App">
      <input onChange={handleChange} type="file" />
      <button disabled={!file} onClick={handleUpload}>
        Upload to firebase
      </button>
      <img src={url} alt="" />
    </div>
  );
}

export default App;
