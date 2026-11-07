import { useState } from "react";
import { Button } from "../button/Button";

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
    favorited,
    favoriteCount,
    handleFavorite
}: PostProps) {
    return (
        <article>
            <Button onClick={handleFavorite} kind={favorited ? "outlined" : "primary"} label={String(favoriteCount)} />
        </article>
    )
}