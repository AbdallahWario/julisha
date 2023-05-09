import { useEffect, useState } from "react";
import Post from "../../components/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 mt-8">
        {posts.length > 0 && posts.map(post => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
