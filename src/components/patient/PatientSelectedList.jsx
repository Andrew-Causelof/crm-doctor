import PropTypes from 'prop-types';

export default function PatientSelectedList({ items, title = '' }) {
  if (!items || items.length === 0) return null; // Если нет данных — ничего не рендерим

  return (
    <div className="selected">
      {title && <h3 className="selected_title">{title}</h3>}

      {items.map((item) => (
        <div key={item.id} className="selected_item">
          <div className="selected_item_head">
            <span className="selected_item_title">{item.name}</span>
          </div>
          <div className="selected_item_body">
            {item.comment ? (
              <div className="selected_item_comment">{item.comment}</div>
            ) : (
              <div className="selected_item_no_comment">
                Комментарий не указан
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

PatientSelectedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      comment: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};
