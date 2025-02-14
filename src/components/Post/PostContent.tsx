import { marked } from 'marked';

type PostContentProps = {
    content: string;
};

const PostContent: React.FC<PostContentProps> = ({ content }) => {
    const mdContent = marked(content);
    return (
        <div className="prose mt-8 theme-text-color">
            <div dangerouslySetInnerHTML={{ __html: mdContent }} />
        </div>
    );
};

export default PostContent;
