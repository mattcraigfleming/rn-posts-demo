export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_AUTHOR = 'FETCH_AUTHOR';

export const fetchPosts = data => ({
  type: FETCH_POSTS,
  data,
});

export const fetchAuthor = data => ({
  type: FETCH_AUTHOR,
  data,
});
