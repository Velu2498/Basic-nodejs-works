function add(){
var a=document.getElementById("nam").value
var b=document.getElementById("age").value
var c=document.getElementById("con").value

var data={
    username:a,
    email:b,
    password:c
}
console.log(data)

var xhttp= new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert(JSON.parse(this.responseText).mess)
    }
};

xhttp.open("POST","http://localhost:3000/data");

xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");

xhttp.send(JSON.stringify(data))


}

