document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('geolocationOutput');
    const getLocation = () => {
        if (location.protocol !== 'https:') {
            display.textContent = 'A Geolocation API használatához biztonságos eredet (HTTPS) szükséges.';
        } else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                display.textContent = `Szélesség: ${position.coords.latitude}, Hosszúság: ${position.coords.longitude}`;
            }, () => {
                display.textContent = 'Hozzáférés megtagadva vagy nincs elérhető helyzet.';
            });
        } else {
            display.textContent = 'A böngésződ nem támogatja a geolokációt!';
        }
    };
    document.getElementById('getLocationBtn').addEventListener('click', getLocation);
});
