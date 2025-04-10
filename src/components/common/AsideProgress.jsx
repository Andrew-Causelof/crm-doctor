import PropTypes from 'prop-types';
import { useUserStore } from '../../store';
import { useNotification } from '../../context/NotificationContext';

function AsideProgress({
    title,
    progress,
    onClick
}) {

    const { saveUserData } = useUserStore();

    const notyf = useNotification(); // Используем общий экземпляр

    const handleSave = async () => {
        try {
            await saveUserData(3);
            notyf.success('Данные обновлены успешно');

        } catch (error) {
            console.error("Ошибка сохранения данных:", error);
            notyf.error('Ошибка сохранения данных');
        }
    }

    return (
        <aside className="aside aside-right">
            <div className="widget">
                <div className="widget_title">{title}</div>
                <div className="progress progress-dark">
                    <div className="progress_bar">
                        <span className="progress_line" style={{ width: `${progress}%` }}></span>
                    </div>
                    <p className="progress_text">Заполнено <span className="progress_value">{progress}%</span></p>
                </div>
                <div className="widget_actions">
                    {/* @TODO: Реализовать сохранение */}
                    <button type="button" className="btn btn-main btn-fw" onClick={handleSave}>
                        Сохранить
                    </button>
                    <a className="btn btn-main btn-fw next-btn" onClick={onClick}>Далее</a>
                </div>
            </div>
        </aside>
    )
}

AsideProgress.propTypes = {
    title: PropTypes.string.isRequired, // Название вкладки
    progress: PropTypes.number.isRequired, // Прогресс в процентах
    onClick: PropTypes.func, // Обработчик клика
};

export default AsideProgress
