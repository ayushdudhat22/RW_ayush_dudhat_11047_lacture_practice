// const fetchData = () => {
//     fetch('https://dummyjson.com/recipes')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }

// const fetchData = async() => {


let object = {
    name:"ayush",
    surname:"dudhat",
    age:19
}

console.log(object);

let result = JSON.stringify(object)

console.log(result);

let obj = JSON.parse(result)

console.log(obj);