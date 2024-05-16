const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.style.background = "#e5dcf5";
canvasRandom.style.background = '#e5dcf5';
canvasMultiple.style.background = '#e5dcf5';


class Circle {
    //Constructor que carga lo valores predeterminados del objeto
    constructor(x, y, radius, fillColor, borderColor, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
        this.text = text;
    }

    //Método para renderizar el objeto
    draw(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.fillColor;
        context.fill();

        context.lineWidth = 5;
        context.strokeStyle = this.borderColor;
        context.stroke();

        context.textAlign = "center"; // Alineación Horizontal
        context.textBaseline = "middle"; // Alineación Vertical
        context.font = "bold 20px cursive";
        context.fillStyle = 'white';
        context.fillText(this.text, this.posX, this.posY);

        context.closePath();
    }
}

const contextX = canvasOOP.width / 2;
const contextY = canvasOOP.height / 2;

let randomRadius = Math.floor(Math.random() * 100 + 30);
let miCirculo = new Circle(contextX, contextY, 45, 'blue', 'red', 'TEC');
miCirculo.draw(ctx);

let randomRadiu = Math.floor(Math.random() * 25 + 30); // Radio aleatorio entre 30 y 40
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'pink', 'purple', 'Random');
miCirculoRandom.draw(ctxRandom);
let arrayCircle = [];

for (let i = 0; i < 10; i++) {
    let randomRadius = Math.min(Math.random() * 10 + 30, Math.min(canvasMultiple.width, canvasMultiple.height) / 2);
    let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
    let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, 'yellow','violet', i + 1, 'CMult');

    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}