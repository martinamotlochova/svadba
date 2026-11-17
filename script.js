// Odpočet dní do svadby
// Mesiace v JavaScripte sa číslujú od 0, preto máj = 4.
const svadba = new Date(2027, 4, 15);

const dnes = new Date();
dnes.setHours(0, 0, 0, 0);

const MS_ZA_DEN = 1000 * 60 * 60 * 24;
const zostava = Math.max(0, Math.round((svadba - dnes) / MS_ZA_DEN));

document.getElementById('odpocet').textContent = zostava;
