import Image from 'next/image';
import React from 'react';

const PostList = async () => {
  // await new Promise((res) => setTimeout(() => res(), 5000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const { data } = await res.json();
  return data.posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {data.posts.map((post) => (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
          <div className="relative aspect-video overflow-hidden rounded-md mb-6">
            <Image
              fill
              src={post.coverImageUrl}
              alt={post.title}
              className="object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
