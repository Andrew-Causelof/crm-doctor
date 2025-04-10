import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // вызывать onPageChange(page) при подключении к логике
    }
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        i === currentPage ? (
          <li key={i}>
            <span
              aria-current="page"
              className="pagination_nums pagination_nums-current"
            >
              {i}
            </span>
          </li>
        ) : (
          <li key={i}>
            <a
              className="pagination_nums"
              href="#"
              onClick={() => handleClick(i)}
            >
              {i}
            </a>
          </li>
        )
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <div className="loadmore">
        <button className="btn btn-main">Загрузить еще</button>
      </div>
      <ul className="pagination_items">
        <li>
          <a
            href="#"
            className="pagination_nums pagination_nav pagination_nav_prev"
            onClick={() => handleClick(currentPage - 1)}
          >
            Назад
          </a>
        </li>

        {renderPages()}

        <li>
          <a
            href="#"
            className="pagination_nums pagination_nav pagination_nav_next"
            onClick={() => handleClick(currentPage + 1)}
          >
            Вперед
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
