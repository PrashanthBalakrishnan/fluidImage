const zoom = document.querySelector(".zoom")
const previews = document.querySelector(".images img")
const original = document.querySelector(".full-size")
const imgText = document.querySelector(".caption")


previews.array.forEach(previews => {
    previews.addEventListener('click', () => {
        zoom.classList.add('open');
    })

})