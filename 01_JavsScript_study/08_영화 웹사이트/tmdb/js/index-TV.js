const options = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRkOWI5ZTUwZjA1MDg4OWU5OGU0Mzk4ODlkODNlMCIsIm5iZiI6MTczMDA3NjA5Mi45MzE5NzksInN1YiI6IjY3MWFlOTQ3NDU0MmUzNzFmZTBhNmFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc24yS96Ag4F5c_wxry_xe0KnNsI0_1NTdqMs6_CulY',
   },
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
