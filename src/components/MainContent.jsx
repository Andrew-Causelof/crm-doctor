import Events from './MainContent/Events';
import Patients from './MainContent/Patients';
import Chats from './MainContent/Chats';
import Rules from './MainContent/Rules';
import Recomendation from './MainContent/Recomendation';
import Breadcrumbs from './common/Breadcrumbs';
import { useAppStore } from '../store/store';

export default function MainContent() {
  const { appData, setAppData } = useAppStore();

  return (
    <>
      {appData.activeTab === 'events' && <Events />}
      {appData.activeTab === 'chats' && <Chats />}
      {appData.activeTab === 'patients' && <Patients />}
      {appData.activeTab === 'rules' && <Rules />}
      {appData.activeTab === 'recomendation' && <Recomendation />}
    </>
  );
}
