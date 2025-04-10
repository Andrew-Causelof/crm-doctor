import { useEffect, useState } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import ChatMessageList from '../common/ChatMessageList ';
import ChatForm from '../common/ChatForm ';
import FilePreviewModal from '../common/FilePreviewModal';
import {mockFetchChatHistory } from '../../data/mockMessages';


export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [openFile, setOpenFile] = useState(null); // Текущий открытый файл

    useEffect(() => {
        mockFetchChatHistory()
            .then(setMessages)
            .catch(err => console.error('Ошибка загрузки сообщений:', err));
    }, []);

    const handleSendMessage = (text, files = []) => {
        const newMessage = {
            id: Date.now(),
            author: { name: "Добронравов Олег Робертович", initials: "О" },
            text,
            timestamp: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            isClinic: false,
            files: files.map(file => ({
                name: file.name,
                url: URL.createObjectURL(file), // В продакшене заменишь на URL с сервера
                type: file.type.startsWith('image') ? 'image' : 'document'
            }))
        };
    
        setMessages((prev) => [...prev, newMessage]);
    };
    


    return (
        <main className="main main-full">
            <div className="content">
                <div className="content_head">
                    <Breadcrumbs current="Чат с клиникой" />
                    <div className="title title-page">Чат с клиникой</div>
                </div>
                <div className="content_body">
                    <div className="chat">
                        <ChatMessageList messages={messages} onFileClick={setOpenFile} />
                        <FilePreviewModal file={openFile} onClose={() => setOpenFile(null)} />
                        <ChatForm onSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>
        </main>
    );
}
