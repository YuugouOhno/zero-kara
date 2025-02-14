import Link from "next/link";
import SearchForm from "./SearchForm";

const CATEGORIES = ["web", "競プロ", "その他"]

export default function Sidebar() {
  return (
    <aside className="w-64 space-y-8 hidden sm:block md:w-48 lg:w-64">
      <div>
        <h2 className="text-xl font-bold mb-4">検索</h2>
        <SearchForm />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">カテゴリー一覧</h2>
        <ul className="space-y-2">
          {CATEGORIES.map((category, index) => (
            <li key={index} className="text-gray-600 hover:text-gray-900 hover:underline">
              <Link href={`?category=${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}