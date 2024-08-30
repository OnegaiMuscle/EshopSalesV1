

fetch('https://api.ec.nintendo.com/v1/price?country=FR&lang=fr&ids=70010000057981')
.then( response => response.json())
.then( data => console.log(data));

(async () => {
  const response = await fetch('https://api.ec.nintendo.com/v1/price?country=FR&lang=fr&ids=70010000057981');
  const data = await response.text();
  console.log(data);
  })();

