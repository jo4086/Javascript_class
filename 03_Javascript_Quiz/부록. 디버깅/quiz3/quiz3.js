const obj = {
   0: '10',
   1: '20',
}

/* 
const obj = [10, 20]
 */

// 에러의 발생 원인: obj가 배열이 아니므로 for of에서 반복할 수 없다.

console.log(Object.values(obj))
const obc = [Object.values(obj)]

for (let val of obc) {
   console.log(val)
}

console.group('obc를 선언하고 배열에 Object.values(obj)로 요소를 추가\n원본 객체obj와의 관계는 어떨까?')
console.log('수정전 obj객체', obj)
console.log('수정전 obc배열', obc, '\n수정전 obc배열 :', `[${obc.join()}]`)
obj['2'] = 30
console.group("%cobj['2'] = 30 추가", 'font-weight:bold;')
console.log('수정된 obj객체', obj)
console.log('수정된 obj객체의 키', Object.keys(obj))
console.log('수정된 obj객체의 값', Object.values(obj))
console.log('수정된 obj객체의 영향 obc 확인')
console.log('obc\n', obc, '\n', obc.join())
console.groupEnd()
console.groupEnd()

// for (let val of obj) {
//    console.log(val)
// }
