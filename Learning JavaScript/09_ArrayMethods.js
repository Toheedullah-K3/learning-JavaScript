// ********************** forEach **********************




// const arr = [4,3,6,8,1,2];

// const func = (number , index) => {
//     console.log(`Index ${index} => ${number} * 2 = ${number * 2}`)
// }
// arr.forEach(func);




// ****************** map method **********************



// const arr = [1,2,3,4,5,6];

// // const func = (number) => {
// //     return number ** 2;
// // }

// const newArr = arr.map(number => { return number ** 2 });
// console.log(newArr);


// more work on map method (* important) 

// const users = [
//     {firstname: "Toheed" , age : 21 },
//     {firstname: "Afnan" , age : 14 },
//     {firstname: "Rizwan" , age : 27 },
// ]

// const usersFirstNames = users.map(user => {
//     return user.firstname;
// })

// console.log(usersFirstNames);




// ******************** filter Method ******************


// const arr = [1,2,3,5,7,3,6,7,8];

// const myfunc = (num) => {
//     if(num%2 === 0){
//         return true;
//     }
// }

// const newArr = arr.filter(myfunc);
// console.log(newArr)





// ******************* reduce Method *********************


// const userCart = [
//     {productId: 1 , productName: "Mobile" , price: 35000},
//     {productId: 2 , productName: "Laptop" , price: 55000},
//     {productId: 3 , productName: "I-Pad" , price: 96000},
// ];

// const totalAmount = userCart.reduce((totalPrice , currentProduct) => {
//     return totalPrice + currentProduct.price;
// } , 0)

// console.log(totalAmount);







// ********************* sort Method ************************


// const userCart = [
//     {productId: 1 , productName: "Mobile" , price: 35000},
//     {productId: 2 , productName: "Laptop" , price: 55000},
//     {productId: 3 , productName: "I-Pad" , price: 96000},
//     {productId: 4 , productName: "Button Mobile" , price: 5000},
//     {productId: 3 , productName: "LCD" , price: 22000}
// ];


// userCart.sort( (a,b) => a.price - b.price ); // ascending order
// console.log(userCart);

// userCart.sort( (a,b) =>  b.price - a.price ); // descending order
// console.log(userCart);






// ********************* find Method ************************





// const userCart = [
//     {productId: 1 , productName: "Mobile" , price: 35000},
//     {productId: 2 , productName: "Laptop" , price: 55000},
//     {productId: 3 , productName: "I-Pad" , price: 96000},
//     {productId: 4 , productName: "Button Mobile" , price: 5000},
//     {productId: 3 , productName: "LCD" , price: 22000}
// ];

// const findd = +prompt("Enter Product NUmber you wanna search?");
// const userSearched = userCart.find((product)=> product.productId===findd);

// console.log(userSearched);






// ********************* Every Method ************************

// every condition must be true to return true

// const userCart = [
//     {productId: 1 , productName: "Mobile" , price: 35000},
//     {productId: 2 , productName: "Laptop" , price: 55000},
//     {productId: 3 , productName: "I-Pad" , price: 96000},
//     {productId: 4 , productName: "Button Mobile" , price: 5000},
//     {productId: 3 , productName: "LCD" , price: 22000}
// ];


// const checkCart = userCart.every((product)=>product.price < 100000);
// // console.log(checkCart);
// if(checkCart === true){
//     console.log("Every Product in this Cart is less then of Price 100K");
// }else{
//     console.log("Some Product in this Cart is having price greater then 100K");
// }




// ********************* Some Method ************************

// Any condition should be true to return true


// work same like ( Every Method ) , 
// Every Method => works like 'AND' Condition
// Some Method  => works like 'OR' Condition






// ********************* fill Method ************************

// value , start , end index

// const arr = [1,2,3,4,5,6,7,8];
// arr.fill(0,2,5);
// console.log(arr);



// ********************* Splice Method ************************

// startIndex , Delete , Insert 

// const arr = ["item 1" , "item 2" , "item 3"];

// // arr.splice(1,1); // delete at 1 index
// // console.log(arr);

// // arr.splice(1,0 ,"Inserted Item"); // insert at 1 index and push right more items
// // console.log(arr);

// // combine

// arr.splice(1,2,"Insert 1" , "Insert 2");
// console.log(arr);






// ********************* Splice Method ************************


