import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

type BlogCardProps = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
};

const BlogCard = ({ slug,title,date,description,tags }:BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-6 p-4">
        <div className="relative w-48 max-w-full flex-shrink-0 aspect-[4/3]">
          <Link href={`/posts/${slug}`}>
          <Image
            src={`/thumbnail/nextjs.png`}
            fill
            alt={title}
            className="object-cover w-full h-full rounded-lg"
          />
          </Link>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <Link href={`/posts/${slug}`}>
              <h2 className="text-xl font-semibold line-clamp-2 pt-6">{title}</h2>
            </Link>
            <time className="text-sm text-muted-foreground">{date}</time>
          </div>
          <p>{description}</p>
          <div className="flex gap-2 mt-auto">
            {tags && tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-[#3c3c3c] text-white hover:bg-[#4a4a4a]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
