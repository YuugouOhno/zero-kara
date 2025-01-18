type PostContentProps = {
    content: string;
};

const PostContent: React.FC<PostContentProps> = ({ content }) => {
    return (
        <div className="prose mt-8">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostContent;
