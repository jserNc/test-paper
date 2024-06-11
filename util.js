// n 个答案全排列
function permute(n, ABCD) {
  var res = [];
  perRes = [];

  return ((function (n) {
    var beginEle;
    if (n < 1) {
      return
    }

    for (var i = 0, l = ABCD.length; i < l; i++) {
      beginEle = ABCD[i];
      perRes.push(beginEle);

      if (n === 1) {
        res.push(perRes.slice());
      }

      arguments.callee(n - 1);
      perRes.pop();
    }

    return res;
  })(n));
}


// 是否相邻
function adjacent(a, b) {
  switch (a) {
    case 'A':
      if (b === 'B') {
        return true
      }
      break;
    case 'B':
      if (b === 'A' || b === 'C') {
        return true
      }
      break;
    case 'C':
      if (b === 'B' || b === 'D') {
        return true
      }
      break;
    case 'D':
      if (b === 'C') {
        return true
      }
      break;
    default:
      return false;
  }
}

// 真假性相反
function mutex(a, b) {
  if (!!a === true && !!b === false) {
    return true
  } else if (!!a === false && !!b === true) {
    return true
  }
  return false
}

// 不满足：4 个条件有且仅有一个正确
function assert(exps) {
  var trues = 0, l = exps.length;
  for (var i = 0; i < l; i++) {
    if (exps[i] === true) {
      trues++;
    }
  }
  if (trues === 1) {
    return false
  }
  return true;
}

// ABCD 各自出现的次数
function timesForABCD(r) {
  var a = 0,
    b = 0,
    c = 0,
    d = 0;
  for (var i = 0; i < 10; i++) {
    switch (r[i]) {
      case 'A':
        a++;
        break;
      case 'B':
        b++;
        break;
      case 'C':
        c++;
        break;
      case 'D':
        d++;
        break;
    }
  }

  return {
    'A': a,
    'B': b,
    'C': c,
    'D': d,
    'set': [a, b, c, d]
  }
}

// 出现最少的选项
function minABCD(r, ABCD) {
  var times = timesForABCD(r);
  if (Math.min.apply(null, times.set) === times[ABCD]) {
    return true
  }
  return false;
}


module.exports = {
  permute: permute,
  adjacent: adjacent,
  mutex: mutex,
  assert: assert,
  timesForABCD: timesForABCD,
  minABCD: minABCD
};
