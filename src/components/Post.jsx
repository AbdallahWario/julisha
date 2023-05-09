import React from 'react';
import { formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/post/${_id}`}>
        <img src={`http://localhost:4000/${cover}`} alt="" className="w-full h-64 object-cover" />
      </Link>
      <div className="px-6 py-4">
        <div className="mb-2">
          <p className="text-gray-600 text-sm">
            <Link to={`/author/${author?._id}`} className="font-medium hover:underline">
              {author?.username}
            </Link>
            <span className="mx-1">&bull;</span>
            <time className="font-medium">{formatISO9075(new Date(createdAt))}</time>
          </p>
        </div>
        <Link to={`/post/${_id}`}>
          <h2 className="text-2xl font-semibold mb-2 hover:underline">{title}</h2>
        </Link>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
