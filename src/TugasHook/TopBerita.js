import React from "react";

const TopBerita = ({ title, urlToImage, author, publishedAt, description, url }) => {
  return (
    <div className="berita">
      <img src={urlToImage} alt={title} />
      <div className="berita-info">
        <h5>
          <strong>{title}</strong>
        </h5>
        <h6>
          {author} - {publishedAt}
        </h6>
        <p>{description}</p>
        <button className="button">Read More...</button>
      </div>
    </div>
  );
};

export default TopBerita;
