let button=document.querySelector('button')
button.addEventListener('click',convert)
function convert(){
    let a=document.getElementById('num1')
    let b=Number(a.options[a.selectedIndex].value)
    let c=document.getElementById('num2')
    let d=Number(c.options[c.selectedIndex].value)
    let e=document.getElementById('input')
    let f=e.options[e.selectedIndex].value
    let result=document.getElementById('result')
    let k
    switch(f){
        case '+':
            k=b+d
            break
        case '-':
            k=b-d
            break
        case '*':
            k=b*d
            break
        case '/':
            k=b/d
            break
        default:
            k='invalid operator'
    }
    result.innerHTML= k
}
























