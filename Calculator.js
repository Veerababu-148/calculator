function number(num){
    var result=document.getElementById("input");
    result.value += num;

}
function result(){
    var result=document.getElementById("input");
    result.value=eval(result.value)
}
function clr(){
    var result=document.getElementById("input");
    result.value="";
}
function backspace(){
    var number=document.getElementById("input");
    var remove=number.value;
    remove=remove.slice(0,-1);

    number.value=remove;
}
