const userUrl = 'https://api.github.com/search/users?q=octocat'
const repoUrl = 'https://api.github.com/users/octocat/repos'


function getUsers(user) {
    //fetch
    return fetch(`https://api.github.com/search/users?q=${user}`)
    .then(resp => resp.json())
    .then(json => json.message);
}

function getRepos(user) {
    //fetch onclick
    return fetch(`https://api.github.com/users/${user}/repos`)
    .then(resp => resp.json())
    .then(json => json);
}

function getRepos(user) {

    return fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(resp => resp.json())
    .then(json => json);
}

document.addEventListener('DOMContentLoaded', () =>  {
    //get event listener for the form submit
    document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault();
    })
    //get value of the text input
    let val = document.querySelector('#search').ariaValueMax;

    //call getUsers with value from text input
    getUsers(val).then (users => {
        //loop throgh
        users.forEach (user => {
            let element = document.createElement('li');
            element.innerHTML = user.login; //get user login key: value
            document.getElementById('user-list').appendChild(element);
        })
        element.addEventListener('click', (e) => {
            document.getElementById('repos-list').innerHTML = "";
            getRepos(user.login).then(repos => {
                repos.forEach(repo => {
                    let elementRepo = document.createElement('li');
                    elementRepo.innerHTML = repo.Url
                    document.getElementById('repos-list').appendChild(elementRepo);
                })
            })
        })
    
    })
}
)

document.querySelector('#search-repos').addEventListener('click', (e) =>  {
    e.preventDefault();
    let val = document.querySelector('#search').value;
}

//break the code into steps
//e.g. higher level objectives

// listen for form submit
//get the value of from text input
//reset the list

//then code!
//don't worry about the syntax until you've done the above! (syntax you can always research)