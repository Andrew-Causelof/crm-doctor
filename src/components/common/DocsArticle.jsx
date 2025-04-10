import PropTypes from 'prop-types';

export default function DocsArticle({ article, children }) {
  return (

    <article className="article">
      <div className="article_head">
        <div className="title title-article">{article}</div>
      </div>
      <div className="article_body">
        {children}
      </div>
    </article>
  );
}

DocsArticle.propTypes = {
  article: PropTypes.string.isRequired, // Заголовок статьи
  className: PropTypes.string,
  children: PropTypes.node.isRequired, // Контент, который нужно рендерить внутри статьи
};
