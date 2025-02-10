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
    <article className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-6 p-4">
        <div className="relative h-40 max-w-full flex-shrink-0 aspect-[4/3]">
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
          <time className="text-sm text-muted-foreground text-right ">{date}</time>
          <Link href={`/posts/${slug}`}>
            <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
          </Link>
          <p>{description}</p>
          <div className="flex gap-2 mt-auto">
            {tags && tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-red-500 hover:bg-red-800">
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
