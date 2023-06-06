function titleCase(str) {
    let word = str.split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
    }
    return word.join(' ');
}

// titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
