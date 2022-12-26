import React from 'react'

const BlogList = ({ blogs, handleClick, handleClickBack }) => {
  return (
    <div className='blog-list'>
      <h1>{blogs.name}</h1>
      <p>Species: {blogs.species}</p>
      <p>Status: {blogs.status}</p>
      <p>Gender: {blogs.gender}</p>
      <p>Location: {blogs.location.name}</p>
      <img alt={blogs.id} src={blogs.image} />
      <div>
        <button onClick={handleClickBack}>Prev</button>
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  )
}
export default BlogList
