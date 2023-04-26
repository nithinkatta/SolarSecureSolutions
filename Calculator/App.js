function fun(val)
{
    document.getElementById('result').value += val;
}
function clr()
{
    document.getElementById('result').value = ""
}
function solve()
{
    var x = document.getElementById('result').value
    document.getElementById('result').value = eval(x)
}