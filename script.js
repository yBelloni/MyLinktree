function lightMode() {
    let element = document.body;
    element.classList.toggle("light-mode");
    let btn = document.getElementById("btnLight")
    btn.classList.toggle("spanLight");
    var IconsLinks = document.getElementById("colorIcon1")
    IconsLinks.classList.toggle("toggleIcons");
    var IconsLinks = document.getElementById("colorIcon2")
    IconsLinks.classList.toggle("toggleIcons");
    var IconsLinks = document.getElementById("colorIcon3")
    IconsLinks.classList.toggle("toggleIcons");
    var IconsLinks = document.getElementById("colorIcon4")
    IconsLinks.classList.toggle("toggleIcons");
    var IconsLinks = document.getElementById("colorIcon5")
    IconsLinks.classList.toggle("toggleIcons");
}
