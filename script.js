
let ulRepos = document.getElementById('ul-repos');

fetch('https://api.github.com/users/treox/repos')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

    for (i=0; i<data.length; i++) {
        let list = document.createElement('li');
        list.innerHTML = data[i].name;
        ulRepos.appendChild(list);

    }
    })
    .catch(function(err) {
        console.log(JSON.stringify(err));
    });
