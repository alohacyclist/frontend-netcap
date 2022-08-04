
export function CloseForm({ close, btnTxt }) {
  return (
    <button
    className='border rounded-md bg-green-400 text-slate-50 px-1 py-1'
    onClick={close}
    >
    {btnTxt}
  </button>
  )
}
