 ////new example 
let isvictory = false
const cricket = () => {
    return new Promise ((resolve,reject) => {
if(isvictory){
    setTimeout(() => {
resolve("we won")
    },1500);
}
else{
    console.log("match in progress")
    setTimeout(() => {
reject("tm se na ho payga")
    },1500);
};
    });
};
cricket()
.then((responce) =>{
console.log(responce);

})
.catch((err) => {
    console.log(err);
})     
/////chainin 
 