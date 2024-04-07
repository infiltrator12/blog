import React, { useEffect } from 'react'
import axios from "axios"
import { Link, useLocation } from 'react-router-dom';
import Session from '../session.js';
import  { useState } from 'react'

const Home = () => {
  // console.log(document.cookie)

  // if(Session.get("access_token")){
  //   //new session
  // } else{
  //   //check access token
  // }

  const [posts, setPosts] = useState([])

  const cat = useLocation().search;
  

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res= await axios.get(`http://127.0.0.1:8800/api/posts${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, [cat])
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src={Stori} alt='' />
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src= {Tech} alt='' />
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src= {Tech} alt='' />
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src= {Tech} alt='' />
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src= {Tech} alt='' />
  //   }
  // ]

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../uploads/${post.img}`} alt='' />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`} >
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

