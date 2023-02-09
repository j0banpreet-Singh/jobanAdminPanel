import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
console.log(file)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file ? URL.createObjectURL(file):
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU"
            }
              alt="userImg"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon" /></label>
                <input type="file" onChange={e => setFile(e.target.files[0])} id="file" style={{ display: "none" }} />
              </div>

              {
                inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))
              }
              {/* <div className="formInput">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="password" />
              </div> */}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
