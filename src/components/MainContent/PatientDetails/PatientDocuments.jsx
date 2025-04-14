import React from 'react';
import Dropdown from '../../common/Dropdown';
import Description from '../../common/Description';
import PatientFilesList from '../../patient/PatientFilesList';

function PatientDocuments({ userData }) {
  const files = userData?.files || {};
  return (
    <Dropdown title="Документы и анализы пациента">
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Основные документы</div>
        </div>
        <div className="article_body">
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description tag="passport_files" title="Копия паспорта" />
              </span>

              <PatientFilesList files={files.passport || []} />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description tag="polis_files" title="Страховой полис" />
              </span>
              <PatientFilesList files={files.polis_files || []} />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description tag="snils_files" title="СНИЛС" />
              </span>
              <PatientFilesList files={files.snils_files || []} />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Лабораторные анализы</div>
        </div>
        <div className="article_body">
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="general_files"
                  title=" Общий анализ крови с лейкоцитарной формулой и тромбоцитами + СОЭ"
                />
              </span>

              <PatientFilesList files={files.general_files || []} />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description tag="coagulogram_files" title="Коагулограмма" />
                <div className="control_title_actions">
                  <span className="print_btn"></span>
                  <span className="pdf_btn"></span>
                </div>
              </span>
              <ul className="control_list">
                <li>МНО (международное нормализованное отношение)</li>
                <li>АЧТВ (активированное частичное тромбопластиновое время)</li>
                <li>Фибриноген</li>
                <li>Протромбиновое время</li>
                <li>Тромбиновое время</li>
                <li>Д-димер</li>
              </ul>

              <PatientFilesList files={files.coagulogram_files || []} />
            </div>
          </div>

          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="blood-biochemical_files"
                  title="Биохимический анализ крови"
                />
                <div className="control_title_actions">
                  <span className="print_btn"></span>
                  <span className="pdf_btn"></span>
                </div>
              </span>
              <ul className="control_list">
                <li>Глюкоза</li>
                <li>Общий белок</li>
                <li>Билирубин (общий, прямой, непрямой)</li>
                <li>АЛТ (аланинаминотрансфераза)</li>
                <li>АСТ (аспартатаминотрансфераза)</li>
                <li>Креатинин</li>
                <li>Мочевина</li>
                <li>Калий, натрий, хлор</li>
                <li>Альбумин</li>
              </ul>

              <PatientFilesList files={files.coagulogram_files || []} />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="blood-infectious_files"
                  title="Инфекционно-иммунологический анализ крови (pdf / jpg / png)"
                />
                <div className="control_title_actions">
                  <span className="print_btn"></span>
                  <span className="pdf_btn"></span>
                </div>
              </span>
              <ul className="control_list">
                <li>RW (сифилис) (3 месяца)</li>
                <li>Hbs-антиген (гепатит В) (3 месяца)</li>
                <li>Анти-HCV (гепатит С) (3 месяца)</li>
                <li>ВИЧ (3 месяца)</li>
              </ul>

              <PatientFilesList
                files={files['blood-phenotyping_files'] || []}
              />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="blood-group_files"
                  title="Определение группы крови и резус-фактора (бессрочно)"
                />
              </span>

              <PatientFilesList files={files['blood-group_files'] || []} />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="blood-phenotyping_files"
                  title="Фенотипирование эритроцитов (бессрочно) (pdf / jpg / png)"
                />
              </span>
              <PatientFilesList
                files={files['blood-phenotyping_files'] || []}
              />
            </div>
          </div>
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="urine-general_files"
                  title="Общий анализ мочи"
                />
              </span>

              <PatientFilesList files={files['urine-general_files'] || []} />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">
            Специальные лабораторные исследования:
          </div>
        </div>
        <div className="article_body">
          <div className="form_controls form_controls-files">
            <div className="control control-files">
              <span className="control_title control_title-notice">
                <Description
                  tag="covid_files"
                  title="ПЦР на COVID-19 из носоглотки и ротоглотки (не ранее чем за 1-2 дня до госпитализации, результат действителен 48 часов)"
                />
              </span>

              <PatientFilesList files={files['covid_files'] || []} />
            </div>
          </div>
        </div>
      </article>
    </Dropdown>
  );
}

export default PatientDocuments;
