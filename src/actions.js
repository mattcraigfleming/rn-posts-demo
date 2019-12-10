export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';

export const fetchPosts = data => ({
  type: FETCH_POSTS,
  data,
});

export const fetchAuthors = data => ({
  type: FETCH_AUTHORS,
  data,
});
