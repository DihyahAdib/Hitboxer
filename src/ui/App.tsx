import { useState } from "react";
import "./App.css";

function App() {
  const [imgPath, setImgPath] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);

  async function handleOpen() {
    const newFilePath = await window.electronAPI.openImageDialog();
    if (!newFilePath) return;

    setFilePath(newFilePath);

    const blobUrl = window.electronAPI.loadImage(newFilePath);
    setImgPath(blobUrl);
  }

  async function handleClose() {
    if (filePath) {
      console.log("The file path is:", filePath);
      setImgPath(null);
      setFilePath(null);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>
        {filePath ? (
          <>
            Img path selected: <p>{filePath}</p>
          </>
        ) : (
          "No Image Currently Selected"
        )}
      </h3>
      <div>
        <button onClick={handleOpen}>
          {!imgPath ? "Open Image" : "Change Image"}
        </button>

        <button onClick={handleClose}>Remove Image</button>
      </div>

      {imgPath && (
        <div className="image-viewer">
          <img src={imgPath} className="checkerboard-conic-background" />
        </div>
      )}
    </div>
  );
}

export default App;
