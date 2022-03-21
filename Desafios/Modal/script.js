const buttonOpen = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpen.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {

    if(event.key  === 'Escape') {
        modalWrapper.classList.add('invisible')
    }
})
