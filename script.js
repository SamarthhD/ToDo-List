let globalId=1;// setting id to each todo
function markAsDone(toDoid){
    const parent=document.getElementById(toDoid);
    parent.children[2].innerHTML="done";//accessing the markasdone button
}
function editTask(toDoid){//function to edit task
    const edit=document.getElementById(toDoid);
    const newTitle=prompt("new title:",edit.children[0].innerHTML);
    const newDescription=prompt("new description",edit.children[1].innerHTML);
    if (newTitle !== null && newDescription !== null) {
        edit.children[0].innerHTML = newTitle;
        edit.children[1].innerHTML = newDescription;
    }


}

function deleteTask(toDoid){//function to delete task
    const deleteDiv = document.getElementById(toDoid);
    if (confirm("Are you sure you want to delete this task?")) {
        deleteDiv.remove();
    }
}


function createChild(title,description,id){
    const child=document.createElement("div");
    const grandChild1=document.createElement("div");
    grandChild1.innerHTML=title;
    const grandChild2=document.createElement("div");
    grandChild2.innerHTML=description;
    const grandChild3=document.createElement("button");
    grandChild3.innerHTML="mark as done";
    grandChild3.setAttribute("onclick",`markAsDone(${id})`);
    const grandChild4=document.createElement("button");
    grandChild4.innerHTML="edit task";
    grandChild4.setAttribute("onclick",`editTask(${id})`);
    const grandChild5=document.createElement("button");
    grandChild5.innerHTML="delete task";
    grandChild5.setAttribute("onclick",`deleteTask(${id})`);
    child.append(grandChild1);
    child.append(grandChild2);
    child.append(grandChild3);
    child.append(grandChild4);
    child.append(grandChild5);
    child.setAttribute("id",id);
    return child;            
}
function toDo(){
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    const parent=document.getElementById("container");
    parent.appendChild(createChild(title,description,globalId++));
    
}