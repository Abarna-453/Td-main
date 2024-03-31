const React = require('react');

const ArticleCard = () => {
  return (
    React.createElement('div', { className: "card", style: { width: '15rem', margin: '10px' } },
      React.createElement('img', {
        src: "images/bh.jpeg",
        className: "card-img-top",
        alt: "...",
        style: { width: '100%', height: '200px', objectFit: 'fill' }
      }),
      React.createElement('div', { className: "card-body" },
        React.createElement('h5', { className: "card-title" }, "Article title"),
        React.createElement('p', { className: "card-text" }, "Some quick text to on the article title and make up the bulk of the articles's content."),
        React.createElement('a', { href: "#", className: "btn btn-primary" }, "Read More")
      )
    )
  );
};

module.exports = ArticleCard;
