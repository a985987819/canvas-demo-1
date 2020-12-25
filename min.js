let min = (numbers) => {
  if (numbers.length <= 2) {
    return Math.min.apply(null, numbers);
  } else {
    return min([numbers[0], min(numbers.slice(1))]);
  }
};

// min([99, 23, 4, 2341, 453, 123, 1245]);
let minIndex = (numbers) => {
  let index = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};

let sort = (numbers) => {
  if (numbers.length <= 2) {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  } else {
    let index = minIndex(numbers);
    let min = numbers[index];
    numbers.splice(index, 1);
    return [min].concat(sort(numbers));
  }
};

min([99, 23, 4, 2341, 453, 123, 1245]);
minIndex([99, 23, 4, 2341, 453, 123, 1245]);
sort([99, 23, 4, 2341, 453, 123, 1245]);
