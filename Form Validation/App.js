function fun()
{
    var user = document.getElementById('username').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
    var rpass = document.getElementById('rpass').value

    checkUser(user)
    checkEmail(email)
    checkPass(pass)
    checkRpass(rpass,pass)
}
function checkUser(user)
{
    if(user.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('user_error').innerHTML=""
    }
    else 
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username').classList.replace('success','error')
        document.getElementById('user_error').innerText = 'Must contain 8 characters'
    }
}
function checkEmail(email)
{
    if(email.length > 7 && email.includes('@'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=""
    }
    else 
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email').classList.replace('success','error')
        document.getElementById('email_error').innerText = 'Must contain 8 characters, contain @gmail'
    }
}
function checkPass(pass){
    if(pass.length > 7)
    {
        document.getElementById('pass').classList.add('success')
        document.getElementById('pass').classList.replace('error','success')
        document.getElementById('pass_error').innerHTML=""
    }
    else 
    {
        document.getElementById('pass').classList.add('error')
        document.getElementById('pass').classList.replace('success','error')
        document.getElementById('pass_error').innerText = 'Must contain 8 characters'
    }
}
function checkRpass(rpass,pass)
{
    if(rpass == pass && rpass!="")
    {
        document.getElementById('rpass').classList.add('success')
        document.getElementById('rpass').classList.replace('error','success')
        document.getElementById('rpass_error').innerHTML=""
    }
    else 
    {
        document.getElementById('rpass').classList.add('error')
        document.getElementById('rpass').classList.replace('success','error')
        document.getElementById('rpass_error').innerText = 'Password mismatch'
    }
}