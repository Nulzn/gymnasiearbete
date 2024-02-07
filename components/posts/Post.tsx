interface PostProps {
    username: string,
    title: string,
    body: string
}

export const Post = ({username, title, body}: PostProps) => {
    return (
        <div>
            <h1>{username}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}