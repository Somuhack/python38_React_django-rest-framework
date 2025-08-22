/* Varibales */
// var let const
// let a=0;
// console.log(a);
// a=10

// const PI=3.14;
// // b=10

// console.log(a+2);
// conditions
// if(a>10){
//     console.log("a is gater than 10");
// }else{
//     console.log("a is less than 10");
// }
// if(a>10){
//     console.log("a is gater than 10");
// }else if(a==10){
//     console.log("a is equal to 10");
// }else{
//     console.log("a is less than 10");
// }
// let cpm=400
// let tmc=250
// let bjp=300
// if(cpm>tmc){
//     if(cpm>bjp){
//         console.log("CPM is the won the match");
//     }else{
//         console.log("BJP is the won the match");
//     }
// }else if(tmc>bjp){
//     console.log("TMC is the won the match");
// }else{
//     console.log("BJP is the won the match");
// }
// a=1
// switch(a){
//     case 1:
//         console.log("a is 1");
//         break
//     case 2:
//         console.log("a is 2");
//         break
//     default:
//         console.log("a is not 1 or 2");
// }
// for(let i=0;i<5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i);
// }

// let y=10
// while(y<20) {

//     if(y==15){
//          y++
//         continue

//     }
//     console.log(y);
//     y++;
// }
// let z=0
// do{
//   console.log("z is less than zero")
//   z++;
// }while(z<0)
// class abc{
//     a=10
//     b=20
// }
// const obj=new abc()
// console.log(obj.b)
// const obj={
//     a:10,
//     b:20
// }
// console.log(obj.a);
// console.log(Object.values(obj));
// console.log(obj["a"]);
// console.log(obj["b"]);
// const arr=[10.2,20,true,"Trisha"]
// console.log(arr);
// function hello(){
//     console.log("Hello Trisha")
// }
// hello()
// function abc(a,b){
//     return a+b
// }

// let a= abc(4,6)
// console.log(abc(4,6));

// const Gretting=()=>{
//     console.log("Hello Trisha")
// }
// const Gretting2=(name)=>{
//     return ("Hello "+name)
// }
// Gretting()
// console.log(Gretting2("Souvik"));
let name = "Trisha";
let age = 22;
let address = "Kolkata";
const obj = {
  name: "Trisha",
  age: 22,
  hobbi: ["Playing", "dancing", "eating", "sleeping"],
  address: {
    city: "kolkata",
    street: "trishar barir rasta",
    pin: 710015,
  },
  details: function () {
    console.log("Name is " + this.name);
    console.log("Age is " + this.age);
    console.log(
      "address is : " +
        "\nCity :" +
        this.address.city +
        "\nStreet :" +
        this.address.street +
        "\npin :" +
        this.address.pin
    );
  },
};
const userdetails = [
  {name: "Trisha", age: 22,hobbi: ["Playing", "dancing", "eating", "sleeping"],address: {city: "kolkata",street: "trishar barir rasta",pin: 710015},husbend:true},
  {name: "Souvik", age: 23,hobbi: ["Playing", "codding", "eating","watch Movie"],address: {city: "kolkata",street: "Souvikar barir rasta",pin: 710012},wife:true},
  {name: "Somnath", age: 23,hobbi: ["Playing", "codding", "eating","watch Movie"],address: {city: "kolkata",street: "Souvikar barir rasta",pin: 710012}}
];
// userdetails.map((item)=>{
//     console.log(item.name)
//     console.log(item.age)
//     item.hobbi.map((hobi)=>{
//         console.log("My hobi is : "+hobi)

//     })
//     console.log("City : ",item.address.city);
//     console.log("Street : ",item.address.street);
//     console.log("Pin : ",item.address.pin);
//     // console.log("wife : ",item.wife);
//     // console.log("husbend : ",item.husbend);
//     //  item.wife?console.log("wife :",item.wife):item.husbend?console.log("husbend : ",item.husbend):null
//     item.wife && console.log("wife :",item.wife);
//     item.husbend && console.log("husbend :",item.husbend);
//     console.log("\n\n");
// })

// const sum=(a,b)=>{
//    return a+b
// }
// const avg=(sum)=>{
//      return sum/2
// }
// // console.log(avg(sum(10,20)))
// // console.log(sum(15,20)/2);

// const Loging =(name)=>{
//     console.log(`Hello ${name}  Login is Successful`)
// }
// // Loging("Trisha")
// const Profile = (Log)=>{
//      Log("Souvik")
//      console.log("Wellcome to Profile");
     
// }
// Profile(Loging)
const arr=[10,30,50,20,70,5]
const sum=arr.reduce((a,b)=> a+b,0)

console.log(sum);

console.log(arr.sort((a,b)=>a-b));
