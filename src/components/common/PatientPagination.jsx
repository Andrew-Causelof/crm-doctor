import React from 'react';
import { usePatientStore } from '../../store/patientStore'; // Импорт zustand стора

function PatientPagination() {
  const { pagination, changePage, fetchPatients, loading, selectedLetter } =
    usePatientStore();

  const { page: currentPage, pages: totalPages } = pagination;

  if (totalPages <= 1) return null; // Если всего 1 страница, не показываем вообще ничего

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      changePage(page); // Переключаем страницу через zustand
    }
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      fetchPatients(currentPage + 1, pagination.limit, selectedLetter, true); // Добавляем пациентов к текущему списку
    }
  };

  // Генерируем номера страниц
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage < totalPages ? (
        <div className="loadmore">
          <button
            className="btn btn-main"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'Загрузить еще'}
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <ul className="pagination_items">
        {currentPage > 1 && (
          <li>
            <button
              className="pagination_nums pagination_nav pagination_nav_prev"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={loading}
            >
              Назад
            </button>
          </li>
        )}

        {pageNumbers.map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span className="pagination_nums pagination_nums-current">
                {page}
              </span>
            ) : (
              <button
                className="pagination_nums"
                onClick={() => handlePageClick(page)}
                disabled={loading}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              className="pagination_nums pagination_nav pagination_nav_next"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={loading}
            >
              Вперед
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PatientPagination;
