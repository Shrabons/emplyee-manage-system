import profileimage from "../../assets/emplyeeimg.png"

const Sidebar = () => {

  const handleEmplyeelist = () =>{

  }
  return (
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
          <li  className="py-3 text-white hover:bg-secondary px-5">Emplyee List</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Today’s Class</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Post Activity</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Activity List</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Apply for Leave</li>
          <li className="py-3 text-white hover:bg-secondary px-5">Late List</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar