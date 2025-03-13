import React from 'react';
import CoverImage from './CoverImage';
import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';
import Author from './Author';
import PostInteractions from './PostInteractions';
import { getPosts } from '@/services/postService';
import { cookies } from 'next/headers';
import setCookiesOnRequest from '@/utils/setCookiesOnRequest';

const PostList = async () => {
  // await new Promise((res) => setTimeout(() => res(), 5000));
  const cookieStore = await cookies();
  const options = await setCookiesOnRequest(cookieStore);
  const data = await getPosts(options);

  return data.posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {data.posts.map((post) => (
        <div
          key={post.id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
          <CoverImage
            slug={post.slug}
            postTitle={post.title}
            postIMG={post.coverImageUrl}
          />

          {/* post content  */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>
            {/* post author - reding time */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteractions post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
