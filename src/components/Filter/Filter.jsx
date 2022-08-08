import {age, experienceLevel, instructorLanguage} from '../../forms/filterInputs'

export function Filter({openFilter, setOpenFilter}) {
  return (
    <div
    className="w-screen h-screen fixed top-0 left-0 bg-orange-400 rounded-lg z-10 p-3"
    >
      <div className="flex flex-col w-screen p-3">
        <h1
        onClick={() => setOpenFilter(!openFilter)}
        >Close
        </h1>
      
      <h1>FILTER</h1>
        
        {experienceLevel.map((result) => (
          <div  
          key={result.id}
          className='flex my-3 justify-between'
          >
            <label>{result.name}</label>
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
              /* onClick={() => {
                result.category === 'location' ? 
                  logLocation(result.category, result.name) :
                  logActivity(result.category, result.name)
              }} */
            />
          </div>
        ))}
        <div
        className='flex flex-col flex-wrap h-52'
        >
        {instructorLanguage.map((result) => (
          <div  
          key={result.id}
          className='flex my-3 pr-4'
          >
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
              /* onClick={() => {
                result.category === 'location' ? 
                logLocation(result.category, result.name) :
                logActivity(result.category, result.name)
              }} */
              />
              <label
              className='pl-4'
              >{result.name}</label>
          </div>
        ))}
        </div>

        <div>
          
        </div>
        <div>
          
        </div>
        {age.map((result) => (
          <div  
          key={result.id}
          className='flex my-3 justify-between'
          >
            <label>{result.name}</label>
            <input
              id={result.id}
              type={result.type}
              name={result.category}
              value={result.name}
              /* onClick={() => {
                result.category === 'location' ? 
                  logLocation(result.category, result.name) :
                  logActivity(result.category, result.name)
              }} */
            />
          </div>
        ))}

      </div>
      
    </div>
  )
}