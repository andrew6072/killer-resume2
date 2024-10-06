export const toTitleCase = (input: string): string => {
    // Split the input string into words using space as a delimiter
    const words = input.split(' ');

    // Map over each word and capitalize the first letter, keeping the rest of the word in lower case
    const titleCasedWords = words.map(word => {
        // Capitalize the first letter and concatenate it with the rest of the word in lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the title-cased words back into a single string with a space separator
    return titleCasedWords.join(' ');
}