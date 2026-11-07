import { Button } from "../button/Button";
import Typography from "../typography";

import classes from './post.module.css'

export interface PostProps {
    title: string;
    content: string;
    /** Список тэгов поста */
    tags: string[];
    author: {
        fullname: string;
        avatar: string;
    };
    favoriteCount: number;
    favorited: boolean;
    handleFavorite: () => void;
}

export default function Post({
    title,
    content,
    favorited,
    favoriteCount,
    handleFavorite
}: PostProps) {
    return (
        <article className={classes.post}>
            <Button onClick={handleFavorite} kind={favorited ? "outlined" : "primary"} label={String(favoriteCount)} />
            <Typography variant="h2" text={title} />
            <Typography variant="regular-gray" text={content} />
        </article>
    )
}