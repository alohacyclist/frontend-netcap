

export function Filter({openFilter, setOpenFilter}) {
  return (
    <div
    className="w-screen h-screen fixed top-0 left-0 bg-orange-400 rounded-lg z-10 p-3"
    >
      <div>
        <h1
        onClick={() => setOpenFilter(!openFilter)}
        >Close
        </h1>
      </div>
      
      <h1>FILTER</h1>

    </div>
  )
}