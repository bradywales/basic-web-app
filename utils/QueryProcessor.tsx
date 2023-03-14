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
  if  (query.startsWith("What is ")){
    const numRegex = /\d+/g;
    const numbers = query.match(numRegex)?.map(Number) ?? [];
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum.toString();
  }
  return "";
}
