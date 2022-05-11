import React, { useRef, useEffect, useCallback, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function WebCam() {
  const [imgs, setImgs] = useState([]);

    const webcamRef = useRef(null);
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
    console.log("captured", imageSrc);

    }, [webcamRef]);

    useEffect(() => {
      const interval = setInterval(() => {
          capture()
        console.log("calling every 15 seconds");
      }, 15000);

      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <Webcam
        audio={false}
        height={100}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={120}
        mirrored={true}
        videoConstraints={videoConstraints}
      />
      {/* <button onClick={capture}>Capture photo</button> */}
    </>
  );
}

export default WebCam;
