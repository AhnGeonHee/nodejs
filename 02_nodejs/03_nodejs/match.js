var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

r.question("e-mail. 주소를입력하세요.>", function(answer) {
    console.log(answer);
    r.close();
})

