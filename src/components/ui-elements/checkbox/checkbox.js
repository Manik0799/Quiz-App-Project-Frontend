import React from 'react'

function Checkbox({className, text, ...rest}) {
  return (
    <label className={className}>
        <input type='radio' {...rest} />
        <span>{text}</span>
    </label>
  )
}

export default Checkbox