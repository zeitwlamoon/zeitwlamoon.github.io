(function () {
    const language = localStorage.getItem('lang');
    add_events();
    populate_dropdown();

    function add_events() {
        document
            .getElementById('menu-dropdown')
            .addEventListener('change', (e) => show_menu_item(e.target.value));
    }

    function populate_dropdown() {
        const dropdown = document.getElementById('menu-dropdown');
        for (const item of Object.keys(menu)) {
            const { name, arabic_name } = menu[item];
            const display_name = (language === 'ar' && arabic_name) || name;
            dropdown.innerHTML += `<option id=${item} value=${item}>${display_name}</option>`;
        }
        show_menu_item('breakfast');
    }

    function remove_button_area() {
        const button_area = document.getElementById('images-button-area');
        button_area && button_area.remove();
    }

    function show_images(menu_item) {
        const { images } = menu[menu_item];
        if (!images) {
            return;
        }
        remove_button_area();
        const menu_div = document.getElementById('menu-div');
        menu_div.innerHTML = '';
        for (const image in images) {
            const display_name = (language === 'ar' && images[image]) || image.replaceAll('-', ' ');
            menu_div.innerHTML += `<div class="menu-item"><h3>${display_name}</h3>
                <img src="resources/menu/${image}.jpg" alt="${display_name}"></div>`;
        }
        show_button_area(menu_item, false);
    }

    function show_button_area(menu_item, should_image = true) {
        if (!menu[menu_item].images) {
            return;
        }
        const menu_content = document.getElementById('menu-content');
        const button_area = document.createElement('div');
        button_area.id = 'images-button-area';
        button_area.className = 'grid-item';
        const images_button = document.createElement('a');
        images_button.classList = 'images-button main-button';
        const button_id = `${menu_item}-images-button`;
        images_button.id = button_id;
        if (should_image) {
            images_button.innerHTML =
                (language === 'ar' && `صور ${menu[menu_item].arabic_name}`) ||
                `${menu[menu_item].name} images`;
            images_button.addEventListener('click', () => show_images(menu_item));
        } else {
            images_button.innerHTML = (language === 'ar' && 'عودة إلى القائمة') || 'Back to menu';
            images_button.addEventListener('click', () => show_menu_item(menu_item));
        }
        images_button.addEventListener('click', () => menu_content.scrollIntoView());
        button_area.appendChild(images_button);
        menu_content.appendChild(button_area);
    }

    function show_menu_item(item_id) {
        const menu_item = menu[item_id];
        const meals = menu_item.meals;
        const menu_div = document.getElementById('menu-div');
        menu_div.innerHTML = '';
        for (const meal_id in meals) {
            const meal = meals[meal_id];
            const { name, arabic_name, description, arabic_description } = meal;
            const display_name = (language === 'ar' && arabic_name) || name;
            const display_description = (language === 'ar' && arabic_description) || description;

            const description_html =
                display_description === ''
                    ? ''
                    : `<p id=${meal_id}-description>${display_description}</p>`;

            const price_html =
                display_description === ''
                    ? `<p class="margintop05">${meal.price}</p>`
                    : `<p>${meal.price}</p>`;

            menu_div.innerHTML += `<div class="menu-item">
                <h3 id=${meal_id}>${display_name}</h3>
                ${description_html}
                ${price_html}
                </div>`;
        }
        remove_button_area();
        show_button_area(item_id);
    }
})();
