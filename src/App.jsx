import { NotificationProvider } from './context/NotificationContext.jsx';
import Header from './components/Header.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
  return (
    <NotificationProvider>
      <div className="page page-doctor">
        <div className="layout">
          <Header />
          <AsideMenu />
          <MainContent />
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;
