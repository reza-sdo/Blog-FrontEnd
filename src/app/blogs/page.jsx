import { Suspense } from 'react';
import PostList from './_components/PostList';
import Spinner from '@/ui/Spinner';

async function page() {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
        numquam dolores. Qui rerum molestias, amet natus eaque non itaque rem
        deserunt quia doloremque quis. Accusantium ad non ea placeat.
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default page;
