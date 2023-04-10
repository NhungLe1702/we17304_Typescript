import { useLocalStorage } from "../hooks"
import { Link } from "react-router-dom"

const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-[#D70018]">
    <div className="container mx-auto flex items-center gap-[100px]">
      <Link to={`/`}>
        <img className="w-[64px] my-2" src="/logo.png" alt="" />
      </Link>
      <input
        className="h-[34px] grow rounded-lg pl-2"
        type="text"
        placeholder="search"
      />
      <div>
        <Link to={`/login`}><p className="text-[#ffffff]">Login</p></Link>
        <Link to={`/signup`}><p className="text-[#ffffff]">Signup</p></Link>
      </div>
    </div>
  </header>
}

export default UserHeader