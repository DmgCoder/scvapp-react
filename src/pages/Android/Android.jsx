import React from "react";
import AppAPK from "../../assets/app.apk";
import "./Android.css";

const Android = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    try {
      ref.current.click();
    } catch (e) {}
  }, []);
  return (
    <a href={AppAPK} download="app.apk" ref={ref} className="download-btn">
      Prenesi zdaj!
      <span>
        <span></span>
      </span>
    </a>
  );
};

export default Android;
