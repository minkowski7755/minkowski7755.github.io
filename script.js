document.addEventListener('DOMContentLoaded', () => {
    const digitalClock = document.getElementById('digital-clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // 1秒ごとに時計を更新
    setInterval(updateClock, 1000);

    // ページロード時に一度更新して初期表示
    updateClock();
});