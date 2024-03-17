document.addEventListener("DOMContentLoaded", function() {
    var submenuTrigger = document.querySelectorAll('.submenu-trigger');

    submenuTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            var submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});