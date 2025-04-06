class MenuItem {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }

    render() {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = this.link;
        anchor.textContent = this.name;
        item.appendChild(anchor);
        return item;
    }
}

class Menu {
    constructor(title) {
        this.title = title;
        this.items = [];
    }

    addItem(name, link) {
        this.items.push(new MenuItem(name, link));
    }

    render() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu-container';

        const menuTitle = document.createElement('h2');
        menuTitle.className = 'menu-title';
        menuTitle.textContent = this.title;
        menuContainer.appendChild(menuTitle);

        const menuList = document.createElement('ul');
        this.items.forEach(item => {
            menuList.appendChild(item.render());
        });

        menuContainer.appendChild(menuList);

        menuList.addEventListener('click', (event) => {
            alert(`Navigáció: ${event.target.textContent}`);
        });

        return menuContainer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const myMenu = new Menu('Dinamkus Menü');
    myMenu.addItem('Kezdőlap', 'index.html');
    myMenu.addItem('Táblázatok', 'table.html');
    myMenu.addItem('ChartJS', 'chartjs.html');

    const dynamicMenuContainer = document.getElementById('dynamic-menu-container');
    dynamicMenuContainer.appendChild(myMenu.render());
});
