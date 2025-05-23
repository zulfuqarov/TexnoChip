import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage('az')}
        className={`px-2 py-1 rounded ${i18n.language === 'az' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        AZ
      </button>
    </div>
  );
};

export default LanguageSwitcher; 