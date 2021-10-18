let viewportSize = window.innerWidth
console.log(viewportSize)

const shareBtn = document.getElementById('shareBtn')
console.log(shareBtn)
const shareSection = document.getElementById('share')
const sharedBtnActive = document.getElementById("shareBtnActive")

const linksDesktop = document.querySelector('.links')
let shareMobile = function () {

    if (viewportSize <= 1044) {
        if (shareSection.style.display === 'none') {
            shareSection.style.display = 'flex'
        } else {
            shareSection.style.display = 'none'
        }
    } else {
        if (linksDesktop.style.display === 'none') {
            linksDesktop.style.display = 'flex'
        } else {
            linksDesktop.style.display = 'none'
        }
    }

}
shareBtn.addEventListener("click", shareMobile)
sharedBtnActive.addEventListener("click", shareMobile)

