import React, { useState } from "react";
import { ImageOff, Images, ImageUp } from "lucide-react";
import "./App.css";

function App() {
  const [imgPath, setImgPath] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [frames, setFrameCount] = useState<number | undefined>(1);
  const [scale, setScaleSize] = useState<number | undefined>(3);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const atMax = scale === 10;
  const sameScales = imgSize.width === imgSize.width * scale!;
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
      setImgSize({ width: 0, height: 0 });
    }
  }

  function handleImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImgSize({ width: naturalWidth, height: naturalHeight });
  }

  return (
    <div className="container">
      <div className="tooltip-bar">
        <p className="header-text">
          {filePath ? (
            <>
              <span>- Image path selected: {filePath} -</span>
            </>
          ) : (
            "- No Image Loaded -"
          )}
        </p>
      </div>
      <div className="editor">
        <div className="button-panel">
          <button onClick={handleOpen}>
            {!imgPath ? (
              <>
                <ImageUp color="white" size={"1rem"} /> <span>Open Image</span>
              </>
            ) : (
              <>
                <Images color="white" size={"1rem"} /> <span>Change Image</span>
              </>
            )}
          </button>

          <button onClick={handleClose}>
            <ImageOff color="white" size={"1rem"} /> <span>Remove Image</span>
          </button>

          {frames === 1 ? (
            <span className="span-style">
              Frame Count: {frames}{" "}
              <span className="tiptool-text">(Default)</span>
            </span>
          ) : (
            <span className="span-style">Frame Count: {frames}</span>
          )}

          <p className="tiptool-text">
            Frame(s) count cannot be less than one.
          </p>
          <input
            type="number"
            name="Frame Count"
            id="frame-count"
            value={frames}
            min={1}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setFrameCount(value);
            }}
          />

          {scale === 3 ? (
            <span>
              Sprite sheet Scale: {scale}{" "}
              <span className="tiptool-text">(Default)</span>
            </span>
          ) : (
            <span>
              Sprite-sheet Scale: {scale} <span className=""></span>
            </span>
          )}

          <p className="tiptool-text">
            Sprite-sheet scaling cannot be less than one.
          </p>
          <input
            type="number"
            name="Image Scale"
            id="sheet-scale"
            value={scale}
            min={1}
            max={10}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setScaleSize(value);
            }}
          />

          <span>
            Image Width: <b>{imgSize.width} px</b>
          </span>
          <span>
            Image Height: <b>{imgSize.height} px</b>
          </span>

          <div className="divider"></div>

          <span>
            Scaled Image Width: <b>{imgSize.width * scale!} px</b>
          </span>
          <span>
            Scaled Image Height: <b>{imgSize.height * scale!} px</b>
          </span>
        </div>

        {imgPath && (
          <div className="image-viewer">
            <img
              src={imgPath}
              className="checkerboard-conic-background"
              width={imgSize.width * scale!}
              height={imgSize.height * scale!}
              onLoad={handleImageLoad}
              alt="loaded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
