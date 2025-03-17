// let ask = prompt("Enter your DOB in this format \n 'YYYY-MM-DD' ")
// if(ask != Number){
//     alert("Your are writing Something wrong in the prompt box")
// }

// let calc = moment(ask,"YYYY-MM-DD").fromNow();

// alert(`Your Current Age is ${calc}`)

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  strArr = str.split(" ");
//   strArr =
    // strArr.sort((a,b)=> b.length-a.length); /*js me sorting Uni code ke base pr hoti hai alphabets ki like Capital wly jo words hote hain unka codeNumber chota hota hai jbhi wo phly apper hoty hain or small wlon ka CodeNumber bara hota haa tbi wo bad me apper hote hain  */
//   console.log(strArr);
//   last element find krne ke liy hum likhte hain 
// return strArr.at(-1)
// yea decending order me chezon ko rkhta hai agr b-a krdo tw
// return strArr[0]

return strArr.reduce(
    (accun,curWord)=> (curWord.length > accun.length ? curWord : accun ),
     ""
)
};

console.log(findLongestWord("A Quick Brown Fox jumping over The lazy dog"));
