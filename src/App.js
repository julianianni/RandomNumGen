import './index.css'
import { useState, useEffect } from 'react'

function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(2000000)
  const [result, setResult] = useState('select to get a random number')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (min >= max) {
      setError(true)
    } else {
      setError(false)
    }
  }, [max, min])

  const handleBtn = (e) => {
    e.preventDefault()
    let result =
      parseInt(Math.ceil(Math.random() * (max - min))) + parseInt(min)
    setResult(result === max ? result - 1 : result)
  }

  return (
    <div className='App'>
      <div className='title'>
        <h1>Random Number Generator</h1>
      </div>
      <form className='form'>
        <div className='result'>
          <div className='p-result'>
            Random Number:{' '}
            <span>
              {min >= max ? (
                <p className='alert'>Min can not be greater or equal to Max</p>
              ) : (
                result
              )}
            </span>
          </div>
        </div>
        <div className='generator'>
          <div className='min'>
            <h4>Min:</h4>
            <input
              type='number'
              onChange={(e) => {
                setMin(parseInt(e.target.value))
              }}
            />
          </div>
          <div className='max'>
            <h4>Max:</h4>
            <input
              type='number'
              onChange={(e) => {
                setMax(parseInt(e.target.value))
              }}
            />
          </div>
        </div>
        <button className='btn' disabled={error} onClick={handleBtn}>
          Generate random Number
        </button>
      </form>
    </div>
  )
}

export default App
