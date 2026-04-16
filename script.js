const hens = [
  {
    name: "Plymouth Rock",
    id: "plymouth-rock",
    calm: true,
    eggs: true,
    bigEggs: false,
    robust: true,
    food: false,
    family: true
  },
  {
    name: "Sundheimer",
    id: "sundheimer",
    calm: true,
    eggs: true,
    bigEggs: false,
    robust: false,
    food: false,
    family: true
  },
  {
    name: "Barnevelder",
      id: "barnevelder",
    calm: false,
    eggs: true,
    bigEggs: true,
    robust: true,
    food: true,
    family: false
  },
  {
    name: "Sussex",
    id: "sussex",
    calm: true,
    eggs: true,
    bigEggs: false,
    robust: true,
    food: false,
    family: true
  },
  {
    name: "Bielefelder Kennhuhn",
    id: "bielefelder",
    calm: true,
    eggs: true,
    bigEggs: false,
    robust: true,
    food: true,
    family: true
  },
  {
    name: "Brown Nick",
      id: "brown-nick",
    calm: true,
    eggs: true,
    bigEggs: false,
    robust: true,
    food: false,
    family: true
  }
];

function filterHens() {
  const calm = document.getElementById("calm").checked;
  const eggs = document.getElementById("eggs").checked;
  const bigEggs = document.getElementById("bigEggs").checked;
  const robust = document.getElementById("robust").checked;
  const food = document.getElementById("food").checked;
  const family = document.getElementById("family").checked;

  let filtered = hens;

  if (calm) filtered = filtered.filter(h => h.calm);
  if (eggs) filtered = filtered.filter(h => h.eggs);
  if (bigEggs) filtered = filtered.filter(h => h.bigEggs);
  if (robust) filtered = filtered.filter(h => h.robust);
  if (food) filtered = filtered.filter(h => h.food);
  if (family) filtered = filtered.filter(h => h.family);

  const resultDiv = document.getElementById("results");

  if (filtered.length === 0) {
    resultDiv.innerHTML = "<p>Keine passende Hühnerrasse gefunden.</p>";
    return;
  }

  results.innerHTML = filtered
  .map(h => `<p><a href="#${h.id}">${h.name}</a></p>`)
  .join("");
}