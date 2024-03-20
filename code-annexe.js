function diffEntreDeuxJours(jour, mois) {
    const msParJour = 1000*3600*24;
    var auj = new Date()
    auj.setHours(0, 0, 0, 0)
    var test = new Date(mois + "/" + jour + "/" + auj.getFullYear())
    if (auj <= test) {
        const diffEnJours = Math.ceil((test-auj)/msParJour)
        return diffEnJours
    } else {
        var test = new Date(mois + "/" + jour + "/" + (auj.getFullYear()+1))
        const diffEnJours = Math.ceil((test-auj)/msParJour)
        return diffEnJours
    }
}

let keys = [];
window.addEventListener('keydown', function(event) {
    keys.push(event.key);
    keys = keys.slice(-4);
    if (keys.join('') === 'flip') {
        document.getElementById('flip-all').classList.toggle('rotate');
    }
});