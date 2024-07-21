function getAllLetters(str) {
    // your code here
    let letters = [];
    for (let i = 0; i < length.str; i++) {
      letters.push(str[i]);
    }
    return letters;
    
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
