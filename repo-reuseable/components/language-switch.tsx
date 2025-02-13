import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const switchLanguage = (lang: any) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => switchLanguage('vi')} disabled={locale === 'vi'}>
        Tiếng Việt
      </button>
      <button onClick={() => switchLanguage('en')} disabled={locale === 'en'}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
