function Pokemon(nickname, tipo){
    this.nickname = nickname;
    this.tipo = tipo;

}
function TipoFuego( nickname, tipo){
    Pokemon.call(this, nickname, tipo);
}
function Tipoagua( nickname, tipo){
    Pokemon.call(this, nickname, tipo);
}
function TipoDragon( nickname, tipo){
    Pokemon.call(this, nickname, tipo);
}
TipoFuego.prototype = Object.create(Pokemon.prototype)
TipoFuego.prototype.constructor = TipoFuego;
TipoFuego.prototype.debilidades = function(){
    return {
        debilidades: "agua, tierra",
    }
}


Tipoagua.prototype = Object.create(Pokemon.prototype)
Tipoagua.prototype.constructor = Tipoagua;
Tipoagua.prototype.debilidades = function(){
    return {
        debilidades: "planta, dragon",
    }
}

TipoDragon.prototype = Object.create(Pokemon.prototype)
TipoDragon.prototype.constructor = TipoDragon;
TipoDragon.prototype.debilidades = function(){
    return {
        debilidades: "hada, dragon, acero",
    }
}


const charizard = new TipoFuego("charizard", "fuego")
console.log(charizard)
console.log(charizard.debilidades());


const blastoise = new Tipoagua("blastoise", "agua");
console.log(blastoise);
console.log(blastoise.debilidades());

const dragonite = new TipoDragon("dragonite", "dragon");
console.log(dragonite);
console.log(dragonite.debilidades());
