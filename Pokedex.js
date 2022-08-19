function Pokemon(nombre, nickname, tipo, debilidad, ataques){
    this.nombre = nombre;
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad;
    this.ataques = ataques;
}
function TipoFuego(nombre, apellido, tipo){
    debilidad = "Roca, Agua, Tierra.";
    ataques = "Ascuas, Colmillo ígneo, Giro fuego, Lanzallamas, Llamarada, Nitrocarga, Onda ígnea, Pirotecnia, Puño fuego.";
    Pokemon.call(this, nombre, apellido, tipo, debilidad , ataques);
}

function TipoAgua(nombre, apellido, tipo){
    debilidad = "Agua, Dragón, Planta.";
    ataques = "Burbuja, Pistola de agua, Salpicadura ,Acua Jet, Acua Cola, Escaldar, Hidrobomba, Hidropulso, Rayo burbuja, Salmuera.";
    Pokemon.call(this, nombre, apellido, tipo, debilidad, ataques);
}

function TipoTierra(nombre, apellido, tipo){
    debilidad = "Agua, Hierba, Hielo.";
    ataques = "Hueso Palo, Terratemblor, Taladradora, Terremoto, Bofetón Lodo, Tierra Viva y Disparo Lodo.";
    Pokemon.call(this, nombre, apellido, tipo, debilidad, ataques);
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor = TipoFuego;

TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype.constructor = TipoAgua;

TipoTierra.prototype = Object.create(Pokemon.prototype);
TipoTierra.prototype.constructor = TipoTierra;

console.log(TipoFuego.prototype);
console.log(TipoAgua.prototype);
console.log(TipoTierra.prototype);
const charizard = new TipoFuego("Charizard","Drago","Fuego");
const Piplot = new TipoAgua("Piplot","Pi","Agua");
const Krokorok = new TipoTierra("Krokorok","krok","Tierra");

console.log(charizard)
console.log(Piplot)
console.log(Krokorok)