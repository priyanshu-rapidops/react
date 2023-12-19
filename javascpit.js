const returnNaturalNumber = (number) => {
  let naturalNumber = 0;
  for (let i = 0; i <= number; i++) {
   naturalNumber += i;
  }
  return naturalNumber;
};

console.log(returnNaturalNumber(3));


