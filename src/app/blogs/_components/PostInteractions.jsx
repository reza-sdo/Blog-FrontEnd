import ButtonIcon from '@/ui/ButtonIcon';
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const PostInteractions = ({ post }) => {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="primary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{post.commentsCount}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
};

export default PostInteractions;
