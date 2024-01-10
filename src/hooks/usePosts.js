import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [posts, sort]);
}

export const useSortedAndSearchPosts = (posts, query) => {
    return useMemo(() => {
        return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [posts, query]);
};