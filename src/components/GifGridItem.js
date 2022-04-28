import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="container-card__img" src={url} alt={title} />
      <p className="container-card__text">{title}</p>
      <CopyToClipboard text={url}>
        <button className="copy-btn">COPY</button>
      </CopyToClipboard>
    </div>
  );
};
