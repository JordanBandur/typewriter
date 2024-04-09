const sentence = "hello there from lighthouse labs";

const slowType = function(sentence) {
  let timer = 1000;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }
  console.log("\n");
};

slowType(sentence);



