// fill in javascript code here
document.querySelector('form').addEventListener("submit",myfun);

function myfun(event){
    event.preventDefault();
 let emp_name = document.querySelector("#name").value;
 let emp_id=document.querySelector("#employeeID").value;
 let dept= document.querySelector("#department").value;
 let exper=document.querySelector("#exp").value;
 let mail=document.querySelector("#email").value;
 let mob_nu= document.querySelector("#mbl").value;

 console.log(emp_name,emp_id,dept,exper,mail,mob_nu);

let tr= document.createElement("tr");

let td1= document.createElement("td");
    td1.innerText=emp_name;
let td2= document.createElement("td");
    td2.innerText=emp_id;
let td3= document.createElement("td");
    td3.innerText=dept;
let td4= document.createElement("td");
       td4.innerText=exper;
    
let td5=document.createElement("td");
    td5.innerText=mail;
let td6 = document.createElement("td");
    td6.innerText=mob_nu;
let td7=document.createElement("td");
    if(exper>5){
        td7.innerText="Senior"
    }
    else if(exper>2 && exper<5){
        td7.innerText="Junior";
    }
    else if(exper<=1){
        td7.innerText="Frresher"
    }
let td8= document.createElement("td");
    td8.innerText="Delete";
    td8.style.backgroundColor="red";
    td8.style.color="white";
    
    td8.style.cursor="pointer";
    td8.addEventListener("click",deleterow);


tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
document.querySelector("tbody").append(tr);

}
function deleterow(event){
    event.target.parentNode.remove();
}