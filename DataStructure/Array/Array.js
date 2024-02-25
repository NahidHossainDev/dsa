const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // O(1)

// pop  (remove last item)
strings.pop(); // O(1)

// unshift (add item begining of array)
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

/**
 * There have two types of array ,
 * (a) Static array - predefined spacific length,
 * its exist in C++.
 * int a[20] // here array size is 20 which hold integer,
 * for this array to increase the length of array we have to create a new array
 *  with predefined length and have to assign this array value
 *
 *
 * (b) Dynamic Array - dynamic length of array, means it expands length as we add new elements
 *
 */
