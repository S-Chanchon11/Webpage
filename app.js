document.write("<h1>External part</h1>")

//alert("Welcome")

const title = document.getElementById('title')
const content = document.querySelector('.content')
const menu = document.getElementById('menu')
const item = document.getElementById('item-2');
const bg_color = document.querySelector('.bg_color')
const box = document.getElementById('box')
function print(){
    let name="Body"
    document.write(name)
    document.write(typeof(a))

}

function print_title(){
    title.style.color="blue"
    //title.style.backgroundColor='black'
    title.style.fontSize="50px"
    content.setAttribute('class','art')

}

function daytime(){
    bg_color.setAttribute('class','light_text')
}
function nighttime(){
    bg_color.setAttribute('class','dark_text')
}

function switchMode(){
    box.classList.toggle("darkMode")
}


function deleteItem(x){
    menu.removeChild(item);

}

function highlight(x){
    x.style.background="aqua"
}
function unhighlight(x){
    x.style.background="white"
}
