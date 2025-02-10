import { Input } from "@/components/ui/input"

const CATEGORIES = ["カテゴリー", "カテゴリー", "カテゴリー", "カテゴリー", "カテゴリー", "カテゴリー", "カテゴリー"]

export default function Sidebar() {
  return (
    <aside className="w-64 space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">検索</h2>
        <Input type="search" placeholder="検索..." className="w-full" />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">カテゴリー一覧</h2>
        <ul className="space-y-2">
          {CATEGORIES.map((category, index) => (
            <li key={index}>
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}