import React from 'react';
import { useAppStore } from '../../store/store';

function Breadcrumbs({ title = '', letter = '', onResetFilters }) {
  const { appData, setAppData } = useAppStore();

  const handlePatientsClick = () => {
    if (onResetFilters) {
      onResetFilters(); // Сбросить фильтры (буквы)
    }
  };

  return (
    <div className="content_head">
      <div className="breadcrumbs">
        <a
          onClick={() => setAppData('activeTab', 'patients')}
          className="breadcrumbs_link"
        >
          Личный кабинет
        </a>
        <span className="breadcrumbs_sep">/</span>

        {letter ? (
          <>
            <a onClick={handlePatientsClick} className="breadcrumbs_link">
              {title}
            </a>
            <span className="breadcrumbs_sep">/</span>
            <span className="breadcrumbs_text">{letter}</span>
          </>
        ) : (
          <span className="breadcrumbs_text">{title}</span>
        )}
      </div>

      <div className="title title-page">{title}</div>
    </div>
  );
}

export default Breadcrumbs;
