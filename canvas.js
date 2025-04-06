document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ JavaScript betöltődött!");

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    if (!canvas || !ctx) {
        console.error("❌ A vászon nem található vagy nem támogatott!");
        return;
    }

    console.log("🎨 Vászon törlése...");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log("🟩 Zöld négyzet rajzolása...");
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

    console.log("🔵 Kék kör rajzolása...");
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();

    console.log("📝 Szöveg rajzolása...");
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Canvas példa', 10, 150);

    console.log("🖱 Kattintási esemény beállítása...");
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Vászon törlése minden kattintás előtt
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        console.log(`🟥 Piros négyzet rajzolása (${x}, ${y})`);
        ctx.fillStyle = 'red';
        ctx.fillRect(x - 5, y - 5, 10, 10);
    });
});
