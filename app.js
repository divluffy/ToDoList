let container = document.querySelector('.container')
let header = document.querySelector('header')
let addNote = document.querySelector('.card-h')
let input = document.querySelector('.input')
let svg2 = document.querySelector('.svg2')


////////////////////////////////////./////////////////


function forReload(){
 container.innerHTML='' //for refresh
//ssave in localStorage
let saved =[]
if(localStorage.cardsave){
    let fromstorge = JSON.parse(localStorage.getItem('cardsave'))

    saved = fromstorge //add old array here for if we add else he will push with old array
 
    fromstorge.forEach((el,index) => {
        createCard(fromstorge[index],index)
        
    });
}

// add note 
addNote.onclick = ()=>{
    header.classList.add('active')
    input.value =''
}
svg2.onclick = ()=>{

 header.classList.remove('active')
    if(input.value){
     createCard(input.value)
    saved.push(input.value)
    let tosfy = JSON.stringify(saved)
    localStorage.setItem('cardsave', tosfy)

    }else{
        addNote


    }
}

//for create card for notes
function createCard(text,index){

let divMain = document.createElement('div')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let div6 = document.createElement('div')

container.appendChild(divMain)
divMain.appendChild(div1)
divMain.appendChild(div2)
divMain.appendChild(div3)
divMain.appendChild(div4)
divMain.appendChild(div5)
divMain.appendChild(div6)


divMain.classList = "card"
div1.classList = 'stute'
div2.classList = 'note'
div3.classList = 'done active'
div4.classList = 'not'
div5.classList = 'edit'
div6.classList = 'delete'

div1.setAttribute('onclick',`deletedone(${index})`)
div6.setAttribute('onclick',`deletetest(${index})`)

div1.innerHTML = ` <input type="checkbox" class="stute-do">`
div2.innerHTML = ` <textarea disabled>${text}</textarea>`
div3.innerHTML =`done/not`
div4.innerHTML =`not yet`
div5.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>`
div6.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>`

}
}
forReload()




//if click stute done

function deletedone(index){
setTimeout(()=>{
    let fromstorge = localStorage.getItem('cardsave')
    saved = JSON.parse(fromstorge)//call agin here
    saved.splice(index,1)//for remove out
    localStorage.setItem('cardsave', JSON.stringify(saved))//for sace array without the last remove
    console.log(index)
    forReload()
},1000)
}


//delete from local storge
function deletetest(index){
    let fromstorge = localStorage.getItem('cardsave')
    saved = JSON.parse(fromstorge)//call agin here
    saved.splice(index,1)//for remove out

    localStorage.setItem('cardsave', JSON.stringify(saved))//for sace array without the last remove
    console.log(index)

    forReload()
}
