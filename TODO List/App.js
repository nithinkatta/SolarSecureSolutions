function fun()
{
    var list_item = document.getElementById("list_item").value;
    var mytodo = document.getElementById("mytodo");

    var div = document.createElement("div");
    var li = document.createElement("li");
    li.innerText = list_item;

    var i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-trash-alt");

    div.appendChild(li);
    div.appendChild(i);

    mytodo.appendChild(div);
}
var mytodo = document.getElementById("mytodo");
mytodo.addEventListener("click",deleteItem);

function deleteItem(e)
{
    const element = e.target;
    if(element.classList[0]=="fa")
    {
        element.parentElement.remove();
    }
}