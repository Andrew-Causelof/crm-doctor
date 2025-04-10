import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ChatForm({ onSendMessage }) {
    const [text, setText] = useState('');
    const [files, setFiles] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() || files.length > 0) {
            onSendMessage(text, files);
            setText('');
            setFiles([]);
        }
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleRemoveFile = (index) => {
        setFiles(files.filter((_, fileIndex) => fileIndex !== index));
    };

    return (
        <form className="chat_form" onSubmit={handleSubmit}>
            <input
                className="chat_form_input"
                name="chat"
                placeholder="Написать сообщение"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="chat_form_actions">
                <div className="chat_form_file">
                    <input
                        type="file"
                        id="chat-file"
                        multiple // ВАЖНО! Разрешаем выбор нескольких файлов
                        onChange={handleFileChange}
                    />
                    <label htmlFor="chat-file">📎</label>
                </div>
                <div className="chat_form_files_list">
                    {files.map((file, index) => (
                        <div key={index} className="chat_form_file_item">
                            {file.name}
                            <button type="button" onClick={() => handleRemoveFile(index)}>✖</button>
                        </div>
                    ))}
                </div>
                <button className="btn btn-main" type="submit">Отправить</button>
            </div>
        </form>
    );
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
};
