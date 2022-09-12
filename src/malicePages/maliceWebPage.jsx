import React from "react";

export default function MaliceWebPage({ url }) {
  return (
    <iframe
      src={url}
      style={{ width: "100%", height: "100%", border: "none" }}
      title="Malice"
    ></iframe>
  );
}
