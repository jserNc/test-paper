var util = require('./util');

var res = [];
var r = [];
var ans = [];
var currentIndex = 0;

var res = util.permute(10, 'ABCD');

console.log('res.length:', res.length)

for (var i = 0, count = res.length; i < count; i++) {
  if (check(res[i])) {
    ans.push(res[i])
  } else {
    currentIndex++;
  }
}

function check(r) {
  console.log('当前：', currentIndex);

  // 2
  if (util.assert([r[1] === 'A' && r[4] === 'C',
      r[1] === 'B' && r[4] === 'D',
      r[1] === 'C' && r[4] === 'A',
      r[1] === 'D' && r[4] === 'B'
    ])) {
    console.log('2不满足');
    return false;
  }


  // 3
  if (util.assert([r[2] === 'A' && r[2] !== r[5] && r[2] !== r[1] && r[2] !== r[3],
      r[2] === 'B' && r[5] !== r[2] && r[5] !== r[1] && r[5] !== r[3],
      r[2] === 'C' && r[1] !== r[2] && r[1] !== r[5] && r[1] !== r[3],
      r[2] === 'D' && r[3] !== r[2] && r[3] !== r[5] && r[3] !== r[1]
    ])) {
    console.log('3不满足');
    return false;
  }

  // 4
  if (util.assert([r[3] === 'A' && r[0] === r[4],
      r[3] === 'B' && r[1] === r[6],
      r[3] === 'C' && r[0] === r[8],
      r[3] === 'D' && r[5] === r[9]
    ])) {
    console.log('4不满足');
    return false;
  }

  // 5
  if (util.assert([r[4] === 'A' && r[4] === r[7],
      r[4] === 'B' && r[4] === r[3],
      r[4] === 'C' && r[4] === r[8],
      r[4] === 'D' && r[4] === r[6]
    ])) {
    console.log('5不满足');
    return false;
  }

  // 6
  if (util.assert([r[5] === 'A' && r[1] === r[3] && r[1] === r[7],
      r[5] === 'B' && r[0] === r[5] && r[0] === r[7],
      r[5] === 'C' && r[2] === r[9] && r[2] === r[7],
      r[5] === 'D' && r[4] === r[8] && r[4] === r[7]
    ])) {
    console.log('6不满足');
    return false;
  }

  // 7
  if (util.assert([r[6] === 'A' && util.minABCD(r, 'C'),
      r[6] === 'B' && util.minABCD(r, 'B'),
      r[6] === 'C' && util.minABCD(r, 'A'),
      r[6] === 'D' && util.minABCD(r, 'D')
    ])) {
    console.log('7不满足');
    return false;
  }

  // 8
  if (util.assert([r[7] === 'A' && !util.adjacent(r[0], r[6]),
      r[7] === 'B' && !util.adjacent(r[0], r[4]),
      r[7] === 'C' && !util.adjacent(r[0], r[1]),
      r[7] === 'D' && !util.adjacent(r[0], r[9])
    ])) {
    console.log('8不满足');
    return false;
  }

  // 9
  if (util.assert([r[8] === 'A' && util.mutex(r[0] === r[5], r[5] === r[4]),
      r[8] === 'B' && util.mutex(r[0] === r[5], r[9] === r[4]),
      r[8] === 'C' && util.mutex(r[0] === r[5], r[1] === r[4]),
      r[8] === 'D' && util.mutex(r[0] === r[5], r[8] === r[4])
    ])) {
    console.log('9不满足');
    return false;
  }

  // 10
  var times = util.timesForABCD(r);
  var diff = Math.max.apply(null, times.set) - Math.min.apply(null, times.set);

  if (util.assert([r[9] === 'A' && diff === 3,
      r[9] === 'B' && diff === 2,
      r[9] === 'C' && diff === 4,
      r[9] === 'D' && diff === 1
    ])) {
    console.log('10不满足');
    return false;
  }

  return true;
}

console.log('结果：', ans);
console.log('currentIndex:', currentIndex);
