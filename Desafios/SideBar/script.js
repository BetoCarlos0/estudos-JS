const modal = document.getElementById('modal')
const logoVet = document.getElementById("logoVet")
const sInput = document.getElementById("input")

menu.addEventListener('click', () => {

    if(modal.classList.contains('sidebarOff')){
        modal.classList.remove('sidebarOff');
        modal.classList.add('sidebarOn');
        sInput.setAttribute('placeholder', 'Buscar')      
    }
    else{
        modal.classList.add('sidebarOff');
        modal.classList.remove('sidebarOn');

        sInput.setAttribute('placeholder', '')
    }
})