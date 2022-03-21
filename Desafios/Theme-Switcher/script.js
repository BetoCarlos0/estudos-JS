let checkbox = document.getElementById('switch')

function setAttribute(theme){

    if(theme){
        document.body.style.backgroundColor = '#292C35'
        document.body.style.color = '#F1F1F1'
    }
    else{
        document.body.style.backgroundColor = '#F1F1F1'
        document.body.style.color = '#292C35'
    }
}

if(localStorage.getItem('theme')) {

    localStorage.getItem('theme') == 'false' ? check = false : check = true

    if(check){
        setAttribute(check)
        checkbox.setAttribute('checked', '')
    }else {
        setAttribute(check)
        checkbox.checked = false
    }
}

checkbox.onchange = function(){

    if(checkbox.checked) {
        setAttribute(checkbox.checked)
        localStorage.setItem('theme', checkbox.checked)
    }
    else{
        setAttribute(checkbox.checked)
        localStorage.setItem('theme', checkbox.checked)
    }
}