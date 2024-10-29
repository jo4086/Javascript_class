const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRkOWI5ZTUwZjA1MDg4OWU5OGU0Mzk4ODlkODNlMCIsIm5iZiI6MTczMDA3NjA5Mi45MzE5NzksInN1YiI6IjY3MWFlOTQ3NDU0MmUzNzFmZTBhNmFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc24yS96Ag4F5c_wxry_xe0KnNsI0_1NTdqMs6_CulY',
   },
}

// fetch('https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1', options)
//    .then((res) => res.json())
//    .then((res) => console.log(res))
//    .catch((err) => console.error(err))

/* 
  <a id="set" target="_blank">shinyks.com</a>

  <button onclick="demo()">Set Attribute</button>

  <script>
    function demo() {
      document.getElementById("set").setAttribute("href", "https://shinyks.com");
      document.getElementById("set").style.color = "red";
    }
  </script> */

const button = document.querySelector('.button1_text')
const dropdown = document.querySelector('.dropdown')
const option = document.querySelectorAll('.option')
const droplist = document.querySelector('#dropdown')
const selected = document.querySelector('.selected')
selected.innerHTML = option[0].innerText

droplist.addEventListener('click', () => {
   const options = document.getElementById('options')
   if (options.style.display === 'none') {
      options.style.display = 'block'
      option.forEach(function (list) {
         
      })
   } else {
      options.style.display = 'none'
   }
})

// option.forEach(function (e) {
//    e.addEventListener('click', function () {
//       selected.innerHTML = tihs.innerText
//    })
// })
function button1() {
   const viewdiv = document.getElementById('drop-tab')
   const btn1 = document.getElementById('btn1')
   if (viewdiv.style.display === 'none') {
      viewdiv.style.display = 'block'
      btn1.style.borderRadius = '8px 8px 0 0'
   } else {
      viewdiv.style.display = 'none'
      btn1.style.borderRadius = '8px'
   }
}

const url = 'https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1'

const getPlayingPopularTvs = async (url) => {
   try {
      const respones = await fetch(url, options)
      const data = await respones.json()
      console.log(data)
      console.log(data.results.length)
      for (let i = 0; i < data.results.length; i++) {
         console.groupCollapsed(i)
         console.log(data.results[i].name)
         console.groupEnd()
      }
      console.log(data.results)
   } catch (error) {
      console.error('에러 발생: ', error)
   }
}
getPlayingPopularTvs(url)
