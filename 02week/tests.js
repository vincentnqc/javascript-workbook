function pigLatin(word) {

  var translate = function (word) {
    var array = word.split('');

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var newWord = '';

    for (var i = 0; i < vowels.length - 1; i++) {

      for (var y = 0; y < word.length - 1; y++) {
        
        if (word[y] === vowels[i]) {
          for (var x = y; x < word.length; x++) {
            newWord = newWord + word[x];
          }
          
          for (var n = 0; n < y; n++) {
            newWord = newWord + word[n];
          }
          return newWord + "ay";
        }
      }
    }
  }

  

}
pigLatin("apple");