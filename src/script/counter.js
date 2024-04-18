// Votre JavaScript ici
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const duration = 3000; // Durée totale de l'animation en millisecondes
    const finalValue = 1001; // Valeur finale du compteur

    let start = null;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const increment = finalValue / duration * progress;

        if (increment < finalValue) {
            counterElement.textContent = Math.floor(increment);
            window.requestAnimationFrame(step);
        } else {
            counterElement.textContent = finalValue;
        }
    };

    window.requestAnimationFrame(step);
});
