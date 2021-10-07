(function () {
    const lang = localStorage.getItem('lang');
    (function () {
        document.getElementById('translate-button').addEventListener('click', (e) => {
            const target_language = (e.target.innerHTML === 'English' && 'en') || 'ar';
            localStorage.setItem('lang', target_language);
            location.reload();
        });
        if (lang === 'ar') {
            translate();
        }
    })();

    function translate() {
        document.documentElement.classList.add('arabic');
        document.title = 'زيت وليمون – طعم شارع الحنين';
        document.documentElement.lang = 'ar';
        apply_translation(translation);
    }

    function apply_translation(translation_object) {
        for (const element_id of Object.keys(translation_object)) {
            const element = document.getElementById(element_id);
            if (!element) {
                continue;
            }
            element.innerHTML = translation_object[element_id];
        }
    }
})();
