// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('button').forEach(function(button) {
//         button.onclick = function() {
//             document.querySelector('#hello').style.color = button.dataset.color;
//         }
//     })
// })

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select').onchange = function() {
        document.querySelector('#hello').style.color = this.value;
    }
})