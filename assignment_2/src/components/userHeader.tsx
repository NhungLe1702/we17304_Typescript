import { useLocalStorage } from "../hooks"
import { Link } from "react-router-dom"

const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-[#D70018]">
    <div className="container mx-auto flex items-center gap-[100px]">
      <img className="w-[64px] my-2" src="/logo.png" alt="" />
      <input
        className="h-[34px] grow rounded-lg"
        type="text"
        placeholder="search"
      />
      <div>
        <Link to={`/login`}><p className="text-[#ffffff]">Login</p></Link>
        <Link to={`/signup`}><p className="">Signup</p></Link>
      </div>
    </div>
  </header>
}

export default UserHeader