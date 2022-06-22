// All the Code for All Students Page Goes Here
let datafromLs = JSON.parse(localStorage.getItem("admission"))|| [];

document.querySelector("#filter").addEventListener("change",handelfilter)

function handelfilter(){
    let selector= document.querySelector("#filter").value;
    let filtered_list=datafromLs.filter(function (elem){
           return elem.course==selector;
        });
        console.log(filtered_list)
    displayTable(filtered_list)
}


displayTable(datafromLs);

function displayTable(datafromLs){
    document.querySelector("tbody").innerHTML=""
    datafromLs. forEach (function  (ele, index){
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


    let td6 = document.createElement("td");
        td6.innerText = "Admitted";
        td6.style.cursor="pointer";
        td6.style.backgroundColor="lightgreen";
        td6.style.fontWeight="bold";
        td6.addEventListener("click", function (){
            admit(ele);
        })


    let td7 = document.createElement("td");
    td7.innerText = "Rejected";
    td7.style.cursor="pointer";
    td7.style.backgroundColor="red";
    td7.style.color="white";
    td7.style.fontWeight="bold";
    td7.addEventListener("click", function (){
        delete_stud(index);
    })

    
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(tr);
    
});
}
let add_accet_arr=JSON.parse(localStorage.getItem("admission-accepted"))||[];


function admit(element){
    add_accet_arr.push(element);
localStorage.setItem("admission-accepted",JSON.stringify(add_accet_arr));

}

function delete_stud(index){
console.log("in the function")

     datafromLs.splice( index, 1);
     displayTable(datafromLs)
    localStorage.setItem("admission-rejected",JSON.stringify(datafromLs));
     window.location.reload();

}
