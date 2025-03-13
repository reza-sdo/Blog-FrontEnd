import http from './httpService';

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(options = {}) {
  // next: { revalidate: 60 },
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,
    options
  );
  const { data } = (await res.json()) || {};
  return data;
}

export async function likePostApi(postId) {

  return http.post(`/post/like/${postId}`).then((res) => res?.data);
}
