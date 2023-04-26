// We use jquery for this application

var c = 0

function fun()
{
    if(!c)
    {
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        c = 1
    }
    else
    {
        $('.maindiv').css('width','0')
        $('li').css('display','none')
        c = 0
    }
}