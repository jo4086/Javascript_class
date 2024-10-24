const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')
// selectBox의 ID는 #oper로 ID연결 에러
const selectBox = document.querySelector('#oper')
const answer = document.querySelector('#answer')

// 오타, selectBox = null
selectBox.addEventListener('change', (e) => {
   let result = 0
   var value = selectBox.options[selectBox.selectedIndex].value

   // selectBox = null 이므로 대상이 없어서 addEventListner 적용 X
   switch (value) {
      case 'plus':
         result = Number(op1.value) + Number(op2.value)
         break
      case 'minus':
         result = Number(op1.value) - Number(op2.value)
         break
   }

   answer.textContent = result
})

/* 
Cannot read properties of null
=> (reading 'addEventListener')
 */
