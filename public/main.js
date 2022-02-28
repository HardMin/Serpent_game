// 2022-02-26 19:22:03

const flechas = document.querySelectorAll('.flechas');
const root = document.querySelector('.root');
const X = document.querySelector('.X');
const Y = document.querySelector('.Y');
let y = 0;
let x = 0;
Y.innerHTML = `Y: ${y}`;
X.innerHTML = `X: ${x}`;
// root.style.cssText = `top:${up}px;`;
flechas.forEach((flech) => {
    flech.addEventListener('click', ()=>{
        const flAttr = flech.getAttribute('alt')
        // console.log(flAttr)
        switch(flAttr){
            case "up":
                if(y == 0 || y == "0"){
                    root.style.cssText = `top:${y}px;left:${x}px;`;
                }
                else{
                    root.style.cssText = `top:${y -= 10}px;left:${x}px;`;
                }
                break
            case "left":
                if(x == 0 || x == "0"){
                    root.style.cssText = `left:${x}px;top:${y}px;`;
                }
                else{
                    root.style.cssText = `left:${x -= 10}px;top:${y}px;`;
                }
                
                break
            case "right":
                if(x == 1050 || x == "1050"){
                    root.style.cssText = `left:${x}px;top:${y}px;`;
                }
                else{
                    root.style.cssText = `left:${x += 10}px;top:${y}px;`;
                }
                
                break
            case "down":
                if(y == 500 || y == "500"){
                    root.style.cssText = `top:${y}px;left:${x}px;`;
                }
                else{
                    root.style.cssText = `top:${y += 10}px;left:${x}px;`;
                }
                
                break
        }
        Y.innerHTML = `Y: ${y}`;
        X.innerHTML = `X: ${x}`;
    })
    
})
document.addEventListener('keydown', (tecla)=>{
    switch(tecla.key){
        case "ArrowUp":
            if(y == 0 || y == "0"){
                root.style.cssText = `top:${y}px;left:${x}px;`;
            }
            else{
                root.style.cssText = `top:${y -= 10}px;left:${x}px;`;
            }
            break
        case "ArrowLeft":
            if(x == 0 || x == "0"){
                root.style.cssText = `left:${x}px;top:${y}px;`;
            }
            else{
                root.style.cssText = `left:${x -= 10}px;top:${y}px;`;
            }
            
            break
        case "ArrowRight":
            if(x == 1050 || x == "1050"){
                root.style.cssText = `left:${x}px;top:${y}px;`;
            }
            else{
                root.style.cssText = `left:${x += 10}px;top:${y}px;`;
            }
            
            break
        case "ArrowDown":
            if(y == 500 || y == "500"){
                root.style.cssText = `top:${y}px;left:${x}px;`;
            }
            else{
                root.style.cssText = `top:${y += 10}px;left:${x}px;`;
            }
            
            break

    };
    Y.innerHTML = `Y: ${y}`;
    X.innerHTML = `X: ${x}`;
})