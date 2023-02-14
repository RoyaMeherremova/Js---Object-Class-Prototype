"use strict";


//OBJECTS


// let stu1 = {
//     name:"Konul",
//     surname:"Ibrahimova",
//     email:"konul@gmail.com",
//     phones:[5345,6574675],          //object icinde arr yazmaq olur
//     education:{                     //object icinde objectde yazmaq olur
//         names:["Programming","Digital Marketing"]
//     }
// }

// stu1.address = "Neftciler";  //yeni properti elave etmek olur ayrica


// for (const key in stu1) {
//   console.log(key + "/" + stu1[key])  //keyleri ve valularina catirsan

// }

// let user = {};

// user.name = "Pervin"
// console.log(user.name)

// for (const item of stu1.phones) {
//     console.log(item)
// }

// console.log(stu1.education.name)

// console.log(stu1.education.names)

// let stu1 = {
//     id: 1,
//     name: "Eli",
//     surname: "Talibov",
//     address: "Xetai"

// }
// let stu2 = {
//     id: 2,
//     name: "Elekber",
//     surname: "Hesenov",
//     address: "Bayil"

// }
// let stu3 = {
//     id: 3,
//     name: "Mirze",
//     surname: "Beshirzade",
//     address: "Bulbule"

// }
// let stu4 = {
//     id: 4,
//     name: "Shaiq",
//     surname: "Kazimov",
//     address: "Sedmoy"

// }
// let group = {
//     name: "P135",
//     capacity: 4,
//     students: [],
//     addStudent: function (student) {         //students elave edirik qrupun bos students-arrayine

//         let stu = this.students.find(s => s.id == student.id)   //eyni studenti add elememey ucun qrupa

//         if (stu != undefined) {
//             console.log("Student already exist")
//             return;      //return edirik method dayansin
//         }
//         if (this.students.length == this.capacity) {
//             console.log("Group already filled")
//             return;
//         }
//         this.students.push(student)

//     },
//     updateStudent: function (student) {                //update sdudent method
//         let stu = this.students.find(s => s.id == student.id)
//         if (stu != undefined) {
//             stu.address = student.address;
//         }
//     },
//     getStudents: function () {                //qrupda olan studentleri verir bize
//         //    for (const item of this.students) {
//         //     console.log(`${item.name} ${item.surname} ${item.address}`)
//         //    }
//         return this.students;  //yuxardaki fornan eynidi
//     }
// }

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)
// console.log(group.students)
// console.log(group.getStudents());
// console.log(group.students.length)  //student sayilarini gorsedir

// getStudentsDatas(group.getStudents())   //method array kimi gonderirik asagdaki methoda cunku returnu arraydi

// function getStudentsDatas(arr) {          
//     for (const item of arr) {
//         console.log(`${item.name} ${item.surname} ${item.address}`)
//     }
// }

// let updatedStudent = {     //other object for update
//     id:4,
//     address:"Ehmedli"
// }

// group.updateStudent(updatedStudent)


//elcanin oxuduqu "Yupiter"otaqinin capacity negederdi
// let user = {
//     name: "Elcan",
//     company: {
//         name: "Code academy",
//         rooms: [
//             {
//                 name: "Yupiter",
//                 capacity: 15,
//                 computers: ["HP", "Apple", "Acer"]
//             },
//             {
//                 name: "Saturn",
//                 capacity: 10
//             }
//         ]
//     }
// }

// function getRoomCapacityByUser(user){
//    let rooms = user.company.rooms;
//    let computers=[];
//    for (const room of rooms) {
//     if(room.name == "Yupiter"){
//        console.log(room.capacity)   //yupiter otaqin capacitisi
//        console.log(room.computers.length) //yupiter otaqin complarin sayi
//        computers =room.computers;
//     }
//    }
//    for (const computer of computers) {   //userin oxuduqu otaqin kompyuterleri tek tek
//       console.log(computer)
//    }
// }
// getRoomCapacityByUser(user)

// function getRoomComputersByUser(user) {    //userin oxuduqu otaqin kompyuterleri
//     let rooms = user.company.rooms;

//     for (const room of rooms) {
//         if (room.name == "Yupiter") {

//             return room.computers;
//         }
//     }

// }
// console.log(getRoomComputersByUser(user));


//CLASS JS

// class Car {      //js clasina properti yazmaq olmur
//     constructor(name,speed){    //constructor vasitesi ile 
//         this.name = name;
//         this.speed = speed;
//     }
//     showCarData(color){
//         return this.name + " " + this.speed + "-" + color;
//     }
// }
// let car1 = new Car("BMW",500);

// // console.log(car1.name)

// console.log(car1.showCarData("red"))

// class Animal{
//     constructor(name,sound){
//         this.name =name;
//         this.sound = sound;
//     }
//     static eat(){
//         console.log("animal eating")
//     }
// }
// Animal.eat();

// class Cat extends Animal{   //miras aliriq Animaldan(extends)
//     constructor(color,name,sound){
//         super(name,sound);
//         this.color = color;
//     }
// }

// let cat1 = new Cat("black","Luis","ham ham");
// let animal1 = new Animal("Cat","Myauuuuu")

// console.log(cat1.name)



// let nums =[1,2,3,4,5]

// Array.prototype.konul = function (){   //#cdaki extention kimi prototypla object ve classlara method yaza bilersen . qoyan kimi cixsin
//     console.log("Hello Konul")
// }

// nums.konul()

// String.prototype.p135 = "Ugurlar";    //eyni extention kimi prototaypla vareybl yazmaq

// String.prototype.getStr = function(str){
//     console.log(str)
// }
// String.prototype.arrow = ()=>{
//     console.log("arrow")
// }

// let name ="Shaiq";

// name.getStr("hello")

// console.log(name.p135)