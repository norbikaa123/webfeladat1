document.addEventListener('DOMContentLoaded', () => {
    const webWorkersExample = document.getElementById('webWorkersExample');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const display = document.createElement('div');

    input.placeholder = 'Írj be egy üzenetet';
    button.textContent = 'Küldés Worker-nek';

    if (window.Worker) {
        const worker = new Worker('worker.js');
        button.addEventListener('click', () => {
            worker.postMessage(input.value);
        });
        worker.onmessage = (e) => {
            display.textContent = `Worker válasz: ${e.data}`;
        };
    } else {
        display.textContent = 'A böngésző nem támogatja a Web Workers-t.';
    }

    webWorkersExample.appendChild(input);
    webWorkersExample.appendChild(button);
    webWorkersExample.appendChild(display);
});
