//Fortunne Weaver's Cookie

//Author: SABRINA RATH

//Description: This project simulats receiving the special message inside a fortune cookie.Instead of the secret message containing the standard generic and boring messages, these cookie will be sure to contain something that will definetely make you smile.

//The experience is controlled via mouse clicks on the fortune cookie to crack it open and receive your special message.Click it again and receive another fortune.

//Would you like another cookie ? Well then, another fortune awaits you.

//Variables

//All my image varaibles to cycle through each fortune cookie state (full cookie to slowly cracking and then splitting into two halves revealing the message on the paper)
let fullCookie;
let cookieCrack1;
let cookiCrack2;
let cookieCrack3
let halfLeft;
let halfRight;
let paperImg;

//Sound variables

//When cookie cracks, play sound
let crackSound;
//Chime sound when message is revealed
let chimeSound;
//Background music
let bgMusic;