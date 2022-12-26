import React, { useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  function getRandomInt() {
    return Math.floor(Math.random() * 826)
  }

  const [apiNum, setApiNum] = useState(getRandomInt)

  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('https://rickandmortyapi.com/api/character/', apiNum)

  const handleClick = () => {
    if (apiNum !== 826) {
      setApiNum(apiNum + 1)
    }
  }
  const handleClickBack = () => {
    if (apiNum !== 1) {
      setApiNum(apiNum - 1)
    }
  }

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          handleClick={handleClick}
          handleClickBack={handleClickBack}
        />
      )}
    </div>
  )
}

export default Home
