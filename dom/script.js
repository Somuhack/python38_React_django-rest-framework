  const box=document.getElementById("box")
  box.innerHTML="<h1>Hello Souvik</h1>"
  
  const mypara=document.createElement('p')
  mypara.textContent="This is a paragraph"
  mypara.style.color="yellow"
  mypara.style.backgroundColor="black"
  box.appendChild(mypara)
  
const mybtn = document.getElementById("btn")
mybtn.addEventListener("click",function(){
    box.style.color="green"
})
const body = document.body
function TheamChanger() {
    if( body.style.backgroundColor==="white"){
        body.style.backgroundColor="black"
        box.style.color="white"
    }
    else{
        body.style.backgroundColor="white"
         box.style.color="black"
        }
}