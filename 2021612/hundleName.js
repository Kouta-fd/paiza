process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let test = lines[0];
      let result = test.toLowerCase().includes("a", "e", "i", "o", "u" );
      if(result == 1) {
          var retest = test.replace(/a/gi,"").replace(/e/gi,"").replace(/i/gi,"").replace(/o/gi,"").replace(/u/gi,"")
          console.log(retest)
      } else {
          console.log(test)
      }
});
