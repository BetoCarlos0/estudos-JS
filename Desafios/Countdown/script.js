let days    = document.getElementById('days')
let hours   = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let openModal = document.getElementById('openModal')

let modal = document.getElementById('modal')
let closeModal = document.getElementById('close')

closeModal.addEventListener('click', function(){
    modal.classList.remove('backModal')
})

openModal.addEventListener('click', function(){
    modal.classList.add('backModal')
})



let sec = 28
let min = 44
let hou = 12
let day = 8

day < 10 ? days.innerHTML = '0' + day    : days.innerHTML = day
hou < 10 ? hours.innerHTML = '0' + hou   : hours.innerHTML = hou
min < 10 ? minutes.innerHTML = '0' + min : minutes.innerHTML = min
sec < 10 ? seconds.innerHTML = '0' + sec : seconds.innerHTML = sec

function myTimer(){

    if(sec >= 10) seconds.innerHTML = sec

    else if(sec < 10 && sec >= 0) seconds.innerHTML = "0"+ sec

    else if(sec == -1){
        sec = 59
        seconds.innerHTML = sec

        if(sec == 59){
            --min
            if(min >= 10) minutes.innerHTML = min
            if(min < 10 && min >= 0) minutes.innerHTML = '0'+ min

            if(min == -1){
                min = 59
                minutes.innerHTML = min

                if(min == 59){
                    --hou
                    if(hou >= 10) hours.innerHTML = hou
                    if(hou < 10 && hou >= 0) hours.innerHTML = '0'+ hou

                    if(hou == -1){
                        hou = 23
                        hours.innerHTML = hou

                        if(hou == 23){
                            --day
                            if(day > 10) days.innerHTML = day
                            if(day <= 10 && day >= 0) days.innerHTML = '0'+ day
                            if(day == -1){
                                days.innerHTML    = '0'+0
                                hours.innerHTML   = '0'+0
                                minutes.innerHTML = '0'+0
                                seconds.innerHTML = '0'+0
                                clearTimeout(time)
                            }
                        }
                    } 
                }
            }
        }
    }
    --sec
}

let time = setInterval(myTimer, 1000);
