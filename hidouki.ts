// function sleep(val: any){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log(val++);
//             resolve(val);
//         },1000)
//     });
// }

// sleep(0)

// async function init() {
//     await sleep(0);
// }

// init();


// interface Human {
//     name: string;
//     age: number;
// }

// const Human: Human = {
//     name: 'Quill',
//     age: 38,
// }

// console.log(Human);


console.log('こんにちは');

setTimeout(()=>{
    console.log('こんばんは');
},3000);

console.log('私が先だ');