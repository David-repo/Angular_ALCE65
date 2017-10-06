class Libro {

    constructor (titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroTecnico extends Libro {
    constructor (titulo, autor, tema) {
        super(titulo, autor);
        this.tema = tema;
    }

    nostraLibro() {

    }
}

oLibro = new LibroTecnico ("Angular JS","Pepe", "Programacion")

// 
oLibro.precio = 33;

console.dir(oLibro)