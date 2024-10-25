class libro {
    constructor(titulo,autor,numero) {
        this._titulo= titulo;
        this._autor= autor;   
        this._anio= numero;
    }
    mostrarInfo(){
        console.log(`${this._titulo} del autor ${this._autor}, publicado en el año ${this._anio}`);
    }
}
let libro1 = new libro('Percy Jackson y los dioses del Olimpo','Rick Riordan','2021');


libro1.mostrarInfo()