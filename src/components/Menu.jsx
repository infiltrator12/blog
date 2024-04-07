import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])

  

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res= await axios.get(`http://127.0.0.1:8800/api/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, [cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna id augue dapibus tempus eget a ipsum. Donec vel lacus odio. Cras vestibulum est id ligula efficitur condimentum. Phasellus ultrices vehicula ultrices. Nullam pellentesque commodo orci. Donec euismod justo vitae arcu condimentum cursus. Phasellus posuere, orci sit amet lobortis cursus, metus magna egestas lacus, sed laoreet eros magna eget turpis. Pellentesque in ultricies orci. Nullam aliquet rhoncus justo non tristique. Vivamus tellus metus, luctus sed ultrices vel, tincidunt vitae arcu. Donec dictum laoreet molestie. Etiam ut consequat risus. Maecenas at tellus ornare ante pellentesque dictum.",
  //     img: <img src= {Tech} alt='' />
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
  //   }
  // ]

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu