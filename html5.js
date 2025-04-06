document.addEventListener('DOMContentLoaded', () => {
    // Web Storage példa
    const webStorageExample = document.getElementById('webStorageExample');
    localStorage.setItem('example', 'Hello, Web Storage!');
    webStorageExample.innerHTML = `Tárolt érték: ${localStorage.getItem('example')}`;

    // Web Workers példa
    const webWorkersExample = document.getElementById('webWorkersExample');
    if (window.Worker) {
        const worker = new Worker('worker.js');
        worker.postMessage('Hello, Worker!');
        worker.onmessage = (e) => {
            webWorkersExample.innerHTML = `Worker válasz: ${e.data}`;
        };
    } else {
        webWorkersExample.innerHTML = 'A böngésző nem támogatja a Web Workers-t.';
    }

    // Server-Sent Events példa
    const serverSentEventsExample = document.getElementById('serverSentEventsExample');
    if (typeof(EventSource) !== 'undefined') {
        const eventSource = new EventSource('events');
        eventSource.onmessage = (e) => {
            serverSentEventsExample.innerHTML = `Üzenet: ${e.data}`;
        };
    } else {
        serverSentEventsExample.innerHTML = 'A böngésző nem támogatja a Server-Sent Events-t.';
    }

    // Geolocation API példa
    const geolocationExample = document.getElementById('geolocationExample');
    if (location.protocol !== 'https:') {
        geolocationExample.innerHTML = 'A Geolocation API használatához biztonságos eredet (HTTPS) szükséges.';
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            geolocationExample.innerHTML = `Szélesség: ${position.coords.latitude}, Hosszúság: ${position.coords.longitude}`;
        });
    } else {
        geolocationExample.innerHTML = 'A böngésző nem támogatja a Geolocation API-t.';
    }

    // Drag and Drop API példa
    const dragAndDropExample = document.getElementById('dragAndDropExample');
    dragAndDropExample.innerHTML = '<div draggable="true" style="width: 100px; height: 100px; background-color: red;">Húzz ide</div>';
    dragAndDropExample.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'Ez egy húzható elem.');
    });

    // Canvas példa
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

    // SVG példa
    const svgExample = document.getElementById('svgExample');
    svgExample.innerHTML = `
        <svg width="200" height="200">
            <circle cx="100" cy="100" r="50" fill="blue" />
            <rect x="50" y="50" width="100" height="100" fill="green" />
            <text x="100" y="180" font-size="20" text-anchor="middle" fill="black">SVG példa</text>
        </svg>
    `;

    const svg = svgExample.querySelector('svg');
    svg.addEventListener('click', (e) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const svgRect = svg.getBoundingClientRect();
        rect.setAttribute('x', e.clientX - svgRect.left - 10);
        rect.setAttribute('y', e.clientY - svgRect.top - 10);
        rect.setAttribute('width', 20);
        rect.setAttribute('height', 20);
        rect.setAttribute('fill', 'red');
        svg.appendChild(rect);
    });
});
