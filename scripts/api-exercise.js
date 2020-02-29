const baseURL = 'https://swapi.co/api/people/';

let peopleObj;
let prev;
let next;

function fetchUrl(url){   
    
    document.getElementById('peopleList').innerHTML = '';
    
    fetch(url)
    .then(response => response.json())
    .then(data => peopleObj = data)
    .then(peopleList => {
        
        peopleList.results.forEach(
            item => {
                let anchor = document.createElement('a');
                anchor.setAttribute('href', item.url);
                anchor.innerHTML += item.name;
                document.querySelector('#peopleList').appendChild(anchor);
                document.querySelector('#peopleList').innerHTML += '<br>';
            }
        );        
    });
}

function setButtons() {
    if (peopleObj){
        prev = peopleObj.previous;
        next = peopleObj.next;
    } else prev = '';
    

    
    console.log(peopleObj);
    
    
    document.getElementById('prev').onclick = function(){ fetchUrl(peopleObj.previous) };
    document.getElementById('next').onclick = function(){ fetchUrl(peopleObj.next) };
}

let url1 = '';


window.onload = function(){ 
    fetchUrl(baseURL);
    console.log(peopleObj);
    setButtons();
};




