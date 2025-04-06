document.addEventListener('DOMContentLoaded', () => {
    const webStorageExample = document.getElementById('webStorageExample');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const display = document.createElement('div');

    input.placeholder = 'Írj be egy értéket';
    button.textContent = 'Mentés';

    button.addEventListener('click', () => {
        localStorage.setItem('example', input.value);
        display.textContent = `Tárolt érték: ${localStorage.getItem('example')}`;
    });

    webStorageExample.appendChild(input);
    webStorageExample.appendChild(button);
    webStorageExample.appendChild(display);

    display.textContent = `Tárolt érték: ${localStorage.getItem('example')}`;
});
