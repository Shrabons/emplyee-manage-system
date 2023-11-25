
import { useState } from "react"
import profileimage from "../assets/emplyeeimg.png"
import EmplyeeList from "./EmplyeeList"
import PostActivity from "./PostActivity"
import TodayClass from "./TodayClass"


const Home = () => {

  let [emplyeelist, setEmplyeelist] = useState(true)
  let [todayclass, setTodayclass] = useState(false)
  let [postActivity, setPostActivity] = useState(false)

  const handleEmplyeelist = () =>{
    setTodayclass(false)
    setPostActivity(false)
    setEmplyeelist(true)
  }
  const handleTodayClass = () =>{
    setEmplyeelist(false)
    setPostActivity(false)
    setTodayclass(true)
  }
  const handlePostActivity = () =>{
    setEmplyeelist(false)
    setTodayclass(false)
    setPostActivity(true)
  }
  return (
    <div className="flex gap-4">
      <div className="w-1/5">
      <div className="bg-primary h-screen">
      <div className="img">
        <img src={profileimage} alt="" />
      </div>
      <div className="des px-5 py-6 text-white">
        <p><strong className="text-lg">Name :</strong> Shrabon sarker</p>
        <p><strong className="text-lg">Designation :</strong>  MERN Stack Developer</p>
        <p><strong className="text-lg">Office Time :</strong>  11am - 8pm</p>
        <p><strong className="text-lg">Offday :</strong> Sunday</p>
      </div>
      <div className="menu  py-6">
        <ul>
          <li onClick={handleEmplyeelist} className="py-3 text-white hover:bg-secondary px-5">Emplyee List</li>
          <li onClick={handleTodayClass} className="py-3 text-white hover:bg-secondary px-5 ">Today’s Class</li>
          <li onClick={handlePostActivity} className="py-3 text-white hover:bg-secondary px-5">Post Activity</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Activity List</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Apply for Leave</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Late List</li>
        </ul>
      </div>
    </div>
      </div>
      <div className="w-1/5">
        {emplyeelist && <EmplyeeList />}
        {todayclass && <TodayClass />}
        {postActivity && <PostActivity />}
       
       
        
      </div>
    </div>
  )
}

export default Home