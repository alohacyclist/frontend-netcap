import { CloseForm } from "./Buttons/CloseForm";

export function PopUp({ children, close, btnTxt, headline, z, showBtn }) {
  const closeForm = showBtn

  return (
    <>
      <div className={`flex flex-col w-screen h-screen justify-center items-center fixed  ${z}`}>
        
        <h1 className='mb-8 text-2xl text-center'>{headline}</h1>

          <div className='flex flex-col w-80 rounded-md p-4 bg-yellow-300'>
        
            {children}

          {!closeForm && <CloseForm close={close} btnTxt={btnTxt} />}
              
          </div>
      </div>
    </>
  );
}
