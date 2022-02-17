let counter=0;

function count(){
    counter++;
    // alert(counter);
    document.querySelector('h1').innerHTML=counter;
    if (counter%2===1){
        alert(`ODD: counter is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick=count;
    // document.querySelector('button').addEventListener('click', count);
})

