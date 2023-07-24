import { useMemo } from "react";

export const usePosts = (posts, searchQery) => {
  const seachedPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchQery)
    );
  }, [searchQery, posts]);

  return seachedPosts;
};
