



let boutonCalcul = document.getElementById("boutonCalcul");

boutonCalcul.addEventListener("click", function (event) {
  event.preventDefault();
  let motUtilisateur = document.getElementById("motUtilisateur");
  let nombreLettres = motUtilisateur.value;
  document.getElementById("resultat").innerHTML = 
  `Votre mot fait ${nombreLettres.length} lettres de long !`;
});
