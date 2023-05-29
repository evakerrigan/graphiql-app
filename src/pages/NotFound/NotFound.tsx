import { useTranslation } from 'react-i18next';

const NotFound = () => {

  const { t } = useTranslation();
  return (
    <div className="app-content">{t('notFound')}</div>
  )
}

export default NotFound;