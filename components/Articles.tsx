import Link from "next/link";
import { Post } from "../lib/api";

const Articles = ({ posts }:any) => {
  return (
    <div className="w-2/5 space-y-3">
      {posts.map((post:Post) => (
        <div key={post.meta.slug} className="border w-full space-y-1 p-4">
          <div>
            <Link href={`/post/${post.meta.slug}`}>
              <a>
                <h1 className="text-3xl cursor-pointer tracking-wide font-medium text-indigo-700">
                  {post.meta.title}
                </h1>
              </a>
            </Link>
            <p className="text-gray-600 text-sm">{post.meta.date.toString()}</p>
          </div>
          <p className="prose">{post.content.slice(0,200)}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
