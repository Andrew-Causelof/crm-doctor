import { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../../store';
import { useNotification } from '../../context/NotificationContext';

const MAX_FILE_SIZE_MB = 10; // Максимальный размер файла в МБ
const ALLOWED_FORMATS = ['jpeg', 'jpg', 'png', 'pdf', 'doc', 'docx']; // Допустимые форматы

export default function DocumentUploader({
  userId = 3,
  fieldName,
  title,
  notice = "",
}) {

  const { userData, uploadFile, deleteFile, saveUserData } = useUserStore();
  const [error, setError] = useState("");

  const notyf = useNotification();

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);

    const validatedFiles = files.filter((file) => {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const fileSizeMB = file.size / (1024 * 1024);

      if (!ALLOWED_FORMATS.includes(fileExtension)) {
        const formatMsg = `Недопустимый формат файла: ${file.name}`;
        setError(formatMsg);
        notyf.error(formatMsg);

        return false;
      }

      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        const sizeMsg = `Файл слишком большой: ${file.name} (${fileSizeMB.toFixed(2)} МБ)`;
        setError(sizeMsg);
        notyf.error(sizeMsg);
        return false;
      }
      setError("");
      return true;
    });

    try {
      // Ждем загрузки всех файлов перед сохранением
      await Promise.all(validatedFiles.map((file) => uploadFile(userId, fieldName, file)));
      // После загрузки всех файлов сохраняем данные пользователя
      await saveUserData(userId);
      notyf.success("Файлы успешно загружены и данные сохранены!");
    } catch (error) {
      notyf.error("Ошибка при загрузке файлов или сохранении данных!");
      console.error("Ошибка загрузки файлов:", error);
    }

  };

  const handleFileDelete = async (fileId) => {
    try {
      await deleteFile(userId, fieldName, fileId); // Удаляем файл из API и состояния

      await saveUserData(userId); // Сохраняем обновленные данные после удаления файла

      notyf.success("Файл успешно удален и данные сохранены!");

    } catch (error) {
      notyf.error("Ошибка при удалении файла!");
      console.error("Ошибка удаления файла:", error);
    }

  };


  return (
    <div className="form_controls form_controls-files">
      <div className={`control control-files ${error ? "control-files-err" : ""}`}>
        <span className="control_title control_title-notice">
          {title}
          {notice && (
            <div className="control_notice">
              <span className="control_notice_icon"></span>
              <div className="control_notice_content">
                <p>{notice}</p>
              </div>
            </div>
          )}
        </span>

        <div className="upload">
          <input
            id={`${fieldName}-files`}
            type="file"
            className="upload_input"
            multiple
            onChange={handleFileUpload}
          />
          <label htmlFor={`${fieldName}-files`} className="upload_btn btn btn-main">
            <span></span> Загрузить
          </label>
          <div className="upload_info">
            <p>Максимальный размер файла: {MAX_FILE_SIZE_MB} МБ.</p>
            <p>Допустимые форматы: {ALLOWED_FORMATS.join(", ")}.</p>
          </div>
        </div>



        <div className="files">
          {userData.files && userData.files[fieldName]?.map((file) => (
            <div key={file.id} className="files_item">
              <span className="files_item_icon"></span>
              <span className="files_item_title">{file.name}</span>
              <div className="files_item_actions">
                <button
                  type="button"
                  className="files_item_del"
                  onClick={() => handleFileDelete(file.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className="alert">
            <span className="alert_icon"></span>
            <p className="alert_text">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

DocumentUploader.propTypes = {
  userId: PropTypes.number,
  fieldName: PropTypes.string.isRequired, // Уникальное имя для идентификации состояния документов
  title: PropTypes.string.isRequired, // Заголовок для блока
  notice: PropTypes.string, // Описание или подсказка
};