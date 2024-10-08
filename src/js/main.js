/* ----------------------------------------------
    Exercices JavaScript : animer avec
    la bibliothèque GSAP
   ----------------------------------------------
    Installer GSAP
   ---------------------------------------------- */
import gsap from "gsap";
/* -----------------------
    Exercice 1
   -----------------------
    Déplacer l'item 1 de 100px vers la gauche
    durant 3 secondes
   ----------------------- */
gsap.to("#js-exercise-1", { x: "100px", duration: 3 });
/* -----------------------
    Exercice 2
   -----------------------
    Effectuer une rotation de l'item 2 de 45 degrés
    durant 2 secondes
    après un délai de 2 secondes
   ----------------------- */
gsap.to("#js-exercise-2", {
  rotation: 45,
  duration: 2,
});
/* -----------------------
    Exercice 3
   -----------------------
    Changer l'item 3 d'échelle (75%)
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
gsap.to("#js-exercise-3", {
  scale: 0.75,
  opacity: 0.5,
  duration: 2,
  delay: 1,
});
/* -----------------------
    Exercice 4
   -----------------------
    Rétablir l'item 4 DEPUIS une échelle de 75%
    et d'opacité (0.5)
    durant 2 secondes
    après un délai de 1 secondes
   ----------------------- */
gsap.set("#js-exercise-4", {
  scale: 0.75,
  opacity: 0.5,
});

gsap.to("#js-exercise-4", {
  scale: 1,
  opacity: 1,
  duration: 2,
  delay: 1,
});

/* -----------------------
    Exercice 5 (timeline)
   -----------------------
    Déplacer l'item 5 de -100px vers la gauche
    durant 3 secondes
    PUIS effectuer une rotation de l'item 5 de 45 degrés
    durant 2 secondes après un délai de 1 seconde
    PUIS déplacer l'item 5 de 100px vers le haut
    durant 2 secondes après un délai de 1 seconde
   ----------------------- */
const timeline = gsap.timeline();

timeline.to("#js-exercise-5", {
  x: -100,
  duration: 3,
});

timeline.to("#js-exercise-5", {
  rotation: 45,
  duration: 2,
  delay: 1,
});

timeline.to("#js-exercise-5", {
  y: -100,
  duration: 2,
  delay: 1,
});

/* -----------------------
    Exercice 6 (timeline)
   -----------------------
    Déplacer l'item 6 de 100px vers le bas
    durant 3 secondes
    ET SIMULTANEMENT changer l'item 6 d'échelle (75%)
    durant 5 secondes
   ----------------------- */

/* -----------------------
    Exercice 7 (repeat + yoyo)
   -----------------------
    Effectuer une rotation de l'item 7 de 135 degrés
    durant 2 secondes
    avec un easing elastic.out
    et répéter ce mouvement à l'infini
   ----------------------- */

/* -----------------------
    Exercice 8
   -----------------------
    Réaliser une animation libre
    lorsque le bouton est cliqué
   ----------------------- */
