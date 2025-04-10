import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

export default function ChatMessageList({ messages, onFileClick }) {
    return (
        <div className="chat_messages">
            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    author={message.author}
                    text={message.text}
                    timestamp={message.timestamp}
                    date={message.date}
                    isClinic={message.isClinic}
                    files={message.files}
                    onFileClick={onFileClick}
                />
            ))}
        </div>
    );
}

ChatMessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            initials: PropTypes.string.isRequired
        }).isRequired,
        text: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        isClinic: PropTypes.bool.isRequired
    })).isRequired
};
