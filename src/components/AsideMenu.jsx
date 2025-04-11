import Tab from './AsideMenu/Tab';
import MessageTab from './AsideMenu/MessageTab';
import EventTab from './AsideMenu/EventTab';

import { useAppStore } from '../store/store';

export default function AsideMenu() {
  const { appData, setAppData } = useAppStore();

  return (
    <aside className="aside aside-left gradient">
      <ul className="menu">
        <EventTab
          text="События"
          active={appData.activeTab === 'events'}
          onClick={() => setAppData('activeTab', 'events')}
        />
        <MessageTab
          text="Чаты с пациентами"
          active={appData.activeTab === 'chats'}
          onClick={() => setAppData('activeTab', 'chats')}
        />
        <Tab
          text="Все пациенты"
          active={appData.activeTab === 'patients'}
          onClick={() => setAppData('activeTab', 'patients')}
        />
        <Tab
          text="Правила при госпитализации"
          active={appData.activeTab === 'rules'}
          onClick={() => setAppData('activeTab', 'rules')}
        />
        <Tab
          text="Рекомендации после операции"
          active={appData.activeTab === 'recomendation'}
          onClick={() => setAppData('activeTab', 'recomendation')}
        />
      </ul>
    </aside>
  );
}
