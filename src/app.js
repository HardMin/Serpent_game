// 2022-02-26 19:22:03

const flechas = document.querySelectorAll('.flechas');
const root = document.querySelector('.root');
const X = document.querySelector('.X');
const Y = document.querySelector('.Y');

let y = 0;
let x = 0;

const widthSize = innerWidth;
const heightSize = innerHeight;

Y.innerHTML = `Y: ${y}`;
X.innerHTML = `X: ${x}`;

//manejador de movimientos
const ControlMov = (typeDir) => {
    console.log(typeDir)
    switch(typeDir){
        case "up":
        case "ArrowUp":
            if(y == 0){
                root.style.cssText = `top:${y}px;left:${x}px;`;
            }
            else{
                root.style.cssText = `top:${y -= 10}px;left:${x}px;`;
            };
            break;
        case "left":
        case "ArrowLeft":
            if(x == 0){
                root.style.cssText = `left:${x}px;top:${y}px;`;
            }
            else{
                root.style.cssText = `left:${x -= 10}px;top:${y}px;`;
            };
            break;
        case "right":
        case "ArrowRight":
            if(x >= widthSize - root.clientWidth){
                console.log(widthSize - rootSizeWidth)
                console.log("Limite")
                root.style.cssText = `left:${x}px;top:${y}px;`;
            }
            else{
                root.style.cssText = `left:${x += 10}px;top:${y}px;`;
            };
            break;
        case "down":
        case "ArrowDown":
            if(y >= heightSize - root.clientHeight){
                root.style.cssText = `top:${y}px;left:${x}px;`;
            }
            else{
                root.style.cssText = `top:${y += 10}px;left:${x}px;`;
            };
            break;
    };
    Y.innerHTML = `Y: ${y}`;
    X.innerHTML = `X: ${x}`;
};

//Manejo de las flechas
flechas.forEach((flech) => {
    flech.addEventListener('click', ()=>{
        const flAttr = flech.getAttribute('alt')
        ControlMov(flAttr);
    }); 
});
//Manejo de las flechas por teclado
document.addEventListener('keydown', (tecla)=>{
    ControlMov(tecla.key);
});