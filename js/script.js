

fetch('https://api.ec.nintendo.com/v1/price?country=FR&lang=fr&ids=70010000057981', {
  method: 'get',
  mode: 'cross-origin',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
.then( response => response.text())
.then( data => console.log(data));

(async () => {
  const response = await fetch('https://api.ec.nintendo.com/v1/price?country=FR&lang=fr&ids=70010000057981');
  const data = await response.text();
  console.log(data);
  })();


// cors restriction
