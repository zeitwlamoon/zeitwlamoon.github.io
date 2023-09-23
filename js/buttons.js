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
  const close_burger_menu = document.getElementById('close-burger-menu');
  const nav_menu = document.getElementById('nav-menu');
  const elements_to_remove_and_add = [nav_menu, close_burger_menu];

  const add_element = (element) => {
    element.classList.remove('removed');
    // Force this class name to be removed afterwards
    setTimeout(() => {
      element.classList.remove('hidden');
    }, 0);
  };
  const remove_then_add = (elements_to_remove, elements_to_add) => {
    for (let i = 0; i < elements_to_remove.length; ++i) {
      const element = elements_to_remove[i];
      element.classList.add('hidden');
      element.addEventListener('transitionend', function removeAfterTransition() {
        element.classList.add('removed');
        element.removeEventListener('transitionend', removeAfterTransition);
        if (i === elements_to_remove.length - 1) {
          elements_to_add.forEach(add_element);
        }
      });
    }
  };

  burger_menu.addEventListener('click', () => {
    remove_then_add([burger_menu], elements_to_remove_and_add);
  });

  close_burger_menu.addEventListener('click', () => {
    remove_then_add(elements_to_remove_and_add, [burger_menu]);
  });
})();
