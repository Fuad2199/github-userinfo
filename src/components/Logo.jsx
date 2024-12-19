import Github_Logo from '../assets/Github_Logo.png'

const Logo = () => {
  return (
    <div className='flex pb-2 justify-center items-center border-b border-gray-500 w-full gap-4'>
        <img src={Github_Logo}
             alt="Logo"
             className='w-24 rounded-full'
        />
        <h1 className='text-2xl px-2 first-letter:text-5xl'>Github Users</h1>
    </div>
  )
}

export default Logo
