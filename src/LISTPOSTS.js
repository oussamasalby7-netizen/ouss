import { useState } from "react"

export default function LISTPOSTS({ Tpost, like, Supprimer }) {
  let [pagea,setPagea]=useState(1);
  let x=2;
  let maxpages=Math.ceil(Tpost.length/x);
  let istart=(pagea-1)*x
  let Lposts=Tpost.slice(istart,istart+x)
  return (
// let [post,setpost]=useState({username:'',link:'',text:'',likes:0});
// let [Tpost,setTpost]=useState([])
// let Add=()=>{
//   setTpost([...Tpost,post]);
//   setpost({username:'',link:'',text:'',likes:0})

// }
// let Supprimer=(n)=>{
//   setTpost(Tpost.filter(e=>e.username!==n))
// }
// let change=(e)=>{
//   setpost({...post,[e.target.name]:e.target.value})
// }
// let like = (username) => {
//     setTpost(Tpost.map(post =>
//       post.username === username ? { ...post, likes: post.likes + 1 } : post
//     ));
// };
    <div>
      {Lposts.map(post => (
        <div key={post.username}>
          <div>{post.text}</div>
          <img src={post.link} alt={`Post by ${post.username}`} />
          <div>Likes: {post.likes}</div>
          <button onClick={() => like(post.username)}>Like</button>
          <button onClick={() => Supprimer(post.username)}>Supprimer</button>
        </div>
      ))}
      <button onClick={()=>setPagea(Math.max(pagea-1,1)) }>prev</button>
      <button onClick={()=>setPagea(Math.min(pagea+1,maxpages)) }>Next</button>
    </div>
  );
}