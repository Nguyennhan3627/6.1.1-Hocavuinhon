const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');
const bMusic = document.getElementById('bgMusic');
let Playing = false;

musicBtn.addEventListener('click', () => {
    if (Playing) {
        bMusic.pause();
        musicText.textContent = 'Phát Nhạc';
    } else {
        bMusic.play();
        musicText.textContent = 'Dừng Nhạc';
    }
    Playing = !Playing;
});