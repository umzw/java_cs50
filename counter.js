// let counter=0;
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter',0);
}

function count(){
    let counter=localStorage.getItem('counter');
    counter++;
    // alert(counter);
    document.querySelector('h1').innerHTML=counter;
    // if (counter%15===1){
    //     alert(`ODD: counter is now ${counter}`);
    // }

    localStorage.setItem('counter',counter);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML=localStorage.getItem('counter');
    document.querySelector('button').onclick=count;
    // document.querySelector('button').addEventListener('click', count);

    // setInterval(count,1000)
})

