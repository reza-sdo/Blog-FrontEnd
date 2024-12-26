import React from 'react';
import CoverImage from './CoverImage';

const PostList = async () => {
  // await new Promise((res) => setTimeout(() => res(), 5000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { data } = await res.json();
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
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
