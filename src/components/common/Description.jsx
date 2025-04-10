import { useEffect, useState } from 'react';
import { useDescriptionStore } from '../../store';
import PropTypes from 'prop-types';

export default function Description({ tag, title = '' }) {

  const [description, setDescription] = useState(null);

  const descriptions = useDescriptionStore((state) => state.descriptions); // Получаем все описания

  useEffect(() => {
    // Ищем описание по тегу
    const foundDescription = descriptions.find((desc) => desc.tag === tag);
    setDescription(foundDescription); // Обновляем состояние компонента с найденным описанием
  }, [descriptions, tag]); // Зависимости: обновление происходит, если список описаний или тег меняются

  if (!description) return null; // Если описание не найдено, ничего не рендерим

  return (
    <span className="control_title control_title-notice">
      {title}
      <div className="control_notice">
        <span className="control_notice_icon"></span>
        <div className="control_notice_content">
          <p>{description.content}</p>
        </div>
      </div>
    </span>
  );
}


Description.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string,
};