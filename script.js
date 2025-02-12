window.addEventListener('load', () => {
    const bgImage = document.querySelector('.framer-1ieviq0');
    if (!bgImage) {
        console.error('Element not found');
        return;
    }

    let startTime = null;
    const cycleDuration = 3000;
    const maxTranslateX = 72;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % cycleDuration) / cycleDuration;
        const x = progress * maxTranslateX;
        bgImage.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});