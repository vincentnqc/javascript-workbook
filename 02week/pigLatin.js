'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

    
    // var array = word.split('');
    // console.log("array", array);
    var resolve = word.toLowerCase().trim();
    
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    var newWord = '';
    
    for (var y = 0; y < resolve.length - 1; y++) {
      
      for (var i = 0; i < vowels.length - 1; i++) {

        if (resolve[0] === vowels[i]) {

          console.log(resolve);

            return resolve + "yay";
        }
       
        else if (resolve[y] === vowels[i]) {
         
          for (var x = y; x < resolve.length; x++) {
           
            newWord = newWord + resolve[x];
          }
         
          for (var n = 0; n < y; n++) {
          
            newWord = newWord + resolve[n];
          }
         
          return newWord + "ay";
        }
      }
    
  }
}
  pigLatin("");

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
