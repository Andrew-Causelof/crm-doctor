import { createContext, useContext } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // Подключаем стили

const notyf = new Notyf();

const NotificationContext = createContext(notyf);

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  return (
    <NotificationContext.Provider value={notyf}>
      {children}
    </NotificationContext.Provider>
  );
};
