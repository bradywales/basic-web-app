export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return ("Brady");
  }
  if (query.startsWith("Which of the following numbers is the largest: ")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
    }
  if  (query.startsWith("What is ") && query.includes("plus")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum.toString();
  }
  if  (query.startsWith("What is ") && query.includes("minus")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const sum = numbers[0] - numbers[1];
    return sum.toString();
  }
  if (query.startsWith("Which of the following numbers is both a square and a cube: ")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];

    for (const number of numbers) {
      const isSquare = Number.isInteger(Math.sqrt(number));
      const isCube = Number.isInteger(Math.cbrt(number));

      if (isSquare && isCube) {
        return number.toString();
      }
    }

    return "";
  }
  if  (query.startsWith("What is ") && query.includes("multiplied by")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const prod = numbers.reduce((acc, cur) => acc * cur, 1);
    return prod.toString();
  }
  if  (query.startsWith("What is ") && query.includes("divided by")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const prod = numbers[0] / numbers[1];
    return prod.toString();
  }
  if (query.startsWith("Which of the following numbers are primes: ")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const primes = numbers.filter((number) => isPrime(number));

    if (primes.length === 0) {
      return "No prime numbers found.";
    }

    return primes.join(", ");
  }

  if (query.includes("to the power of")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const prod = numbers[0] ** numbers[1];
    return prod.toString();
  }
  if (query.includes("mod")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const prod = numbers[0] % numbers[1];
    return prod.toString();
  }

  function isPrime(number: number): boolean {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
    }
  return "";
}
