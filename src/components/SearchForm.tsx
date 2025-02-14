"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (newQuery) {
      params.set("query", newQuery);
    } else {
      params.delete("query");
    }
    // 残りのパラメータ（category, tag など）もそのまま維持できるように
    router.push(`?${params.toString()}`);
  };

  return (
    <Input
      type="search"
      placeholder="検索..."
      className="w-full"
      value={query}
      onChange={handleInputChange}
    />
  );
}
