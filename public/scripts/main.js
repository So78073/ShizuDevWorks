const elements = document.querySelectorAll('.eggArea');
let egg = 0


document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('egg')) {
            egg += 1
            console.log('dentro');
            
            if (egg >= 7) {
                elements.forEach(element => {
                    element.style.display = 'block'; 
                });
            }
    
            if (egg >= 9) {
                elements.forEach(element => {
                    element.style.display = 'none'; 
                    egg = 0
                });
            }
        } 

        
    });