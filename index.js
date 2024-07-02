let container=document.createElement("div");
container.classList.add("container");
container.style.backgroundColor="aqua";
container.style.width="500px";
container.style.height="400px";
container.style.borderRadius="5px";
container.style.boxShadow="0 2px 5px silver";
document.body.appendChild(container);
let head=document.createElement("h3");
head.textContent="Temperatue Convert Using only JS";
head.style.fontStyle="calibri";
head.style.textAlign="center";
container.appendChild(head);


let divc=document.createElement("div");
divc.classList.add("celcont");
divc.style.marginLeft="80px";
divc.style.marginBottom="40px";
let lab=document.createElement("label");
lab.setAttribute("for","Celcius");
lab.textContent="Celcius";
let inputc=document.createElement("input");
inputc.classList.add("celinput");
inputc.setAttribute("type","number");
inputc.style.cursor="pointer";

inputc.style.marginLeft="30px";
container.appendChild(divc);
divc.appendChild(lab);
divc.appendChild(inputc);


let divk=document.createElement("div");
divk.classList.add("kelcont");
divk.style.marginLeft="80px";
divk.style.marginBottom="40px";
let labk=document.createElement("label");
labk.setAttribute("for","Kelvin");
labk.textContent="Kelvin";
let inputk=document.createElement("input");
inputk.classList.add("kelinput");
inputk.setAttribute("onchange","temp()");
inputk.setAttribute("type","number");
inputk.style.marginLeft="30px";

container.appendChild(divk);
divk.appendChild(labk);
divk.appendChild(inputk);



let divf=document.createElement("div");
divf.classList.add("fahcont");
divf.style.marginLeft="80px";
divf.style.marginBottom="40px";
let labf=document.createElement("label");
labf.setAttribute("for","Fahrenheit");
labf.textContent="Fahrenheit";
let inputf=document.createElement("input");
inputf.classList.add("fahinput");
inputf.setAttribute("onchange","temp()");
inputf.style.marginLeft="30px";
inputf.setAttribute("type","number");

container.appendChild(divf);
divf.appendChild(labf);
divf.appendChild(inputf);


let inputce1=document.querySelector(".celinput");
let inputke1=document.querySelector(".kelinput");
let inputfe1=document.querySelector(".fahinput");

/*let celconvert= () =>{
    let cel=inputce1.value ;
    inputke1.value=cel+273.15;
    inputfe1.value=(cel*1.8)+32;
}
inputce1.addEventListener("input",celconvert);*/

inputce1.addEventListener("input",() =>{
    let cel=inputce1.value ;
    inputke1.value=cel+273.15;
    inputfe1.value=(cel*1.8)+32;
})

inputke1.addEventListener("input",() =>{
    let kel=inputke1.value ;
    inputce1.value=kel-273.15;
    inputfe1.value=(kel-273.15)*1.8+32;
})

inputfe1.addEventListener("input",() =>{
    let fel=inputfe1.value ;
    inputce1.value=(fel-32)/1.8;
    inputke1.value=(fel-32)/1.8+273.15;
})

