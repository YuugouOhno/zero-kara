import BlogCard from "@/components/Home/BlogCard";

type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
};

type BlogListProps = {
    posts: Post[];
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <div className="space-y-4 flex-grow min-h-screen">
            {posts.map((post) => (
                <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    description={post.description}
                    tags={post.tags}
                />
            ))}
        </div>
    );
};

export default BlogList;
