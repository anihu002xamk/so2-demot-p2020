const http = require("http");
const url = require("url");

const portti = 3001; //luo muuttujan portti jolle annetaan arvo 3001

const serveri = http.createServer((req, res) => { //luo muuttujan serveri jolle serveri luodaan

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query; // tietdot muuttuja
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //nimi muuttuja
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //kirjoittaa headerin ja antaa sille eri arvoja
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // kirjoittaa otsikon
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //kirjoittaa heippa tuntematon
        res.end(); // lopettaa kirjoituksen

    }

});

serveri.listen(portti, () => { // kuuntelee serverin päiviktyksiä
    console.log(`Palvelin käynnistyi porttiin ${portti}`);  //kirjoittaa consoliin lauseen ja portin numeron 3001 
});
