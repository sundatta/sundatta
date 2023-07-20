const menuIcon = document.getElementById("menu-icon")
const menu = document.getElementById("menu")

menuIcon.addEventListener("click", ()=>{
    if(menu.className === 'hiddien'){
        menu.classList.remove('hiddien');
    }else{
        menu.classList.add('hiddien');
    }
}); 