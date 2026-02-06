const checkword = (word) => { // Creating a function to check words //
    if (!word) return false; // If the user didn't insert an input, then return false //
    
    const backward = word.split('').reverse().join('');  // Here is the checking part, where it processes the word by splitting, reversing, and joining //
    return word === backward; // Returns the result if the word matches the backward word //
}

const runCheck = () => { // Creating a function for the button in the HTML //
    
    const inputElement = document.getElementById('userWord'); // inputElement represents the input the user inserted. Using document.getElementById to select the input tag in HTML // 
    const Owords = inputElement.value; // Assigning the value of inputElement to Owords //

    if (Owords !== null && Owords !== "") { // Checks if the user inserted a word or not // 
        const isPalindrome = checkword(Owords); // If the user inserted a word, pass it to the checking function // 
        
        console.log(isPalindrome); // Logs the output to the console //
                if(isPalindrome) { // Displays an alert depending on the output
                    alert("Yes, '" + Owords + "' is a palindrome!"); // If it is a palindrome, it will show this alert //
                } else { // Else //
                    alert("No, '" + Owords + "' is not a palindrome."); // It will show this alert //
                }
    } else { // If they didn't insert a word //
        alert("Please enter a word first."); // It will show this alert //
        }
}