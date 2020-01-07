const jsObject = [ 
    {name : '윤인성', region:'서울'},
    {name : '윤명월', region:'도쿄'}
];

let outputA= JSON.stringify(jsObject)
let outputB= JSON.stringify(jsObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);