import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Posts = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

type Post = {
  title: string;
  date: string;
  description: string;
  content: string;
  tags?: string[];
};

// postsディレクトリのパスを取得
const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getPosts(): Promise<Posts[]> {
    // ファイル一覧を取得
    const filenames = fs.readdirSync(postsDirectory);

    // 各Markdownファイルのメタデータを取得
    const posts: Posts[] = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''), // 拡張子を除外
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: (data.tags as string[]) ?? [],
      };
    });

    // 日付でソート
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

// 投稿データを取得する関数
export async function getPost(slug: string): Promise<Post> {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      content: content as string,
      tags: (data.tags as string[]) ?? [],
    };
}

// タグを取得
export async function getTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPosts();
  const tagMap: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  // オブジェクトを配列に変換して返す
  return Object.entries(tagMap).map(([tag, count]) => ({ tag, count }));
}