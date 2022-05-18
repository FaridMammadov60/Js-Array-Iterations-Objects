//Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

const numbers = [4, 2, 5, 11, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
numbers.reverse();
console.log(numbers);

//["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.
//Hemin function geriye yeni bir array qaytarir. 
//Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
//Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let arr = ["Yanvar", "Fevral", "Mart", "Aprel"]
function Method([]) {
    let newarr = [];

    for (let index = 0; index < arr.length; index++) {
        newarr.push(arr[index] + " - " + (index + 1));
    }
    console.log(newarr);
    return newarr;
}
Method(arr);

//String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq,
//hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
//Meselen: Functiona gelen string - "Salam olsun hamiya", 
//hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

let str="Salam olsun hamiya";
function Say(word){
    let arr=word.split(" ");
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i].length);        
    }
    return newarr;

}
console.log(Say(str));


