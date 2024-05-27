document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

function showTab(event, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    var tabLinks = document.getElementsByClassName("tab");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}