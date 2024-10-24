const obj = {
   0: '10',
   1: '20',
}

// 에러 원인 :forEach는 배열에서만 사용가능
// not a function -> 적용대상을 잘못 사용
obj.forEach((element) => {
   console.log(element)
})
