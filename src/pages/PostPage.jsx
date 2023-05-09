import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  
  console.log(`hello ${apiUrl}`)

  useEffect(() => {
    fetch(`${apiUrl}/post/${id}`)
      .then(response => response.json())
      .then(postInfo => setPostInfo(postInfo))
      .catch(error => console.error(error));
  }, []);

  if (!postInfo) {
    return null;
  }

  const isAuthor = userInfo?.id === postInfo.author?._id;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{postInfo.title}</h1>
      <div className="text-gray-600 mb-4 flex items-center">
        <time className="mr-2">
          {formatISO9075(new Date(postInfo.createdAt))}
        </time>
        <span>|</span>
        <div className="ml-2">
          by {postInfo.author?.username}
        </div>
      </div>

      {isAuthor && (
        <div className="mb-4">
          <Link
            to={`/edit/${postInfo._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit this post
          </Link>
        </div>
      )}

      <div className="mb-4">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          alt={postInfo.title}
          className="w-full h-auto"
        />
      </div>

      <div
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
