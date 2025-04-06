document.addEventListener('DOMContentLoaded', () => {
    const serverSentEventsExample = document.getElementById('serverSentEventsExample');
    const display = document.createElement('div');

    if (typeof(EventSource) !== 'undefined') {
        const eventSource = new EventSource('https://sse.dev/test');
        eventSource.onmessage = (e) => {
            const message = document.createElement('p');
            message.textContent = `Üzenet: ${e.data}`;
            display.appendChild(message);
        };
    } else {
        display.textContent = 'A böngésző nem támogatja a Server-Sent Events-t.';
    }

    serverSentEventsExample.appendChild(display);
});