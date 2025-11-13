export default function Apost({ post, Add, change }) {
  return (
    <div>
      user name:
      <input
        type="text"
        name="username"
        value={post.username}
        onChange={change}
      />
      img:
      <input
        type="text"
        name="link" 
        value={post.link}
        onChange={change}
      />
      text:
      <input
        type="text"
        name="text"
        value={post.text}
        onChange={change}
      />
      <button onClick={Add}>Add</button>
    </div>
  );
}