
const AuthLayout = ({children,title}) => {
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
        <div className="flex w-[1600px] mx-auto h-full">
           <div className='h-screen w-full flex items-center justify-center overflow-y-auto'>
        <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
            <div className="text-center dark:text-dark_text_1">
                <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
                <p className="mt-2 text-sm">{title}</p>
            </div>
            {children}
        </div>
    </div>
            
        </div>
    </div>
  )
}

export default AuthLayout