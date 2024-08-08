document.querySelector("#harav").addEventListener("mouseover", function(){
    this.style.color = "blue";
})
document.querySelector("#harav").addEventListener("mouseout", function(){
    this.style.color = "black";
})
document.addEventListener('DOMContentLoaded', function() {
    const audioLinks = document.querySelectorAll('.audio-link');
    const audioPlayer = document.getElementById('audio');
    
    audioLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const audioSrc = this.getAttribute('href');
            audioPlayer.setAttribute('src', audioSrc);
            audioPlayer.play();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var dropdown = document.querySelector('.nav-link.dropdown-toggle');
        var menu = document.querySelector('.dropdown-menu');

        dropdown.addEventListener('click', function (event) {
            event.preventDefault();
            menu.classList.toggle('show');
        });

        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    });


});