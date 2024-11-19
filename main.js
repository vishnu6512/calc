//function to display content
function displayContent(content){
    result.value+=content
}
//clear input
function calClear() {
    result.value=""
}

//result
function calEqual(){
    console.log(result);
    result.value=eval(result.value)
}
//backspace
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}