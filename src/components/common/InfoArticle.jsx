import PropTypes from 'prop-types';

export default function InfoArticle({ article, className = '', children }) {
  return (

    <article className="article">
      <div className="article_head">
        <div className="title title-article">{article}</div>
      </div>
      <div className="article_body">
        <div className="form_controls">
          <div className={`control ${className}`}>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

InfoArticle.propTypes = {
  article: PropTypes.string.isRequired, // Заголовок статьи
  className: PropTypes.string,
  children: PropTypes.node.isRequired, // Контент, который нужно рендерить внутри статьи
};
