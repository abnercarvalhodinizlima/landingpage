const menuAdicionar = document.querySelector('.menu-adicionar'),
 closeAdicionar = document.querySelector('.close'),
 giveClass = document.querySelector('.site');
menuAdicionar.addEventListener('click', function() {
    giveClass.classList.toggle('showmenu')
})
closeAdicionar.addEventListener('click', function() {
    giveClass.classList.remove('showmenu')
})

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('this')

        }
    })
})
const boxEllist = document.querySelectorAll('.animate');
boxEllist.forEach((el) => {
    io.observe(el)
})