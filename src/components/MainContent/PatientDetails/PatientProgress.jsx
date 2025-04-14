import React from 'react';

function PatientProgress({ progress }) {
  if (!progress) return null; // Если прогресс не передан, ничего не рендерим

  return (
    <aside className="aside aside-right">
      <div className="widget">
        <div className="widget_title widget_title-sm">
          Информация о пациенте
        </div>
        <div className="progress progress-dark" data-progress="about">
          <div className="progress_bar">
            <span
              className="progress_line"
              style={{ width: `${progress.general || 0}%` }}
            ></span>
          </div>
          <p className="progress_text">
            Заполнено{' '}
            <span className="progress_value">{progress.general || 0}%</span>
          </p>
        </div>

        <div className="widget_title widget_title-sm">
          Медицинская информация
        </div>
        <div className="progress progress-dark" data-progress="medical">
          <div className="progress_bar">
            <span
              className="progress_line"
              style={{ width: `${progress.medical || 0}%` }}
            ></span>
          </div>
          <p className="progress_text">
            Заполнено{' '}
            <span className="progress_value">{progress.medical || 0}%</span>
          </p>
        </div>

        <div className="widget_title widget_title-sm">
          Документы и анализы пациента
        </div>
        <div className="progress progress-dark" data-progress="documents">
          <div className="progress_bar">
            <span
              className="progress_line"
              style={{ width: `${progress.documents || 0}%` }}
            ></span>
          </div>
          <p className="progress_text">
            Заполнено{' '}
            <span className="progress_value">{progress.documents || 0}%</span>
          </p>
        </div>

        <div className="widget_actions widget_actions-col">
          <button className="btn btn-main btn-fw widget_print">
            Распечатать <span className="widget_print"></span>
          </button>
          <a download href="info.html" className="btn btn-main btn-fw">
            Скачать в формате PDF
          </a>
        </div>
      </div>
    </aside>
  );
}

export default PatientProgress;
