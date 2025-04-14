import React from 'react';
import Dropdown from '../../common/Dropdown';
import classNames from 'classnames';
import Description from '../../common/Description';
import PatientField from '../../patient/PatientField';

function PatientInfo({ userData }) {
  function getInputClass(value) {
    return classNames('input', {
      ok: value,
      err: !value,
    });
  }

  return (
    <Dropdown title="Информация о пациенте">
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Основная информация</div>
        </div>
        <div className="article_body">
          <div className="form_controls">
            <div className="control">
              <span className="control_title">Ваш пол</span>
              <div className="checkbox">
                <label for="male" tabindex="0">
                  <input
                    id="male"
                    type="radio"
                    name="sex"
                    value="male"
                    checked={userData.gender === 'male'}
                    onChange={() => {}}
                  />
                  <div className="checkbox_cell"></div>
                  <span>Мужской</span>
                </label>

                <label for="fem" tabindex="0">
                  <input
                    id="fem"
                    type="radio"
                    name="sex"
                    value="fem"
                    checked={userData.gender === 'fem'}
                    onChange={() => {}}
                  />
                  <div className="checkbox_cell"></div>
                  <span>Женский</span>
                </label>
              </div>
            </div>
          </div>

          <div className="form_controls form_controls-grid">
            <PatientField
              id="lastname"
              name="lastname"
              label="Фамилия"
              placeholder="Ваша фамилия..."
              value={userData.lastName}
            />

            <PatientField
              id="firstname"
              name="firstname"
              label="Имя"
              placeholder="Имя"
              value={userData.firstname}
            />

            <PatientField
              id="thirdname"
              name="thirdname"
              label="Отчество"
              placeholder="Отчество"
              value={userData.thirdname}
            />

            <PatientField
              id="birthday"
              name="birthday"
              label="Дата рождения"
              placeholder="Дата рождения"
              value={userData.birthday}
            />

            <PatientField
              id="height"
              name="height"
              label="Рост"
              placeholder="Рост, см"
              value={userData.height}
            />

            <PatientField
              id="weight"
              name="weight"
              label="Вес"
              placeholder="Вес, кг"
              value={userData.height}
            />
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Контактная информация</div>
        </div>
        <div className="article_body">
          <div className="form_controls form_controls-grid">
            <PatientField
              id="phone"
              name="phone"
              label="Телефон"
              placeholder="+7 (___) ___ - __ - __"
              value={userData.phone}
            />

            <PatientField
              id="phone2"
              name="phone2"
              label="Дополнительный телефон (при наличии)"
              placeholder="+7 (___) ___ - __ - __"
              value={userData.phone2}
            />

            <PatientField
              id="email"
              name="email"
              label="Электронная почта"
              placeholder="e-mail"
              value={userData.email}
            />
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article_head">
          <div className="title title-article">Личные документы</div>
        </div>
        <div className="article_body">
          <div className="form_controls form_controls-grid">
            <PatientField
              id="polis"
              name="polis"
              label="Номер страхового полиса"
              placeholder="16 цифр полиса"
              value={userData.polis}
              descriptionTag="polisTag"
            />

            <PatientField
              id="polisRegion"
              name="polisRegion"
              label="Регион полиса"
              placeholder="Регион полиса"
              value={userData.polisRegion}
              descriptionTag="polisRegionTag"
            />

            <PatientField
              id="snils"
              name="snils"
              label="СНИЛС"
              placeholder="СНИЛС"
              value={userData.snils}
              descriptionTag="snilsTag"
            />

            <PatientField
              id="passport"
              name="passport"
              label="Серия и номер паспорта"
              placeholder="10 цифр паспорта"
              value={userData.passport}
              descriptionTag="passportTag"
            />
            <PatientField
              id="passportDate"
              name="passportDate"
              label=" Дата выдачи"
              placeholder=" Дата выдачи паспорта"
              value={userData.passportDate}
            />

            <PatientField
              id="passportFrom"
              name="passportFrom"
              label="Кем выдан"
              placeholder="Кем выдан"
              value={userData.passportFrom}
              descriptionTag="passportFromTag"
            />

            <PatientField
              id="city"
              name="city"
              label="Город регистрации"
              placeholder="Город регистрации"
              value={userData.city}
              descriptionTag="cityTag"
            />

            <div className="control control-x2">
              <label
                className="control_title control_title-notice"
                for="address"
              >
                Адрес регистрации
                <Description tag="addressTag" />
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Адрес..."
                value={userData.address}
                className={getInputClass(userData.address)}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </article>
    </Dropdown>
  );
}

export default PatientInfo;
