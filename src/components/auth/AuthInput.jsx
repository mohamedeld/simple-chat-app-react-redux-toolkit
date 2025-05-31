
const AuthInput = ({name,type,placeholder,register,error}) => {
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-2">
        <label htmlFor={name} className="text-sm font-bold tracking-wide block">{placeholder}</label>
        <input className="w-full dark:bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none" type={type} placeholder={placeholder} {...register(name)} />
        {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default AuthInput