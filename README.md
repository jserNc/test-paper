# 2018年刑侦科推理试题

## 单项选择

1. 这道题的答案是：  
   A.A &nbsp;&nbsp;  B.B &nbsp;&nbsp;  C.C  &nbsp;&nbsp; D.D

2. 第5题的答案是：  
   A.C  &nbsp;&nbsp; B.D &nbsp;&nbsp;  C.A &nbsp;&nbsp;  D.B

3. 以下选项中哪一题的答案与其他三项不同：  
   A.第3题 &nbsp;&nbsp;  B.第6题 &nbsp;&nbsp;  C.第2题  &nbsp;&nbsp; D.第4题 

4. 以下选项中哪两题的答案相同：  
   A.第1，5题 &nbsp;&nbsp; B.第2，7题 &nbsp;&nbsp; C.第1，9题 &nbsp;&nbsp; D.第6，10题

5. 以下选项中哪一题的答案与本题相同：  
   A.第8题 &nbsp;&nbsp;  B.第4题  &nbsp;&nbsp; C.第9题  &nbsp;&nbsp; D.第7题

6. 以下选项中哪两题的答案与第8题相同：  
   A.第2，4题 &nbsp;&nbsp; B.第1，6题 &nbsp;&nbsp; C.第3，10题 &nbsp;&nbsp; D.第5，9题

7. 在此十题中，被选中次数最少的选项字母为：  
   A.C  &nbsp;&nbsp; B.B &nbsp;&nbsp;  C.A &nbsp;&nbsp;  D.D

8. 以下选项中哪一题的答案与第1题的答案在字母中不相邻：  
   A.第7题 &nbsp;&nbsp;  B.第5题 &nbsp;&nbsp;  D.第2题 &nbsp;&nbsp;  B.第10题

9. 已知”第1题与第6题的答案相同“与”第X题与第5题的答案相同“的真假性相反，那么X为：  
   A.6 &nbsp;&nbsp;  B.10 &nbsp;&nbsp;  D.2  &nbsp;&nbsp; B.9

10. 在此10道题中，ABCD四个字母出现次数最多与最少的差为：  
   A.3 &nbsp;&nbsp;  B.2 &nbsp;&nbsp;  C.4 &nbsp;&nbsp;  D.1

解答如下：

```javascript
var util = require('./util');

var res = [];
var r = [];
var ans = [];
var pass = 0;

var res = util.permute(10,'ABCD');

for (var i = 0, count = res.length; i < count; i++) {
   if (check(res[i])) {
      ans.push([i,res[i]])
   } else {
      pass++;
   }
}

function check(r){
  console.log(pass,r);

  // 2
  if (util.assert([r[1] === 'A' && r[4] === 'C',
      r[1] === 'B' && r[4] === 'D',
      r[1] === 'C' && r[4] === 'A',
      r[1] === 'D' && r[4] === 'B'])) {
    console.log('2不满足');
    return false;
  }


  // 3
  if (util.assert([r[2] === 'A' && r[2] !== r[5] && r[2] !== r[1] && r[2] !== r[3],
      r[2] === 'B' && r[5] !== r[2] && r[5] !== r[1] && r[5] !== r[3],
      r[2] === 'C' && r[1] !== r[2] && r[1] !== r[5] && r[1] !== r[3],
      r[2] === 'D' && r[3] !== r[2] && r[3] !== r[5] && r[3] !== r[1]])) {
    console.log('3不满足');
    return false;
  }

  // 4
  if (util.assert([r[3] === 'A' && r[0] === r[4],
      r[3] === 'B' && r[1] === r[6],
      r[3] === 'C' && r[0] === r[8],
      r[3] === 'D' && r[5] === r[9]])) {
    console.log('4不满足');
    return false;
  }

  // 5
  if (util.assert([r[4] === 'A' && r[4] === r[7],
      r[4] === 'B' && r[4] === r[3],
      r[4] === 'C' && r[4] === r[8],
      r[4] === 'D' && r[4] === r[6]])) {
    console.log('5不满足');
    return false;
  }

  // 6
  if (util.assert([r[5] === 'A' && r[1] === r[3] && r[1] === r[7],
      r[5] === 'B' && r[0] === r[5] && r[0] === r[7],
      r[5] === 'C' && r[2] === r[9] && r[2] === r[7],
      r[5] === 'D' && r[4] === r[8] && r[4] === r[7]])) {
    console.log('6不满足');
    return false;
  }

  // 7
  if (util.assert([r[6] === 'A' && util.minABCD(r,'C'),
      r[6] === 'B' && util.minABCD(r,'B'),
      r[6] === 'C' && util.minABCD(r,'A'),
      r[6] === 'D' && util.minABCD(r,'D')])) {
    console.log('7不满足');
    return false;
  } 

  // 8
  if (util.assert([r[7] === 'A' && !util.adjacent(r[0],r[6]),
      r[7] === 'B' && !util.adjacent(r[0],r[4]),
      r[7] === 'C' && !util.adjacent(r[0],r[1]),
      r[7] === 'D' && !util.adjacent(r[0],r[9])])) {
    console.log('8不满足');
    return false;
  }

  // 9
  if (util.assert([r[8] === 'A' && util.mutex(r[0] === r[5],r[5] === r[4]),
      r[8] === 'B' && util.mutex(r[0] === r[5],r[9] === r[4]),
      r[8] === 'C' && util.mutex(r[0] === r[5],r[1] === r[4]),
      r[8] === 'D' && util.mutex(r[0] === r[5],r[8] === r[4])])) {
    console.log('9不满足');
    return false;
  }

  // 10
  var times = util.timesForABCD(r);
  var diff = Math.max.apply(null,times.set) - Math.min.apply(null,times.set);

  if (util.assert([r[9] === 'A' && diff === 3,
      r[9] === 'B' && diff === 2,
      r[9] === 'C' && diff === 4,
      r[9] === 'D' && diff === 1])) {
    console.log('10不满足');
    return false;
  }

  return true;
}

console.log('结果：',ans);
console.log('pass:',pass);
console.log('停止，剩余',count-pass,'项');
```

最终得到结果：'B', 'C', 'A', 'C', 'A', 'C', 'D', 'A', 'B', 'A'
