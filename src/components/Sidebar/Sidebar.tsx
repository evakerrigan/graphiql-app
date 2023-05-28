import { t } from 'i18next';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">{t('showDocs')}</button>
    </div>
  )
}