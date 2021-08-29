(function () {
    let menu_translation;
    (function () {
        let lang = localStorage.getItem('lang');
        document.getElementById('translate-button').addEventListener('click', translate);
        menu_dropdown = document.getElementById('menu-dropdown');
        menu_dropdown.addEventListener('change', () => apply_translation(menu_translation));
        menu_translation = get_menu_translation();
        if (lang === 'ar') {
            translate();
        }
    })();

    function get_menu_translation() {
        let menu_translation = {};
        for (let item in menu) {
            menu_translation[item] = menu[item].arabic_name;
            for (let meal_id in menu[item].meals) {
                let meal = menu[item].meals[meal_id];
                menu_translation[meal_id] = meal.arabic_name;
                menu_translation[meal_id + '-description'] = meal.arabic_description;
            }
        }
        return menu_translation;
    }

    function translate() {
        let lang =
            document.getElementById('translate-button').innerHTML === 'English' ? 'en' : 'ar';
        localStorage.setItem('lang', lang);
        if (lang === 'en') {
            return location.reload();
        }
        document.documentElement.classList.add('arabic');
        document.title = 'زيت وليمون – طعم شارع الحنين';
        document.documentElement.lang = 'ar';
        apply_translation(translation);
        apply_translation(menu_translation);
    }

    function apply_translation(translation_object) {
        if (localStorage.getItem('lang') !== 'ar') {
            return;
        }
        for (let element_id of Object.keys(translation_object)) {
            let element = document.getElementById(element_id);
            if (!element) {
                continue;
            }
            element.innerHTML = translation_object[element_id];
        }
    }
})();
