(function () {
    const lang = localStorage.getItem('lang');
    (async function () {
        document.getElementById('translate-button').addEventListener('click', (e) => {
            const target_language = (e.target.innerHTML === 'English' && 'en') || 'ar';
            localStorage.setItem('lang', target_language);
            location.reload();
        });
        if (lang === 'ar') {
            const arabic_req = await fetch('data/arabic.json');
            if (arabic_req.status >= 400) {
                return alert('An error has occurred while translating the page');
            }
            const translation = await arabic_req.json();
            translate(translation);
        }
    })();

    function translate(translation) {
        if (!translation) {
            alert('An error has occurred while translating the page');
        }
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
