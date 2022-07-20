let spinner = document.querySelector(".spin");
var words = ["Frontend Developer", "Fullstack Enthusiast", "Part Time Reader", "Full Time Learner"];
var count = 0;

/*
 * The reason we do the following twice is because setInterval won't
 * initially call the changeWord function until 3 seconds has passed,
 * by doing it once first we make sure that we are changing the word
 * as soon as it starts.
 */

changeWord(); // Call the changeWord function
setInterval(changeWord, 3000); // Call it every 3 seconds

function changeWord() {
    var current_word = '&lt;' + words[count] + ' /&gt;';
    spinner.innerHTML = `${current_word}`;
    count++;
    if (count == words.length) count = 0;
}