let userImg = document.querySelectorAll('img')
let userName = document.getElementById('name')
let userLoca = document.getElementById('location')

let projects = document.getElementById('repos')

function get(url) {
    let request = new XMLHttpRequest()
    request.open("get", url, false)
    request.send()
    return request.responseText
}
dataRepos = get('https://api.github.com/users/BetoCarlos0/repos')
dataUser = get('https://api.github.com/users/BetoCarlos0')

repos = JSON.parse(dataRepos);
user = JSON.parse(dataUser);


for (const i of userImg) {
    i.setAttribute('src', user.avatar_url)
}
userName.innerHTML = user.name
userLoca.innerHTML = user.location
let k = 0
let lang = []
for (const i of repos) {
    let desc = []

    if (i.description != null) {
        desc = i.description
        desc = desc.split(' ')
        desc.length = 20

        if (desc.length == 20) {
            desc[21] = '...'
        }
        desc = desc.join(' ')
    }
    else {
        desc = ''
    }

    div = document.createElement('div')
    span = document.createElement('span')
    p = document.createElement('p')

    projects.appendChild(div)
    div.setAttribute('class', 'card project')

    div.innerHTML = '<h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
    +
    '<p>' + i.name + '</p></h4>'
    +
    '<p>' + desc + '</p>'
    +
    '<div> <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <p>' + i.watchers + '</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg> <p>' + i.forks + '</p> </div> <p class="lang"><span class="language"></span>'+i.language+'</p> </div>'

}

lang = document.querySelectorAll(".lang")
language = document.querySelectorAll(".language")

lang.forEach((langs, i) => {
    if(langs.textContent == 'Python'){
        language[i].setAttribute('style', 'background-color: #3572A5;')
    }
    if(langs.textContent == 'C'){
        language[i].setAttribute('style', 'background-color: #555555;')
    }
    if(langs.textContent == 'C++'){
        language[i].setAttribute('style', 'background-color: #F34B7D;')
    }
    if(langs.textContent == 'C#'){
        language[i].setAttribute('style', 'background-color: #178600;')
    }
    if(langs.textContent == 'JavaScript'){
        language[i].setAttribute('style', 'background-color: #F1E05A;')
    }
    if(langs.textContent == 'HTML'){
        language[i].setAttribute('style', 'background-color: #E34C26;')
    }
    if(langs.textContent == 'TypeScript'){
        language[i].setAttribute('style', 'background-color: #2B7489;')
    }
})
