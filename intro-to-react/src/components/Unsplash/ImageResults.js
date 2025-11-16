import React from 'react'

function ImageResults({imageResults}) {
  return (
    <div className='img-container'>{imageResults.length > 0 && imageResults.map(result => <div className='image-card'><img src={result.urls.small}/></div>)}</div>
  )
}

export default ImageResults