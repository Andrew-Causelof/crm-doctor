import React, { useEffect, useState } from 'react';
import Dropdown from '../../common/Dropdown';
import { useNotification } from '../../../context/NotificationContext';
import operationsData from '../../../data/dummyOperations.json';
import { usePatientStore } from '../../../store/patientStore';
import { useAppStore } from '../../../store/store';
import Selector from '../../common/Selector';

function PatientOperations({ userData }) {
  const { operations, setOperations, savePatientOperations } =
    usePatientStore();
  const notyf = useNotification();

  const [dropdownState, setDropdownState] = useState({
    planned: false,
    past: false,
  });

  const { selectedPatientId } = useAppStore();

  const toggleDropdown = (key) => {
    setDropdownState((prev) => ({
      ...prev,
      [key]: !prev[key], // Инвертируем конкретный селектор
    }));
  };

  const handleSelect = async (type, id) => {
    const selected = operations[type] || [];
    let updatedSelected;

    if (selected.includes(id)) {
      updatedSelected = selected.filter((item) => item !== id);
    } else {
      updatedSelected = [...selected, id];
    }

    setOperations(type, updatedSelected);
    notyf.success('Изменения сохранены!');

    await savePatientOperations(selectedPatientId);
  };

  const renderOperationList = (title, type) => (
    <article className="article">
      <div className="article_head">
        <div className="title title-article">{title}</div>
      </div>
      <div className="article_body">
        <div className="form_controls">
          <div className="control">
            <span className="control_title">Выбрать вид операции</span>

            <Selector
              options={operationsData.map((operation) => operation.name)}
              type="multiple"
              placeholder="Выберите одну или несколько операций"
              onChange={(selectedOptions) =>
                handleSelect(type, selectedOptions)
              }
            />
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <Dropdown title="Данные об операциях">
      {renderOperationList('Планируемая операция', 'planned')}
      {renderOperationList('Прошлая операция', 'past')}
    </Dropdown>
  );
}

export default PatientOperations;
