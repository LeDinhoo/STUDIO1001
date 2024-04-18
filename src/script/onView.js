// Créer un observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ajouter la classe 'visible' quand l'élément est dans la vue
        observer.unobserve(entry.target); // Arrêter l'observation une fois que l'élément est apparu
      }
    });
  });
  
  // Sélectionner l'élément à observer
  const element = document.querySelector('.title');
  
  // Observer l'élément
  observer.observe(element);

  // Créer un observer
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Enter");
      const targetElement = document.querySelector('.price');
      targetElement.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      const targetElement2 = document.querySelector('.price2');
      targetElement2.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      const targetElement3 = document.querySelector('.price3');
      targetElement3.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      observer2.unobserve(entry.target); // Arrêter l'observation une fois que l'élément est apparu
    }
    console.log("Leave");
  });
},
{
  threshold: 0,
}
);

// Sélectionner l'élément à observer
const trigger = document.querySelector('.trigger');

// Observer l'élément
observer2.observe(trigger);

// Créer un observer
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Ajouter la classe 'visible' quand l'élément est dans la vue
      observer3.unobserve(entry.target); // Arrêter l'observation une fois que l'élément est apparu
    }
  });
});

// Sélectionner l'élément à observer
const element3 = document.querySelector('.title2');

// Observer l'élément
observer.observe(element3);

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Enter");
      const targetElement = document.querySelector('.price4');
      targetElement.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      const targetElement2 = document.querySelector('.price5');
      targetElement2.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      const targetElement3 = document.querySelector('.price6');
      targetElement3.classList.add('visible'); // Ajouter la classe 'visible' à l'élément cible
      observer4.unobserve(entry.target); // Arrêter l'observation une fois que l'élément est apparu
    }
    console.log("Leave");
  });
},
{
  threshold: 0,
}
);

// Sélectionner l'élément à observer
const trigger2 = document.querySelector('.trigger2');

// Observer l'élément
observer4.observe(trigger2);