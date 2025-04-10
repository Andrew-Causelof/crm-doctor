import { NotificationProvider } from './context/NotificationContext.jsx';
import Header from './components/Header.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import MainContent from './components/MainContent.jsx';


function App() {

  return (
    <NotificationProvider>
      <div class="page page-doctor">
        <div class="layout">
          <Header />
          <AsideMenu />
          <MainContent />
      </div>
    </div>

    </NotificationProvider>
  );
}

export default App;