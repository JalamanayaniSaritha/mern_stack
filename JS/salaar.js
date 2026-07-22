const vegetables = ["carrot", "broccoli", "spinach", "cauliflower", "cabbage"];
//vegetables.forEach(veg=>console.logg(veg));
function something(m,callback) {
    console.log(m+"Something Something")
    callback();
}
function character(){
    console.log("casting:jalamanayani, saritha");
}
//something("movie",character);
let promise = new Promise((resolve,reject)=>{
    resolve("success")
});
//promise.then(result=>console.log(result));
async function sum(params){
    return 7+8;
}
//sum().then(result=>console.log(result));
let std={
    Name:"saritha",
    age:20,
};
let json=JSON.stringify(std);
console.log(json);