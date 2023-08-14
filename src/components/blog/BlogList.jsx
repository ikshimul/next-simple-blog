import Link from "next/link";

const BlogList = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-semibold mb-2">
          <Link href={`/post/${blog.id}`}>{blog.title}</Link>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <br></br>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link
            className="inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 hover:bg-blue-500 rounded-md shadow-sm"
            href={`/post/${blog.id}`}
          >
            <span>Read More</span>
            <svg
              className="ml-3 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BlogList;
