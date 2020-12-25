let quicksort = (numbers) => {
  let mid = parseInt(numbers.length / 2);

  let l = left;
  let r = right;

  let temp = 0;

  while (l < r) {
    //在mid的左边找，找到一个大于等于mid的值才退出
    while (arr[l] < mid) {
      l += 1;
    }
    //在mid的右边找，找到一个小于等于mid的值才退出
    while (arr[r] > mid) {
      r -= 1;
    }

    //如果l>=r，说明mid的左右两边的值已经按照左边全部小于等于mid
    //右边大于mid
    if (l >= r) {
      break;
    }

    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    //如果叫唤完发现arr[l] == mid,则--，前移
    if (arr[l] == mid) {
      r -= 1;
    }
    if (arr[r] == mid) {
      l += 1;
    }
  }

  //如果l==r,必须让l++,r--,否则栈溢出
  if (l === r) {
    l += 1;
    r -= 1;
  }
  //向左递归
  if (left < r) {
    quickSort(arr, left, r);
  }
  //向右递归
  if (right > l) {
    quickSort(arr, l, right);
  }
};
