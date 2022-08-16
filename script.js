const addnewwefield = () => {
    let newnode = document.createElement("textarea");
    newnode.classList.add("mt-2");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.setAttribute("row", 4);
    newnode.setAttribute("placeholder", "Enter Here")

    let weAddbtn = document.getElementById("weAddbtn");
    let we = document.getElementById("we");

    we.insertBefore(newnode, weAddbtn);

}


const AddNewAqField = () => {
    let newnode = document.createElement("textarea");
    newnode.classList.add("mt-2");
    newnode.classList.add("form-control");
    newnode.classList.add("eqfield");
    newnode.setAttribute("row", 4);
    newnode.setAttribute("placeholder", "Enter Here");

    let aqAddbtn = document.getElementById("aqAddbtn");
    let aq = document.getElementById("aq");
    aq.insertBefore(newnode, aqAddbtn)
}


const AddSkills = () => {
    let newnode = document.createElement("textarea");
    newnode.classList.add("mt-2");
    newnode.classList.add("form-control");
    newnode.classList.add("skillfield");
    newnode.setAttribute("row", 3);
    newnode.setAttribute("placeholder", "Enter Here");

    let skills = document.getElementById("skills");
    let skilladdbtn = document.getElementById("skillAddbtn");
    skills.insertBefore(newnode, skilladdbtn)
}
//genrate cv 

const generateCV = () => {
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("namet2");
    nameT1.innerHTML = namefield;
    nameT2.innerHTML = namefield;

    let contactfield = document.getElementById("contactfield").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactfield;

    let emailfield = document.getElementById("emailfield").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = emailfield;
  

    let addressfield = document.getElementById("addressfield").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressfield;

    let fbfield = document.getElementById("fbfield").value;
    let fbT = document.getElementById("fbT");

    fbT.setAttribute("href",fbfield)

    fbT.innerHTML=fbfield;

    let instafield = document.getElementById("instafield").value;
    let instaT = document.getElementById("instaT");
    instaT.setAttribute("href",instafield)
    

    instaT.innerHTML=instafield;

    let linkedfield = document.getElementById("linkedfield").value;
    let linkedidT= document.getElementById("linkedidT");
    linkedidT.setAttribute("href",linkedfield)

    linkedidT.innerHTML=linkedfield;

    let objectivefield = document.getElementById("objectivefield").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML= objectivefield;


    let skill =document.getElementsByClassName("skillfield");
    let str='';
    for(let e of skill){
        str= str + `<li> ${e.value} </li>`
    }
    document.getElementById("skillT").innerHTML=str;
    

    let wef =document.getElementsByClassName("wefield");
    let str2='';
    for(let e of wef){
        str2= str2 + `<li> ${e.value} </li>`
    }
    document.getElementById("weT").innerHTML=str2;




  

let aq =document.getElementsByClassName("eqfield");
let str1='';
for(let e of aq){
    str1= str1 + `<li> ${e.value} </li>`
}
document.getElementById("aqT").innerHTML=str1

    let cvtemplate = document.getElementById("cv-template");
    let cvform =document.getElementById("cv-form");
    cvform.style.display="none";
    cvtemplate.style.display="block"

//coding for setting image

let file= document.getElementById("imagefield").files[0];  

let reader = new FileReader();
reader.readAsDataURL(file);

//set the image to template

reader.onloadend = function(){
    document.getElementById("imageT").src = reader.result
}

}

const printCV=()=>{
    window.print()
}

let radio = document.getElementsByClassName("form-check-input")[0];
radio.addEventListener("click",function(){
    document.body.classList.toggle("bg-danger")

  
})
