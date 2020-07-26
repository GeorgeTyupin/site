main = document.querySelectorAll('.main .col')

main.forEach(elem => {
    if (elem.dataset.visible == 'false') {
        
        elem.classList.add('sleep')
        console.log(elem.classList)
    }
});