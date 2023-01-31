console.log("TEST");

// creo variabile con il prezzo del biglietto al km
const prezzoAlKm = 0.21;

// Inserisco data richiesta acquisto biglietto
const today = new Date();
console.log("Data:", today);
// chiedo nome all'utente
let name = prompt("Inserisci il tuo Nome");
console.log("Nome:", name);

// chiedo cognome all'utente
let surname = prompt("Inserisci il tuo Cognome");
console.log("Cognome:", surname);

// chiedo l'anno di nascita all'utente
let birdht = parseInt(prompt("Inserisci la tua età"));
console.log("Anni:", birdht);

// chiedo all'utente quanti km vuole percorrere
let travel = parseFloat(prompt("Quanti km sarà lungo il tuo viaggio?"));
console.log("Lunghezza viaggio in km:", travel);

// calcolo il costo del viaggio a prezzo pieno
let travelFull = parseFloat(prezzoAlKm * travel);
console.log("Il costo del biglietto è di €", travelFull.toFixed(2));

// calcolo il costo del viaggio per i minorenni (-20%)
let discountYoung = parseFloat([(travelFull / 100) * 20] - travelFull);
let travelYoung = parseFloat(discountYoung * -1);
console.log(
  "Con lo sconto del 20% riservato agli under 18 il costo del tuo biglietto è di €",
  travelYoung.toFixed(2)
);

// Calcolo il costo del viaggio per gli over 65 (-40%)
let discountOlder = parseFloat([(travelFull / 100) * 40] - travelFull);
let travelOlder = parseFloat(discountOlder * -1);
console.log(
  "Con lo sconto del 40% riservato agli over 65 il costo del tuo biglietto è di €",
  travelOlder.toFixed(2)
);

// emetto biglitto in base all'età
if (birdht < 18) {
  console.log(
    "Hai diritto allo sconto del 20% risersato agli under 18, il costo finale del tuo biglietto è di €",
    travelYoung.toFixed(2)
  );
} else if (birdht >= 65) {
  console.log(
    "Hai diritto allo sconto del 40% risersato aggli over 65, il costo finale del tuo biglietto è di €",
    travelOlder.toFixed(2)
  );
} else {
  console.log("Il prezzo del tuo biglietto è di €", travelFull.toFixed(2));
}
