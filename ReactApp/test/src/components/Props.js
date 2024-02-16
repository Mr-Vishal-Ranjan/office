import React from 'react'

const Props = ({name="Default" , age="00"}) => {
  return (
    <div className='props'>
        <p>This is prop.age -- {age}</p>
        <p>This is prop.name -- {name}</p>
    </div>
  )
}

export default Props