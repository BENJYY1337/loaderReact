import React from "react";
import LoaderGIF from "./pong.gif";

export default function Loader() {
  return (
    <>
      <div>
        <img src={LoaderGIF} alt="" />
      </div>
    </>
  );
}
