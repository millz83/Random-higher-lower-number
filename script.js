let number = Math.ceil(Math.random()*10);

const userSaysHigher = confirm(`The number is ${number}. Do you think the next number will be higher?`);

const nextNumber = Math.ceil(Math.random()*10);

if(nextNumber > number && userSaysHigher || nextNumber <= number && !userSaysHigher){
  alert(`Correct! It was ${nextNumber}.`);
} else {
  alert(`Wrong! It was ${nextNumber}`);
}