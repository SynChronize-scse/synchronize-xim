const alphabet = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','Q','R',
    'S','T','U','V','W','X',
    'Y','Z' 
];

encrypt_input_button = document.getElementById("encrypt_input_button");
if (encrypt_input_button) {
    encrypt_input_button.addEventListener('click', function(e) {
        e.preventDefault();
        encryptText();
    });
}
  
function encryptText(e) {
    const form = document.forms[0];
    let encrypted_text = document.getElementById("encrypted_text");  
    let shift = 20;
    let encrypt_input = form.encrypt_input.value;       
    
    encrypted_text.innerText 
    = [...encrypt_input].map(char =>
        encrypt(char, shift)).join('').toLowerCase();

    encrypted_text.innerText = "Your Encrypted text: " + encrypted_text.innerText;
}
  
function encrypt(char, shift) {
    let include =        
    alphabet.includes(
    char.toUpperCase()); 
    
    if (include){      
        let position =         
        alphabet.indexOf(
        char.toUpperCase());
            
        let newPosition = 
        (position+shift) %  
            alphabet.length;
        return alphabet[newPosition];
    } else {
        return char;
    }
}

document.cookie = "answer=Oreo Chocolate Creme";