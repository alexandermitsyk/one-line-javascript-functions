const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');

getParameters("https://www.google.de/search?q=cars&start=40");
// Result: { q: 'cars', start: '40' }