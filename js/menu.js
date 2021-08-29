(function () {
    add_events();
    populate_dropdown();

    function add_events() {
        document
            .getElementById('menu-dropdown')
            .addEventListener('change', (e) => show_menu_item(e.target.value));
    }

    function populate_dropdown() {
        let dropdown = document.getElementById('menu-dropdown');
        for (let item of Object.keys(menu)) {
            let name = menu[item].name;
            dropdown.innerHTML += `<option id=${item} value=${item}>${name}</option>`;
        }
        show_menu_item('breakfast');
    }

    function show_menu_item(item_id) {
        let menu_item = menu[item_id];
        let meals = menu_item.meals;
        let menu_div = document.getElementById('menu-div');
        menu_div.innerHTML = '';
        for (let meal_id in meals) {
            let meal = meals[meal_id];
            let description =
                meal.description === ''
                    ? ''
                    : `<p id=${meal_id}-description>${meal.description}</p>`;
            let price =
                meal.description === ''
                    ? `<p class="margintop05">${meal.price}</p>`
                    : `<p>${meal.price}</p>`;
            menu_div.innerHTML += `<div class="menu-item">
                <h3 id=${meal_id}>${meal.name}</h3>
                ${description}
                ${price}
                </div>`;
        }
    }
})();
