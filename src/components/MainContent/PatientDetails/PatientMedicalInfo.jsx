import React from 'react';
import Dropdown from '../../common/Dropdown';
import Description from '../../common/Description';
import PatientSelectedList from '../../patient/PatientSelectedList';
import PatientYesNoRadioGroup from '../../patient/PatientYesNoRadioGroup';

function PatientMedicalInfo({ userData }) {
  return (
    <Dropdown title="Медицинская информация">
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Жалобы</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control">
              <label
                className="control_title control_title-notice"
                for="comment"
              >
                <Description tag="commentTag" title="Жалобы на здоровье" />
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Опишите, пожалуйста, основное, что вас беспокоит"
                value={userData.comment || ''}
                onChange={() => {}}
              ></textarea>
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Хронические заболевания</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="chronicDiseasesTag"
                  title="Есть ли у вас хронические заболевания?"
                />
              </span>
              <PatientYesNoRadioGroup
                id="chronicDiseases"
                name="chronicDiseases"
                value={userData.chronicDiseases}
              />

              <PatientSelectedList
                items={userData.diseaseList}
                title="Хронические заболевания"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Приём медикаментов</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="medicationsTag"
                  title="Принимали ли ранее медикаменты"
                />
              </span>

              <PatientYesNoRadioGroup
                id="medications"
                name="medications"
                value={userData.medications}
              />

              <PatientSelectedList
                items={userData.medicationList}
                title="Принимаемые препараты"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Предыдущие операции</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="surgeriesTag"
                  title="Были у вас ранее операции?"
                />
              </span>

              <PatientYesNoRadioGroup
                id="surgeries"
                name="surgeries"
                value={userData.surgeries}
              />

              <textarea
                className="textarea textarea-sm"
                name="comment2"
                placeholder="Напишите пожалуйста какие операции у вас были..."
                value={userData.surgeriesComment || ''}
              ></textarea>
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">
            Аллергии и лекарственная непереносимость
          </div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="alergyTag"
                  title="У вас есть аллергия или лекарственная неперносимость?"
                />
              </span>

              <PatientYesNoRadioGroup
                id="alergy"
                name="alergy"
                value={userData.alergy}
              />

              <PatientSelectedList
                items={userData.alergyList}
                title="Аллергии"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Инфекционные заболевания</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="infectionTag"
                  title="Были ли или есть у вас инфекционные заболевания?"
                />
              </span>

              <PatientYesNoRadioGroup
                id="infection"
                name="infection"
                value={userData.infection}
              />

              <PatientSelectedList
                items={userData.infectionList}
                title="Перенесенные инфекции"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Наследственные заболевания</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control">
              <label
                className="control_title control_title-notice"
                for="comment"
              >
                <Description
                  tag="inheritanceDiseases"
                  title="Есть ли у вас наследственные заболевания?"
                />
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Напишите пожалуйста есть ли у вас наследственные заболевания..."
                onChange={() => {}}
                value={userData.inheritanceDiseasesComment || ''}
              ></textarea>
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Вредные привычки</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="badHabbitsTag"
                  title="Есть ли у вас вредные привычки?"
                />
              </span>

              <PatientYesNoRadioGroup
                id="badHabbits"
                name="badHabbits"
                value={userData.badHabbits}
              />

              <PatientSelectedList
                items={userData.badHabbitsList}
                title="Вредные привычки"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Беременность</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="pregnantTag"
                  title=" Беременны в настоящий момент?"
                />
              </span>
              <PatientYesNoRadioGroup
                id="pregnant"
                name="pregnant"
                value={userData.pregnant}
              />
            </div>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Больничный лист</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control control-g24">
              <span className="control_title control_title-notice">
                <Description
                  tag="sickLeaveTag"
                  title="Нужен ли больничный лист?"
                />
              </span>
              <PatientYesNoRadioGroup
                id="sickLeave"
                name="sickLeave"
                value={userData.sickLeave}
              />
            </div>
          </div>
        </div>
      </article>
    </Dropdown>
  );
}

export default PatientMedicalInfo;
