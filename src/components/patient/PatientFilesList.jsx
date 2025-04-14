import PropTypes from 'prop-types';

function PatientFilesList({ files = [] }) {
  if (!files.length) {
    return <div className="files_empty">Нет загруженных файлов</div>;
  }

  return (
    <div className="files">
      {files.map((file) => (
        <div key={file.id} className="files_item">
          <span className="files_item_icon"></span>
          <a
            className="files_item_title"
            href={file.path}
            target="_blank"
            rel="noreferrer"
          >
            {file.name}
          </a>
        </div>
      ))}
    </div>
  );
}

PatientFilesList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};

export default PatientFilesList;
