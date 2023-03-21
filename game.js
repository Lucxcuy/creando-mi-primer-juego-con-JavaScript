const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);
    elementsSize = canvasSize / 10 - 6;
    startGame();
}

function startGame() {
    console.log({ canvasSize, elementsSize });

    game.font = elementsSize + "px Verdana";
    game.textAlign = "center";

    const map = maps[0];
    const mapRows = map.trim().split("\n"); //split crea un array a partir de un string, en este caso cada vez que haya un salto de línea y Trim borra espacios en blanco innecesarios
    const mapAll = mapRows.map((row) => row.trim().split("")); //esto es un array ya, donde puedo acceder a todos los elementos
    console.log({ map, mapRows, mapAll });

    mapAll.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            game.fillText(emoji, posX, posY);
        });
    }); // acá estamos recorriendo con foreach el array bidimensional a partir del string de nuestro mapa, y a partir del foreach estamos recibiendo dos parámetros que son la fila como tal, el array como tal y el indice de cada una de nuestras filas. a partir de esto estamos recorriendo este último array de filas para encontrar cada una de las columnas de cada fila y al índice de cada columna.
    //Des´pues sacamos el emoji y las posiciones en X e Y las multiplicamos por el índice de cada elemento mas 1 porque debemos empezar en el indice 1 no el 0 pq sino los elementos se van a salir del canvas.

    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 1; col <= 10; col++) {
    //         game.fillText(
    //             emojis[mapAll[row - 1][col - 1]],
    //             elementsSize * col,
    //             elementsSize * row
    //         );
    //     }
    // } aca tambien podemos hacer el mapa pero es mas engorroso

    //window.innerHeight; //tamaño de la pantalla para responsive
    //window.innerWidth; //tamaño de la pantalla para responsive

    // game.fillRect(0, 50, 100, 100); //creador de rectangulos
    // game.clearRect(0, 0, 50, 50); //borrador de rectangulos

    // game.font = "25px Verdana"; //modificar el fillText
    // game.fillStyle = "purple"; //modificar el fillText
    // game.textAlign = "end"; //modificar el fillText de manera que respete las medidas de el fillText
    // game.fillText("Platzi", 50, 50); //agregar texto y ubicacion
}
