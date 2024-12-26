import Image from 'next/image';
import Link from 'next/link';

const CoverImage = ({ postIMG, postTitle, slug }) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          fill
          src={postIMG}
          alt={postTitle}
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default CoverImage;
