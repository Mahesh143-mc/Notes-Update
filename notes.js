const notesContainer= document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-boxs");

createbtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-boxs";
    inputBox.setAttribute("contenteditable","true");
    img.src="Pictures/trash-solid.svg";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName==="P")
    {
        notes=document.querySelectorAll(".input-box");
        updateStorage();
        notes.forEach(nt => {
            nt.onKeyup=function(){
                updateStorage();
            }
        });
    }
})

function updateStorage(){
    localStorage.setItem("notes",  notesContainer.innerHTML);
    
}

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

showNotes();