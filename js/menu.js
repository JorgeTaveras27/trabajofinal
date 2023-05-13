const hamburguer = document.querySelector('.hambuerguer')
const menu = document.querySelector('.hambuerger')

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})



window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target !=menu && e.target != hamburguer){

        menu.classList.toggle("spread")
    }
})