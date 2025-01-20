import Link from "next/link";

const BackLink: React.FC = () => {
    return (
        <div className="mt-8">
            <Link href="/" className="text-blue-500">&larr; 戻る</Link>
        </div>
    );
};

export default BackLink;
