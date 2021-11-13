const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNumberInRange()
// Result: Default random number range is 0 - 100, so you get a number between 0 and 100.
randomNumberInRange(100, 200)
// Result: You will get a random number between 100 and 200, where 100 is min range and 200 is max range.