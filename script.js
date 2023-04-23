document.querySelector('#football').addEventListener('click', function(e){
    document.getElementById('fb').innerText = ('football is clicked')

const target = e.target;

if(target.matches('li')){
    target.style.backgroundColor = 'black'; 
    target.style.color = 'white'
}

})

document.querySelector('#basketball').addEventListener('click', function(e){
    document.getElementById('bb').innerText = ('Basketball is clicked')


const target = e.target;

if(target.matches('li')){
    target.style.backgroundColor = 'black'; 
    target.style.color = 'white'
}

})

document.querySelector('#boxing').addEventListener('click', function(e){
    document.getElementById('b').innerText = ('Boxing is clicked')


const target = e.target;

if(target.matches('li')){
    target.style.backgroundColor = 'black'; 
    target.style.color = 'white'
}

})

document.querySelector('#tennis').addEventListener('click', function(e){
    document.getElementById('t').innerText = ('tennis is clicked')


const target = e.target;

if(target.matches('li')){
    target.style.backgroundColor = 'black'; 
    target.style.color = 'white'
}

})