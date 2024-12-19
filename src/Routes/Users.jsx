/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import UsersContainer from "../components/UsersContainer";
import Loading from "../components/Loading";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let BaseURL = "https://api.github.com/users";
  const user = useRef('')
  let EndPoint = "https://api.github.com/users";

  const AllUsers = async () => {
    if (user.current.value === "") {
      setLoading(true)    
      const res = await fetch(EndPoint);
      const data = await res.json();
      setUsers(data)
      setLoading(null)
    }
  }

  const FindUser = async () => {
    setLoading(true);
    if (user.current.value !== '') {
      setUsers([]);
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json()
      setUsers(()=>[data])
      user.current.value = "";
    } else {
      AllUsers();
    }
    setLoading(null)
  }

  useEffect(() => {
    AllUsers();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-11 my-5">
        <input type="text" placeholder="Search github username..."
          className="h-full md:w-1/3 w:2/3 text-gray-800
        px-2 font-semibold outline-none text-lg"
          ref={user}
        />
        <button onClick={FindUser} className="bg-teal-500 font-semibold px-4 h-full font-[Poppins]">
          Search
        </button>
      </div>
      { loading ? <Loading/> : <UsersContainer users={users} />}
    </div>
  )
}

export default Users
