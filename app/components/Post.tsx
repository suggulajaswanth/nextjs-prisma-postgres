import DeletePostButton from "./DeletePostButton";

interface PostProps {
    id: string;
    title: string;
    content: string;
    authorName: string;
}

export default function Post({ id, title, content, authorName }: PostProps) {
    return (
        <div style={{ border: '1px solid white', padding: '15px', margin: '10px 0px' }}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeletePostButton postId={id} />
        </div>
    );
}
