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
    const rows = document.querySelectorAll('.row')

    if(rows.length > 0){
        for(let i = 0; i < rows.length; i++){
            container.removeChild(rows[i])
        }
    }

    for(let i = 0; i < size; i++){
        const row = document.createElement('div')
    
        for( let j = 0; j < size; j++){
            const square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
            square.addEventListener('mouseenter', sketch)
        }
        
        row.classList.add('row')
        
        container.appendChild(row)
    }
}

function checkResize(){
    clear()

    const resize = prompt("How many squares per side should the new grid be?")

    if (resize === undefined){
        // if the prompt is cancelled, we don't clear
        return;
    } else if (resize === null) {
        // if nothing is entered, we do default size
        generate(defaultSize)
    } else if(resize <= 0 || isNaN(resize)) {
        // if the given a negative, 0, or a non-number 
        // the grid will be the default size
        alert("Input must be a positive integer, default size generated.")
        generate(defaultSize)
        return // exits function
    } else {
        generate(resize)
    }
}

const container = document.querySelector('.container')
const defaultSize = 16

generate(defaultSize)

const clearButton = document.querySelector('button')

clearButton.addEventListener('click', checkResize)