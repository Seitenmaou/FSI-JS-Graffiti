
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++)
{
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = "rotate(180deg)"
}

let dogNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogNames.length; i++)
{
    dogNames[i].style.textAlign = "left"
    dogNames[i].style.transform = "scale(1, 4)"
}

let footer = document.querySelector('.footer')
footer.style.color = 'green'
footer.style.borderStyle = 'solid'