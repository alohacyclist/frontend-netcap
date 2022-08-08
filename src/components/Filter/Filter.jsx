import { useState } from 'react'
import {age, experienceLevel, instructorLanguage} from '../../forms/filterInputs'

export function Filter({openFilter, setOpenFilter}) {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(999)

  return (
    <form
    className="w-screen h-screen fixed top-0 left-0 bg-orange-400 rounded-lg z-10 p-3"
    >
      <div 
      className="flex flex-col w-80 p-3 m-auto"
      >

      <div 
      className='flex mb-3'
      >
        <h1
          onClick={() => setOpenFilter(!openFilter)}
          >X
        </h1>
      
        <h1 className='m-auto'>FILTER</h1>
      </div>
        
      <div
      className='mt-2 border-t-black border-t-2'
      >
        <h3><b>Experience</b></h3>
        {experienceLevel.map((result) => (
          <div  
          key={result.id}
          className='flex my-1 justify-between'
          >
            <label>{result.name}</label>
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
          />
          </div>
        ))}
    </div>
        
    <div 
    className='mt-2 border-t-black border-t-2'
    >
      <h3><b>Language</b></h3>
        <div
        className='flex flex-col flex-wrap h-36'
        >
        {instructorLanguage.map((result) => (
          <div  
          key={result.id}
          className='flex my-1 pr-4'
          >
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
              />
              <label
              className='pl-4'
              >{result.name}</label>
          </div>
        ))}
        </div>
      </div>
        

      <div
      className='mt-2 border-t-black border-t-2'
      >
      <h3><b>Price range</b></h3>
      <div
      className='flex justify-between items-center'
      >

        <input
        className='w-24 my-3 h-10' 
        onChange={(e) => setMinValue(e.target.value)}
        value={minValue}
        >
        </input>
        <h1><b>-</b></h1>
        <input
        className='w-24 my-3 h-10' 
        onChange={(e) => setMaxValue(e.target.value)}
        value={maxValue}
        >
        </input>
      </div>
      </div>
      
      <div
      className='mt-2 border-t-black border-t-2'
      >

      <h3><b>Participants / Group size</b></h3>
  
        <select
        className='w-24 my-3 h-10' 
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>10+</option>
        </select>
      </div>

      <div
      className='mt-2 border-t-black border-t-2'
      >
      <h3><b>Age</b></h3>
      {age.map((result) => (
        <div  
        key={result.id}
        className='flex my-1 justify-between'
        >
          <label>{result.name}</label>
          <input
            id={result.id}
            type={result.type}
            name={result.category}
            value={result.name}
          />
        </div>
      ))}
      </div>
        
      <button
      className='w-full bg-pink-300 rounded-3xl p-3 mt-6'
      >APPLY
      </button>

      </div>

    </form>
  )
}