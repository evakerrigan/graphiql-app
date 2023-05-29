import './Sidebar.css';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {

  const {t} = useTranslation();
  return (
    <div className="sidebar">
      <button className="sidebar-button">{t('showDocs')}</button>
    </div>
  )
}