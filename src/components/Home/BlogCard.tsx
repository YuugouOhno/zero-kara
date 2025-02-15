"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'

type BlogCardProps = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
};

const BlogCard = ({ slug,title,date,description,tags }:BlogCardProps) => {
  const router = useRouter()

  // カード全体をクリックしたら遷移
  const handleCardClick = () => {
    router.push(`/posts/${slug}`);
  };

  return (
    <article 
      onClick={handleCardClick}
      className="cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-6 p-4">
        <div className="relative h-40 max-w-full flex-shrink-0 aspect-[4/3]">
          <Image
            src={`/thumbnail/nextjs.png`}
            fill
            alt={title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <time 
            className="text-sm text-muted-foreground text-right hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`?date=${date}`);
            }}
          >
            {date}
          </time>
          <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
          <p>{description}</p>
          <div className="flex gap-2 mt-auto">
            {tags && tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="default" 
                className="hover:shadow-md transition-shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`?tag=${tag}`);
                }}
              >
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
