let keys = [];
window.addEventListener('keydown', function(event) {
    keys.push(event.key);
    keys = keys.slice(-4);
    if (keys.join('') === 'flip') {
        document.getElementById('flip-all').classList.toggle('rotate');
    }
});