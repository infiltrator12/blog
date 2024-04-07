import React, { useEffect, useContext, useState } from 'react'

import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import { Link, useLocation,  useNavigate } from 'react-router-dom'
import Menu from "../components/Menu";
import axios from 'axios';
import moment from "moment";
import { AuthContext } from '../context/authContext'; 

const Single = () => {

  const [post, setPost] = useState([])

  const location = useLocation().search;

  const navigate = useNavigate();
  const locationPathname = useLocation().pathname;

  const postId =  locationPathname ? locationPathname.split('/')[2] : null;

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
  

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res= await axios.get(`http://127.0.0.1:8800/api/posts/${postId}`);
        setPost(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async() => {
    try{
      await axios.delete();
      navigate("/");
    }catch(err){

    }
  }
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={`../uploads/${post?.img}`} alt="" />
        <div className="user">
          <img src={post.userImage} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username &&(
            <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="" />
            </Link>
            <img onclick={handleDelete} src={Delete} alt="" />
          </div>
          )}
          
        </div>
      <h1>{post.title}</h1>
      {getText(post.desc)}
      </div>
      <Menu />
    </div>
  )
}

export default Single