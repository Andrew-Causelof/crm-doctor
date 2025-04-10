import React from 'react';
import { useAppStore } from '../../store';

function Breadcrumbs({ title = '' }) {
  const { appData, setAppData } = useAppStore();
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
        <span className="breadcrumbs_text">{title}</span>
      </div>
      <div className="title title-page">{title}</div>
    </div>
  );
}

export default Breadcrumbs;
