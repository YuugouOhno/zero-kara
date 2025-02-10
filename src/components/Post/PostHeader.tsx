type PostHeaderProps = {
    title: string;
    date: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => {
    return (
        <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-500">{date}</p>
        </header>
    );
};

export default PostHeader;
