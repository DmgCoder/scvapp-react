import React from "react";
import { isIOS, isIPad13 } from "react-device-detect";

const MobileAppInstall = () => {
  React.useEffect(() => {
    window.location.href = "scvapp://app.scv.si/open_door/";
    setTimeout(() => {
      if (isIOS || isIPad13) {
        window.location.href =
          "https://apps.apple.com/md/app/scvapp/id1589939073";
      } else {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.scvapp.si";
      }
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Preusmeritev na mobilno aplikacijo...</h1>
    </div>
  );
};

export default MobileAppInstall;
