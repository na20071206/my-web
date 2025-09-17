// ページの背景グラデーションを動的に変更する
const gradients = [
    'linear-gradient(135deg, #2193b0 0%, #6dd5ed 50%, #b6d0f7 100%)',
    'linear-gradient(135deg, #396afc 0%, #2948ff 100%)',
    'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    'linear-gradient(135deg, #2980b9 0%, #6dd5fa 100%)'
];
let current = 0;

function changeGradient() {
    current = (current + 1) % gradients.length;
    document.body.style.background = gradients[current];
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('change-bg-btn');
    if (btn) {
        btn.addEventListener('click', changeGradient);
    }
});
