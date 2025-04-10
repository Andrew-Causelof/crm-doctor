import PropTypes from 'prop-types';

export default function ChatMessage({ author, text, timestamp, date, isClinic, files, onFileClick }) {

    const renderFile = (file) => {
        const isImage = file.type === 'image';
    
        return (
            <a
                key={file.url}
                href={isImage ? '#' : file.url}
                target={isImage ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="chat_file_link"
                onClick={(e) => {
                    if (isImage) {
                        e.preventDefault();
                        onFileClick(file); // Функция для открытия модалки
                    }
                }}
            >
                {isImage ? (
                    <img src={file.url} alt={file.name} />
                ) : (
                    <>
                        <i className='files_item_icon'></i>
                        <span>{file.name}</span>
                    </>
                )}
            </a>
        );
    };
    
    

    return (
        <div className={`chat_message ${isClinic ? 'chat_message-reverse' : ''}`}>
            <div className="chat_message_profile">
                <div className="chat_message_profile_avatar">
                    <span>{author.initials}</span>
                </div>
                <div className="chat_message_profile_name">{author.name}</div>
            </div>
            <div className="chat_message_content">
                <div className="chat_message_actions">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="message">{text}</div>
                {files && files.length > 0 && (
                    <div className="chat_files">
                        {files.map(renderFile)}
                    </div>
                )}
                <div className="chat_message_timestamp">
                    <span>{timestamp}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}

ChatMessage.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        initials: PropTypes.string.isRequired
    }).isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isClinic: PropTypes.bool,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    )
};
