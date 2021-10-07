(function () {
    function add_events() {
        document
            .getElementById('menu-button')
            .addEventListener('click', () => scroll_to('menu-content'));
        document
            .getElementById('menu-dropdown')
            .addEventListener('change', () => scroll_to('menu-content'));
        document
            .getElementById('contact-button')
            .addEventListener('click', () => scroll_to('contact-us'));
    }

    function scroll_to(element_id) {
        document.getElementById(element_id).scrollIntoView();
    }

    add_events();
})();
