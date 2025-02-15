"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import BlogList from "@/components/Home/BlogList";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export default function SearchFilter({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const tag = searchParams.get("tag") || "";

    let filtered = posts;
    
    if (tag) {
      filtered = filtered.filter((post) => post.tags?.includes(tag));
    }

    if (query) {
      const searchWords = query.split(" ").filter((word) => word.trim() !== "");
      filtered = filtered.filter((post) =>
        searchWords.every((word) => {
          const lowerWord = word.toLowerCase();
          return (
            post.title.toLowerCase().includes(lowerWord) ||
            post.description.toLowerCase().includes(lowerWord) ||
            (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerWord)))
          );
        })
      );
    }

    setFilteredPosts(filtered);
  }, [searchParams, posts]);

  return <BlogList posts={filteredPosts} />;
}