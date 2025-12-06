document.addEventListener('DOMContentLoaded', () => {
    const digitalClock = document.getElementById('digital-clock');
    const dateDisplay = document.getElementById('date-display');
    
    // 曜日の日本語表記リスト
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

    function updateClock() {
        const now = new Date();
        
        // --- 時刻の処理 ---
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

        // --- 日付と曜日の処理 ---
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonthは0から始まるため+1
        const dayOfMonth = String(now.getDate()).padStart(2, '0');
        
        // 曜日を取得 (0=日, 1=月, ...)
        const dayIndex = now.getDay(); 
        const dayName = daysOfWeek[dayIndex];
        
        // 表示フォーマット: 2024/12/06 (金)
        dateDisplay.textContent = `${year}/${month}/${dayOfMonth} (${dayName})`;
    }

    // 1秒ごとに時計を更新
    setInterval(updateClock, 1000);

    // ページロード時に一度更新して初期表示
    updateClock();
});
