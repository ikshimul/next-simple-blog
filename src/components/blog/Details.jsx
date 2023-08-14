"use client";
import { useRouter } from "next/navigation";

const details = ({ post }) => {
  const router = useRouter();
  const GoTo = () => {
    router.back();
  };
  return (
    <div>
      <div className="max-w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-semibold mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.content}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {post.date}
          </span>
        </div>
      </div>
      <div className="text-center p-5">
        <button
          className="inline-flex items-center px-4 py-2 bg-blue-700  hover:bg-blue-500  text-white text-sm font-medium rounded-md"
          onClick={GoTo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
};

export default details;
