function sketch(){
    this.classList.add('sketched')
}

function clear(){
    const squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.classList.remove('sketched')
    })
}

function generate(size) {
    const squares = document.querySelectorAll('.square')

    if(squares.length > 0){
        for(let i = 0; i < squares.length; i++){
            grid.removeChild(squares[i])
        }
    }

    for( let i = 0; i < (size * size); i++){
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseenter', sketch)
            grid.appendChild(square)
    }
}

function checkResize(){
    const resize = prompt("How many squares per side should the new grid be? (Pick a number between 1-150)")
    
    if (resize === null){
        // if the prompt is cancelled, we don't clear
        return;
    } 
   
    clear()

    if (resize === "") {
        // if nothing is entered, we reset to the currentSize size

    } else if(resize <= 0 || isNaN(resize) || resize > 150) {
        // if the given a negative, 0, or a non-number 
        // the grid will be the default size
        alert("Input must be a positive integer under 150, default size generated.")
        currentSize = defaultSize
        return // exits function
    } else  if(resize <= 250){
        currentSize = resize
    }
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 3vh)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 3vw)`
    generate(currentSize)
}

const grid = document.querySelector('.grid')
const defaultSize = 16
let currentSize = defaultSize;

generate(defaultSize)

const clearButton = document.querySelector('button')

clearButton.addEventListener('click', checkResize)