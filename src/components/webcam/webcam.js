import React, { useRef, useEffect, useCallback, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function WebCam({handleString}) {
  const [imgs, setImgs] = useState([]);
  //const [imageSrc, setImageSrc] = useState();

    const webcamRef = useRef(null);
    let imageSrc;
    const capture = useCallback(() => {
      imageSrc = webcamRef.current.getScreenshot();
      // console.log(image)
      // setImageSrc(image);
      // console.log(imageSrc)
    // console.log("captured", imageSrc);
    }, [webcamRef]);

    useEffect(() => {
      const interval = setInterval(() => {
          capture()
        // console.log("calling every 15 seconds");
        // console.log(imageSrc)
          handleString(imageSrc);

      }, 10000);

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
