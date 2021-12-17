



const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.animated-icon1').classList.toggle('open');
    });
    document.querySelector('.second-button').addEventListener('click', function () {
    
    document.querySelector('.animated-icon2').classList.toggle('open');
    });
    document.querySelector('.third-button').addEventListener('click', function () {
    
    document.querySelector('.animated-icon3').classList.toggle('open');
    });
    