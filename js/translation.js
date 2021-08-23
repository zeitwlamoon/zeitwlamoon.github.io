(function () {
    window.onload = function () {
        document.getElementById('translate-button').addEventListener('click', translate);
        let lang = localStorage.getItem('lang');
        if (lang === 'ar') {
            translate();
        }
    };

    async function translate() {
        let lang =
            document.getElementById('translate-button').innerHTML === 'English' ? 'en' : 'ar';
        localStorage.setItem('lang', lang);
        if (lang === 'en') {
            return location.reload();
        }
        for (let element_id of Object.keys(translation)) {
            let element = document.getElementById(element_id);
            if (!element) {
                continue;
            }
            element.innerHTML = translation[element_id];
            element.classList.add('arabic')
        }
    }
})();
