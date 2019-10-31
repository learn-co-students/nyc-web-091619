let api = "http://localhost:3000/halloweenJoke"


// Should fetch all of our celebrities and append them to the page
let fetchCall = function () {
}

fetchCall()

function clickHandler(e) {
    let parent = e.target.parentNode.querySelector("h4 span")
    let num = parseInt(parent.innerText)
    num++
    parent.innerText = num
}

let parentUl = document.getElementsByTagName("ul")[0]

function addCelebrity(element) {
    let li = document.createElement("li")
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let img = document.createElement("img")
    let buttonUp = document.createElement("button")
    let buttonDown = document.createElement("button")
    let deleteButton = document.createElement("button")
    h3.innerText = `${element.name}`
    h4.innerHTML = "Score: <span>0</span>"
    img.src = `${element.image}`
    buttonUp.innerText = "Up Vote"
    buttonUp.className = "upButton"
    buttonUp.dataset.action = "increase"
    buttonUp.dataset.celeb = element.name.toLowerCase()
    buttonDown.innerText = "Down Vote"
    buttonDown.className = "downButton"
    deleteButton.innerText = "X"

    li.appendChild(h3)
    li.appendChild(h4)
    li.appendChild(img)
    li.appendChild(buttonUp)
    li.appendChild(buttonDown)
    li.appendChild(deleteButton)

    parentUl.appendChild(li)


}


let celebrityContainer = document.getElementById("image-container")

celebrityContainer.addEventListener("click", function (e) {
    e.stopPropagation()

    if (e.target.dataset.action === "increase") {
        clickHandler(e)
    } else if (e.target.innerText === "X") {
        console.log("clicking on X")
        e.target.parentNode.remove()
    }
})

let addButton = document.getElementsByTagName("BUTTON")[0]

addButton.addEventListener("click", function (e) {
    e.stopPropagation()
    let oldChild = e.target
    console.log("old child: ", oldChild)
    let form = document.createElement("form")
    form.innerHTML = '<input type="text" placeholder="enter name" data-id="name"/><input type = "text" placeholder="enter image" data-id="image"/><input type="submit" value="Add Celeb" />'

    console.log("parent: ", e.target.parentNode)
    e.target.parentNode.replaceChild(form, oldChild)

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = e.target[0].value
        let image = e.target[1].value
        console.log(name)

        let obj = {
            name: name,
            image: image
        }
        addCelebrity(obj)
        form.reset()

    })

})
