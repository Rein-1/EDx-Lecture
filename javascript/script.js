// let counter = 0;

// function count() {
//     counter++;
//     document.querySelector('h1').innerHTML = counter;
    
//     if (counter % 10 === 0) {
//         alert(`Count is now at ${counter}`)
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').onclick = count;
    
//     // Set an interval to take an argument to be run
//     setInterval(count, 1000);
// })


// Check if there is alreadu a value in local storage
if (!localStorage.getItem('counter')) {

    // If not, set the counter to 0 in local storage
    localStorage.setItem('counter', 0);
}

function count() {
    // Retrieve counter value from local storage
    let counter = localStorage.getItem('counter');

    // Update counter
    counter++;
    document.querySelector('h1').innerHTML = counter;

    // Store counter in local storage
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function() {
    // Set heading to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hi, ${name}`);
    };
});