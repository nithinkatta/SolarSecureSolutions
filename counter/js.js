function incr()
{
    var x = Number(document.getElementById('Number').innerHTML)
    document.getElementById('Number').innerHTML = x+1
}
function decr()
{
    var x = Number(document.getElementById('Number').innerHTML)
    document.getElementById('Number').innerHTML = x-1
}
function neut()
{
    document.getElementById('Number').innerHTML = 0
}
