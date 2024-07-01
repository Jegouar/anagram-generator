# anagram-generator
## Codecademy Full-Stack Engineer Portfolio Project: JavaScript Syntax

To fulfill the project requirements I created a random quiz question generator. It outputs a number (specified when the function is called) of anagrams of musical artists, with the solutions revealed after ten seconds.

### Data used
The most time-consuming part of this project was to create the anagrams!
I chose fifty well-known bands and artists, and using online anagram generator tools (Inge's and dCode) selected the best anagrams for each.
These were stored in an array of objects with `solution` and `questions` properties. `solution` is a string and `questions` is an array of strings.

### Function requirements
The code needed to achieve the following:
- randomly select an artist
- randomly select an anagram for this artist
- add the selections to a question list of specified length
- display the questions
- display the solutions after a given amount of time

### Instructions for use
1. If not already installed, download and install Node.js. A guide to this can be found on the [website](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).
2. Save `script.js` to your machine.
3. Open a command prompt or terminal.
4. Navigate to the directory where you saved the file.
5. Run the code by typing `node script.js` in the command prompt and pressing Enter.
6. The code generates three anagrams. To change the number of questions, call the function `showQuestions()` with a different argument.

### Examples of expected output
`showQuestions(3)`
> Welcome to the quiz, you have 3 questions.
> 
> Question 1: Mrs Jawbone  
> Question 2: Clarified Musty  
> Question 3: The Maoris  
> 
> The solutions will be revealed in ten seconds...
> 
> Solution 1: James Brown  
> Solution 2: Curtis Mayfield  
> Solution 3: Aerosmith  

`showQuestions(5)`
> Welcome to the quiz, you have 5 questions.

> Question 1: Oil Cell Stoves  
> Question 2: Dusty Warmed  
> Question 3: Tattiest Phenom  
> Question 4: Join Wick Sale  
> Question 5: Falsely Hand Testimony  
> 
> The solutions will be revealed in ten seconds...
> 
> Solution 1: Elvis Costello  
> Solution 2: Muddy Waters  
> Solution 3: The Temptations  
> Solution 4: Jackie Wilson  
> Solution 5: Sly and the Family Stone

### Limitations and possible development
The obvious limitation of a console based program like this is the lack of user input.
Another problem that sometimes occurs is that solutions, and even questions, can be repeated.
Therefore, a check against duplication should be introduced after the selection of an artist.

