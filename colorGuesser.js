const COLORS_ARRAY = ['yellow', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'cyan', 'blue'];

function runGame() {
    let guess = '';
    let correct = false;
    let numTries = 0;

    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    COLORS_ARRAY.sort();
    // console.log(target);
    // console.log(tagetIndex);

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') + '\n\n' + 'What color am I thinking of?\n')
        if (guess === null) {
            return;
        }
        numTries += 1;
        correct = checkGuess(guess.toLowerCase(), target);
        console.log(guess);
    } while (!correct);
    alert('Congratulations! You guessed the correct color ' + guess + ' in ' + numTries + ' attempts!')
}

function checkGuess(guess, target) {
    let correct = false;
    const itemInArray = COLORS_ARRAY.includes(guess.toLowerCase()); //makes the guess case insensitive
    if (itemInArray === false) {
        alert('That color is not an option.\n\nPlease recheck the colors in the array and try again.');
        console.log('That color is not an option.\n\nPlease recheck the colors in the array and try again.');
    } else if (guess > target) {
        alert('Incorrect. Try again at a lower index.');
        console.log('Incorrect. Try again at a lower index.');
    } else if (guess < target) {
        alert('Incorrect. Try again at a higher index.');
        console.log('Incorrect. Try again at a higher index.');
    } else {
        correct = true;
        document.body.style.background = guess; //Change the background color to the correctly guessed color
    }
    console.log(itemInArray);
    return correct;
}