// Translation button
(async () => {
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

// Hamburger menu
(async () => {
  const burger_menu = document.getElementById('burger-menu');
  const nav_menu = document.getElementById('nav-menu');
  const burger_menu_class_list = burger_menu.classList;
  const nav_menu_class_list = nav_menu.classList;
  const close_nav_menu = () => {
    nav_menu_class_list.add('hidden', 'removed');
    burger_menu_class_list.remove('open');
  };

  burger_menu.addEventListener('click', () => {
    if (burger_menu_class_list.contains('open')) {
      close_nav_menu();
      document.removeEventListener('scroll', close_nav_menu);
    } else {
      nav_menu_class_list.remove('removed');
      /** FIXME: The 15ms delay is a hack, sometimes the result of removing
       * the 'hidden' class takes place before the result of removing the 'removed' class; hence, the transition is
       * applied while the display is 'none' resulting in no transition
       */
      setTimeout(() => {
        nav_menu_class_list.remove('hidden');
      }, 15);
      burger_menu_class_list.add('open');
      document.addEventListener('scroll', close_nav_menu);
    }
  });

  if (location.hash === '#menu') {
    burger_menu.click();
  }
})();
