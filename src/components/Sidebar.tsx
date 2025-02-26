import Link from "next/link";
import SearchForm from "./SearchForm";

import { getTags } from "@/lib/posts";

export default async function Sidebar() {
  const tagsData = await getTags()
  return (
    <aside className="min-w-64 space-y-8 hidden lg:block">
      <div>
        <h2 className="text-xl font-bold mb-4">検索</h2>
        <SearchForm />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">タグ一覧</h2>
        <ul className="space-y-2">
          {tagsData.map((tagData, index) => (
            <li key={index} className="hover:underline">
              <Link href={`/?tag=${tagData.tag}`}>
                {tagData.tag}({tagData.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}