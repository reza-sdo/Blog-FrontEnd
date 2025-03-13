'use client';
import { likePostApi } from '@/services/postService';
import ButtonIcon from '@/ui/ButtonIcon';
import { toPersianDigits } from '@/utils/numberFormatter';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const PostInteractions = ({ post }) => {
  const router = useRouter();
  const likeHandler = async (postId) => {
    try {
      const data = await likePostApi(postId);
      toast.success(data.data.message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="primary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <HeartIconSolid /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
};

export default PostInteractions;
