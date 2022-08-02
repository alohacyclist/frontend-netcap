export function PopUp({ children, close, btnTxt, headline, z }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`flex flex-col w-screen h-screen justify-center items-center fixed ${z}`}
      >
        <div className='w-80 flex flex-col items-center justify-center'>
          <h1 className='mb-8 text-2xl'>{headline}</h1>
          <form
            className='flex flex-col w-11/12 bg-yellow-200 rounded-md border p-5 gap-3'
            onSubmit={handleSubmit}
          >
            {children}
            <button
              className='border rounded-md bg-green-400 text-slate-50 px-1 py-1'
              onClick={close}
            >
              {btnTxt}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
