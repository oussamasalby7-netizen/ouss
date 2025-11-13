import { useState } from "react";

export default function Kk(){
  const [posts, setPosts] = useState([
    { id: 1, username: "user1", content: "Premier tweet", likes: 5 },
    { id: 2, username: "user2", content: "Deuxième tweet", likes: 3 },
    { id: 3, username: "user3", content: "Troisième tweet", likes: 7 },
    { id: 4, username: "user4", content: "Quatrième tweet", likes: 2 }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const npostes = 2;
   const maxPages = Math.ceil(posts.length / npostes);

  const start = (currentPage - 1) * npostes;
  const dpostes = posts.slice(start, start + npostes);

  return (
    <div>
      {dpostes.map(post => (
        <div key={post.id}>
          <h1>{post.id} - {post.content}</h1>
        </div>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage=> Math.max(currentPage - 1, 1))}

      >
        Prev
      </button>
      <button
        onClick={() => setCurrentPage(currentPage => Math.min(currentPage + 1, maxPages))}

      >
        Next
      </button>
    </div>
  );
}
