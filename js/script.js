const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const adress = document.querySelector("#adress");
const crust = document.querySelector("#crust");
const topings = document.querySelector("#topings");
const order = document.querySelector("#order");
const output = document.querySelector("#output");
const studentId = document.querySelector("#myStudentId");

//defining object
class Pizza{
        constructor (fname, lname, adress, crust, topings){
        this.fname = fname;
        this.lname = lname;
        this.adress = adress;
        this.crust = crust;
        this.topings = topings;
    }
}

//creating object and setting values and displaying
function Order() {
    var orderNew = new Pizza(firstName, lastName, adress , crust, topings);
    studentId.textContent = "Dmitrii Demin ID: 200464709";
    output.textContent = `Name: ${orderNew.fname.value} ${orderNew.lname.value}, Address: ${orderNew.adress.value}, Crust: ${orderNew.crust.value}, Toppings: ${orderNew.topings.value}`;
}



document.addEventListener("DOMContentLoaded", function () {
    order.addEventListener("click", Order);
});