import { useRouter } from 'next/router'
import React from 'react'
// https://api.themoviedb.org/3/search/company?api_key=537a4a8b666eff5ba82510cb7241c3da&page=1
const router = useRouter()
const pagenumber = router.query.pageno
function pageno () {
  return (
    <div>
      
    </div>
  )
}

export default page 
