(async function () {
  const ERROR_ALERT = 'An error has occurred while translating the page';
  const lang = localStorage.getItem('lang');

  const translate_buttons = document.getElementsByClassName('translate-button');
  for (const translate_button of translate_buttons) {
    translate_button.addEventListener('click', () => {
      const target_language = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', target_language);
      location.reload();
    });
  }

  if (lang === 'ar') {
    const arabic_req = await fetch('/data/arabic.json');
    if (arabic_req.status >= 400) {
      return alert(ERROR_ALERT);
    }

    const translation = await arabic_req.json();
    if (!translation) {
      alert(ERROR_ALERT);
    }

    document.documentElement.classList.add('arabic');
    document.title = 'زيت وليمون - طعم شارع الحنين';
    document.documentElement.lang = 'ar';

    const locale_texts = document.getElementsByTagName('locale-text');
    for (const lt of locale_texts) lt.innerHTML = translation[lt.getAttribute('value')];
  }
})();
