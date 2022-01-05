const button = document.getElementById('openModal')

const modal = document.querySelector('modal-div')

button.onclick = function(){
    modal.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    console.log(event)
    const isESC = event.key === 'Escape'

    if(isESC) {
        modal.classList.add('invisible')
    }
})

