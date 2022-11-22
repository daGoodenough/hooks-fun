import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'

export default function Greeting(props) {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('Poppins')

  useEffect(() => {
    document.title = name + ' ' + surname
  });

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value)
  }

  return (
    <section>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange} >
        </input>
      </Row>
      <Row label="Name">
        <input
          value={surname}
          onChange={handleSurnameChange} >
        </input>
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>
  )
}