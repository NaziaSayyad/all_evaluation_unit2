// All the Code for the Rejected page goes here

let rejected_data= JSON.parse(localStorage.getItem("admission-rejected"));

displayTable(rejected_data);

function displayTable(rejected_data){
    document.querySelector("tbody").innerHTML="";
   rejected_data. forEach (function  (ele){
    let tr= document.createElement("tr");

    let td1= document.createElement("td");
    td1.innerText=ele.name;

    let td2 = document.createElement("td");
    td2.innerText=ele.email;

    
    let td3 = document.createElement("td");
    td3.innerText = ele.course;
    
    let td4 = document.createElement("td");
    td4.innerText= ele.gender;

    let td5 = document.createElement("td");
    td5.innerText=ele.ph_nu;



    
    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);
    
});
}
