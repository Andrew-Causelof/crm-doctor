import React from 'react';

function Patient() {
  return (
    <form className="main">
      <div className="content">
        <div className="content_head">
          <div className="breadcrumbs">
            <a href="events.html" className="breadcrumbs_link">
              Личный кабинет
            </a>
            <span className="breadcrumbs_sep">/</span>
            <a href="clients.html" className="breadcrumbs_link">
              Все пациенты
            </a>
            <span className="breadcrumbs_sep">/</span>
            <span className="breadcrumbs_text">
              Добронравов Олег Робертович
            </span>
          </div>
          <div className="title title-page">Добронравов Олег Робертович</div>
        </div>
        <div className="content_body">
          <div className="dropdown">
            <div className="dropdown_head">
              <div className="dropdown_name">Данные об операциях</div>
              <div className="dropdown_icon"></div>
            </div>
            <div className="dropdown_body">
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Планируемая операция
                  </div>
                </div>
                <div className="article_body">
                  <div className="form_controls">
                    <div className="control">
                      <span className="control_title">
                        Выбрать вид операции
                      </span>
                      <div className="select">
                        <button
                          type="button"
                          name="chronical-items"
                          data-select="toggle"
                          value="one two"
                          data-index="1"
                          data-type="multiple"
                          className="select_toggle"
                        >
                          Выбрать один или несколько
                        </button>
                        <div className="select_dropdown">
                          <ul className="select_options">
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="one"
                              data-index="0"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox1" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 1
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="two"
                              data-index="1"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox2" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 2
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="three"
                              data-index="2"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox3" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 3
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="4"
                              data-index="4"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox4" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 4
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="5"
                              data-index="5"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox5" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 5
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="6"
                              data-index="6"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox6" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 6
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="7"
                              data-index="7"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox7" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 7
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">Прошлая операция</div>
                </div>
                <div className="article_body">
                  <div className="form_controls">
                    <div className="control">
                      <span className="control_title">
                        Выбрать вид операции
                      </span>
                      <div className="select select-success">
                        <button
                          type="button"
                          name="chronical-items"
                          data-select="toggle"
                          value="one two"
                          data-index="1"
                          data-type="multiple"
                          className="select_toggle"
                        >
                          Выбрать один или несколько
                        </button>
                        <div className="select_dropdown">
                          <ul className="select_options">
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="one"
                              data-index="0"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox1" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 1
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="two"
                              data-index="1"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox2" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 2
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="three"
                              data-index="2"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox3" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 3
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="4"
                              data-index="4"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox4" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 4
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="5"
                              data-index="5"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox5" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 5
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="6"
                              data-index="6"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox6" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 6
                              </span>
                            </li>
                            <li
                              className="select_option"
                              data-select="option"
                              data-value="7"
                              data-index="7"
                            >
                              <div className="checkbox_item">
                                <input type="checkbox" id="checkbox7" />
                                <span className="checkbox_item_visible"></span>
                              </div>
                              <span className="select_option_text">
                                Пункт 7
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown_head">
              <div className="dropdown_name">Информация о пациенте</div>
              <div className="dropdown_icon"></div>
            </div>
            <div className="dropdown_body">
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
                          />
                          <div className="checkbox_cell"></div>
                          <span>Мужской</span>
                        </label>
                        <label for="fem" tabindex="0">
                          <input id="fem" type="radio" name="sex" value="fem" />
                          <div className="checkbox_cell"></div>
                          <span>Женский</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-grid">
                    <div className="control">
                      <label className="control_title" for="lastname">
                        Фамилия
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Ваша фамилия..."
                      />
                    </div>
                    <div className="control">
                      <label className="control_title" for="firstname">
                        Имя
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="Ваше имя..."
                      />
                    </div>
                    <div className="control">
                      <label className="control_title" for="thirdname">
                        Отчество
                      </label>
                      <input
                        id="thirdname"
                        type="text"
                        name="thirdname"
                        placeholder="Ваше отчество..."
                      />
                    </div>
                    <label
                      className="control_title control control-date"
                      for="birthday"
                    >
                      Дата рождения
                      <input
                        id="birthday"
                        type="text"
                        name="birthday"
                        placeholder="Выбрать дату"
                      />
                    </label>
                    <div className="control">
                      <label className="control_title" for="length">
                        Рост, см
                      </label>
                      <input
                        id="length"
                        type="text"
                        name="length"
                        placeholder="Укажите ваш рост"
                      />
                    </div>
                    <div className="control">
                      <label className="control_title" for="weight">
                        Вес, кг
                      </label>
                      <input
                        id="weight"
                        type="text"
                        name="weight"
                        placeholder="Укажите ваш вес"
                      />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Контактная информация
                  </div>
                </div>
                <div className="article_body">
                  <div className="form_controls form_controls-grid">
                    <div className="control">
                      <label className="control_title" for="phone">
                        Телефон
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="+7 (___) ___ - __ - __"
                      />
                    </div>
                    <div className="control">
                      <label className="control_title" for="phone2">
                        Доп. телефон (при наличии)
                      </label>
                      <input
                        id="phone2"
                        type="text"
                        name="phone2"
                        placeholder="+7 (___) ___ - __ - __"
                      />
                    </div>
                    <div className="control">
                      <label className="control_title" for="email">
                        Электронная почта
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Укажите ваш e-mail"
                      />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">Личные документы</div>
                </div>
                <div className="article_body">
                  <div className="form_controls form_controls-grid">
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="polis"
                      >
                        Номер страхового полиса
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="polis"
                        type="text"
                        name="polis"
                        placeholder="Введите 16 цифр полиса..."
                      />
                    </div>
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="polis-reg"
                      >
                        Регион полиса
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="polis-reg"
                        type="text"
                        name="polis-reg"
                        placeholder="Выберите регион полиса..."
                      />
                    </div>
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="snils"
                      >
                        СНИЛС
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="snils"
                        type="text"
                        name="snils"
                        placeholder="Введите номер СНИЛС..."
                      />
                    </div>
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="passport"
                      >
                        Серия и номер паспорта
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="passport"
                        type="text"
                        name="passport"
                        placeholder="Введите 10 цифр паспорта..."
                      />
                    </div>
                    <label
                      className="control_title control control-date"
                      for="passport-date"
                    >
                      Дата выдачи
                      <input
                        id="passport-date"
                        type="text"
                        name="passport-date"
                        placeholder="Выбрать дату"
                      />
                    </label>
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="passport-from"
                      >
                        Кем выдан
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="passport-from"
                        type="text"
                        name="passport-from"
                        placeholder="Введите кем выдано..."
                      />
                    </div>
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="city"
                      >
                        Город регистрации
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Город..."
                      />
                    </div>
                    <div className="control control-x2">
                      <label
                        className="control_title control_title-notice"
                        for="address"
                      >
                        Адрес регистрации
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Адрес..."
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="dropdown active">
            <div className="dropdown_head">
              <div className="dropdown_name">Медицинская информация</div>
              <div className="dropdown_icon"></div>
            </div>
            <div className="dropdown_body">
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
                        Жалобы на здоровье
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Опишите, пожалуйста, основное, что вас беспокоит"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Хронические заболевания
                  </div>
                </div>
                <div className="article_body">
                  <div className="form_controls">
                    <div className="control control-g24">
                      <span className="control_title control_title-notice">
                        Есть ли у вас хронические заболевания?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="chronical-yeah" tabindex="0">
                          <input
                            id="chronical-yeah"
                            type="radio"
                            name="chronical"
                            value="chronical-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Есть</span>
                        </label>
                        <label for="chronical-no" tabindex="0">
                          <input
                            id="chronical-no"
                            type="radio"
                            name="chronical"
                            value="chronical-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <div className="select">
                        <div className="select_input">
                          <button type="button">
                            Выбрать один или несколько{' '}
                            <span className="select_arrow"></span>
                          </button>
                        </div>
                      </div>
                      <div className="selected">
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Сахарный диабет
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Сахарный диабет
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                      </div>
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
                        Принимали ли ранее медикаменты
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="chronical-yeah" tabindex="0">
                          <input
                            id="chronical-yeah"
                            type="radio"
                            name="chronical"
                            value="chronical-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Есть</span>
                        </label>
                        <label for="chronical-no" tabindex="0">
                          <input
                            id="chronical-no"
                            type="radio"
                            name="chronical"
                            value="chronical-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <div className="select">
                        <div className="select_input">
                          <button type="button">
                            Выбрать один или несколько{' '}
                            <span className="select_arrow"></span>
                          </button>
                        </div>
                      </div>
                      <div className="selected">
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">Аспирин</span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий
                            </button>
                          </div>
                        </div>
                      </div>
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
                        Были у вас ранее операции?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="chronical-yeah" tabindex="0">
                          <input
                            id="chronical-yeah"
                            type="radio"
                            name="chronical"
                            value="chronical-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Есть</span>
                        </label>
                        <label for="chronical-no" tabindex="0">
                          <input
                            id="chronical-no"
                            type="radio"
                            name="chronical"
                            value="chronical-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <textarea
                        className="textarea textarea-sm"
                        name="comment2"
                        placeholder="Напишите пожалуйста какие операции у вас были..."
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
                        У вас есть аллергия или лекарственная неперносимость?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="alergy-yeah" tabindex="0">
                          <input
                            id="alergy-yeah"
                            type="radio"
                            name="alergy"
                            value="alergy-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Да</span>
                        </label>
                        <label for="alergy-no" tabindex="0">
                          <input
                            id="alergy-no"
                            type="radio"
                            name="alergy"
                            value="alergy-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <div className="select">
                        <div className="select_input">
                          <button type="button">
                            Выбрать один или несколько{' '}
                            <span className="select_arrow"></span>
                          </button>
                        </div>
                      </div>
                      <div className="selected">
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Антибиотики
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Удалить комментарий
                            </button>
                            <textarea
                              className="textarea textarea-sm"
                              placeholder="Прием препаратов должен осуществляться строго в соответствии с рекомендациями врача. Важно соблюдать дозировку, время приема и длительность курса"
                            ></textarea>
                          </div>
                        </div>
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Анестетики
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Инфекционные заболевания
                  </div>
                </div>
                <div className="article_body">
                  <div className="form_controls">
                    <div className="control control-g24">
                      <span className="control_title control_title-notice">
                        Были ли или есть у вас инфекционные заболевания?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="infection-yeah" tabindex="0">
                          <input
                            id="infection-yeah"
                            type="radio"
                            name="infection"
                            value="infection-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Да</span>
                        </label>
                        <label for="infection-no" tabindex="0">
                          <input
                            id="infection-no"
                            type="radio"
                            name="infection"
                            value="infection-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <div className="select">
                        <div className="select_input">
                          <button type="button">
                            Выбрать один или несколько{' '}
                            <span className="select_arrow"></span>
                          </button>
                        </div>
                      </div>
                      <div className="selected">
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Туберкулёз
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">Гепатит</span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Наследственные заболевания
                  </div>
                </div>
                <div className="article_body">
                  <div className="form_controls">
                    <div className="control">
                      <label
                        className="control_title control_title-notice"
                        for="comment"
                      >
                        Есть ли у вас наследственные заболевания?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Напишите пожалуйста есть ли у вас наследственные заболевания..."
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
                        Есть ли у вас вредные привычки?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="habbits-yeah" tabindex="0">
                          <input
                            id="habbits-yeah"
                            type="radio"
                            name="habbits"
                            value="habbits-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Да</span>
                        </label>
                        <label for="habbits-no" tabindex="0">
                          <input
                            id="habbits-no"
                            type="radio"
                            name="habbits"
                            value="habbits-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                      <div className="select">
                        <div className="select_input">
                          <button type="button">
                            Выбрать один или несколько{' '}
                            <span className="select_arrow"></span>
                          </button>
                        </div>
                      </div>
                      <div className="selected">
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">Курение</span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                        <div className="selected_item">
                          <div className="selected_item_head">
                            <span className="selected_item_title">
                              Алкоголь
                            </span>
                            <button type="button" className="selected_item_del">
                              Удалить
                            </button>
                          </div>
                          <div className="selected_item_body">
                            <button type="button" className="selected_item_add">
                              Добавить комментарий к заболеванию
                            </button>
                          </div>
                        </div>
                      </div>
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
                        Беременны в настоящий момент?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="pregnant-yeah" tabindex="0">
                          <input
                            id="pregnant-yeah"
                            type="radio"
                            name="pregnant"
                            value="pregnant-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Да</span>
                        </label>
                        <label for="pregnant-no" tabindex="0">
                          <input
                            id="pregnant-no"
                            type="radio"
                            name="pregnant"
                            value="pregnant-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
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
                        Нужен ли больничный лист?
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="checkbox">
                        <label for="list-yeah" tabindex="0">
                          <input
                            id="list-yeah"
                            type="radio"
                            name="list"
                            value="list-yeah"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Да</span>
                        </label>
                        <label for="list-no" tabindex="0">
                          <input
                            id="list-no"
                            type="radio"
                            name="list"
                            value="list-no"
                          />
                          <div className="checkbox_cell"></div>
                          <span>Нет</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="dropdown active">
            <div className="dropdown_head">
              <div className="dropdown_name">Документы и анализы пациента</div>
              <div className="dropdown_icon"></div>
            </div>
            <div className="dropdown_body">
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">Основные документы</div>
                </div>
                <div className="article_body">
                  <div className="form_controls form_controls-files">
                    <div className="control control-files control-files-err">
                      <span className="control_title control_title-notice">
                        Копия паспорта
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                          multiple
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                      <div className="alert">
                        <span className="alert_icon"></span>
                        <p className="alert_text">
                          Загруженные документы не соответствует введенным
                          данным
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Страховой полис
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="polis-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="polis-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        СНИЛС
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="snils-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="snils-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article_head">
                  <div className="title title-article">
                    Лабораторные анализы
                  </div>
                </div>
                <div className="article_body">
                  <div className="alert alert-v2">
                    <p className="alert_text">
                      Основные лабораторные исследования (срок действия – 14
                      дней, если не указано иное)
                    </p>
                    <span className="alert_icon"></span>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Общий анализ крови с лейкоцитарной формулой и
                        тромбоцитами + СОЭ
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Коагулограмма
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                        <div className="control_title_actions">
                          <span className="print_btn"></span>
                          <span className="pdf_btn"></span>
                        </div>
                      </span>
                      <ul className="control_list">
                        <li>МНО (международное нормализованное отношение)</li>
                        <li>
                          АЧТВ (активированное частичное тромбопластиновое
                          время)
                        </li>
                        <li>Фибриноген</li>
                        <li>Протромбиновое время</li>
                        <li>Тромбиновое время</li>
                        <li>Д-димер</li>
                      </ul>
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Биохимический анализ крови
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
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
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Инфекционно-иммунологический анализ крови (pdf / jpg /
                        png)
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
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
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Определение группы крови и резус-фактора (бессрочно)
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="polis-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="polis-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Фенотипирование эритроцитов (бессрочно) (pdf / jpg /
                        png)
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="snils-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="snils-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_controls form_controls-files">
                    <div className="control control-files">
                      <span className="control_title control_title-notice">
                        Общий анализ мочи
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="snils-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="snils-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
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
                        ПЦР на COVID-19 из носоглотки и ротоглотки (не ранее чем
                        за 1-2 дня до госпитализации, результат действителен 48
                        часов)
                        <div className="control_notice">
                          <span className="control_notice_icon"></span>
                          <div className="control_notice_content">
                            <p>
                              Далеко-далеко за словесными горами в стране
                              гласных, и согласных живут рыбные тексты.
                            </p>
                          </div>
                        </div>
                      </span>
                      <div className="upload">
                        <input
                          id="passport-files"
                          type="file"
                          className="upload_input"
                        />
                        <label
                          for="passport-files"
                          tabindex="0"
                          className="upload_btn btn btn-main"
                        >
                          <span></span> Загрузить
                        </label>
                        <div className="upload_info">
                          <p>Максимальный размер файла: 10 МБ.</p>
                          <p>
                            Допустимые форматы: .jpeg, .png, .pdf, .doc, .docx
                          </p>
                        </div>
                      </div>
                      <div className="files">
                        <div className="files_item">
                          <span className="files_item_icon"></span>
                          <span className="files_item_title">
                            Наименование документа.pdf
                          </span>
                          <div className="files_item_actions">
                            <span className="files_item_del">Удалить</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <aside className="aside aside-right">
        <div className="widget">
          <div className="widget_title widget_title-sm">
            Информация о пациенте
          </div>
          <div className="progress progress-dark" data-progress="about">
            <div className="progress_bar">
              <span className="progress_line" style="width: 50%"></span>
            </div>
            <p className="progress_text">
              Заполнено <span className="progress_value">50%</span>
            </p>
          </div>
          <div className="widget_title widget_title-sm">
            Медицинская информация
          </div>
          <div className="progress progress-dark" data-progress="about">
            <div className="progress_bar">
              <span className="progress_line" style="width: 74%"></span>
            </div>
            <p className="progress_text">
              Заполнено <span className="progress_value">74%</span>
            </p>
          </div>
          <div className="widget_title widget_title-sm">
            Документы и анализы пациента
          </div>
          <div className="progress progress-dark" data-progress="about">
            <div className="progress_bar">
              <span className="progress_line" style="width: 20%"></span>
            </div>
            <p className="progress_text">
              Заполнено <span className="progress_value">20%</span>
            </p>
          </div>
          <div className="widget_actions widget_actions-col">
            <button className="btn btn-main btn-fw widget_print">
              Распечатать <span className="widget_print"></span>
            </button>
            <a download="" href="info.html" className="btn btn-main btn-fw">
              Скачать в формате PDF
            </a>
          </div>
        </div>
      </aside>
    </form>
  );
}

export default Patient;
