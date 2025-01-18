import BlogCard from "@/components/BlogCard";

type Post = {
    slug: string;
    title: string;
    date: string;
};

type BlogListProps = {
    posts: Post[];
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div className="p-4 h-screen py-36 px-20">
            <ul className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                />
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
