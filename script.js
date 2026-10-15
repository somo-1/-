const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const movieScreen = document.getElementById("movieScreen");
const movingText = document.getElementById("movingText");
const finalLink = document.getElementById("finalLink");

let started = false;

startButton.addEventListener("click", () => {
    if (started) return;

    started = true;
    startButton.disabled = true;

    // إخفاء شاشة البداية
    startScreen.classList.add("hide");

    // إظهار شاشة الرسالة
    movieScreen.classList.add("playing");
    movieScreen.setAttribute("aria-hidden", "false");

    // إعادة ضبط الحركة
    movingText.classList.remove("animate");
    finalLink.classList.remove("show");

    void movingText.offsetWidth;

    // بدء حركة الجملة
    movingText.classList.add("animate");
});

// إظهار الرابط بعد انتهاء حركة الكلام
movingText.addEventListener("animationend", (event) => {
    if (event.animationName !== "textFlow") return;

    finalLink.classList.add("show");
});