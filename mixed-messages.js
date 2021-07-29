/*
Mixed messages project
Mujahid Ahmed July 2021
*/

/**
 * Word bank
 */

const commonWords = ["a", "the", "that"];

const nouns = ["boy", "dude", "girl", "plane", "mouse", "man", "woman", "sound", "telephone", "scientist", "glass", "note", "word", "fan", "disk", "knife"];

const verbs = ["slapped", "poked", "helped", "removed", "obliterated", "kissed", "hugged", "walked to", "stopped", "injured", "embraced", "ignored", "chose to ignore", "didn't see", "walked over", "switched on"];

/**
 * Generate random numbers
 */

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const commonIndex1 = randomIntFromInterval(0, commonWords.length);

const nounIndex1 = randomIntFromInterval(0, nouns.length);

const verbIndex = randomIntFromInterval(0, verbs.length);

const commonIndex2 = randomIntFromInterval(0, commonWords.length);

const nounIndex2 = randomIntFromInterval(0, nouns.length);


