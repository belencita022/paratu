const heart = document.getElementById('heart');

heart.addEventListener('mouseover', () => {
    heart.style.color = '#ff6b6b';
});

heart.addEventListener('mouseout', () => {
    heart.style.color = '#ffffff';
});
