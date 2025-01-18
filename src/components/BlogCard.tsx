import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
    slug: string;
    title: string;
    date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ slug, title, date }) => {
    return (
        <li className="border border-gray-300 rounded-lg p-2 m-2">
            <Link href={`/posts/${slug}`} className="block">
                <Image
                src={`/posts/${slug}.png`}
                width={200}
                height={200}
                alt={title || "サムネ"}
                className="w-full h-auto rounded"
                />
                <p className="text-center text-xl mt-2 text-blue-500 font-bold">{title}</p>
                <p className="text-right text-md">{date}</p>
            </Link>
        </li>
    );
};

export default BlogCard;
