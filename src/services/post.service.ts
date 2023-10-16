import { Post } from "../types/post.interface";

export const getAllPosts = async (): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3004/post`);

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  const posts = await res.json();

  return posts;
};

export const getLocationPosts = async (areaId: number): Promise<Post[]> => {
  const response = await fetch("http://localhost:3004/post");
  if (!response.ok) {
    throw new Error("エラーが発生しました。");
  }

  const data: Post[] = await response.json();

  if (data) {
    const matchedPosts = data.filter(
      (post: Post) => Number(post.postAreaId) === areaId
    );
    return matchedPosts;
  } else {
    throw new Error("エラーが発生しました。");
  }
};

export const getUserPosts = async (userId: number) => {
  const res = await fetch(`http://localhost:3004/post`);

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  const posts = await res.json();

  const userPosts = posts.filter((post: Post) => post.userId === userId);

  return userPosts;
};

export const searchPosts = async (term: string): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3004/post`);

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  const posts = await res.json();

  return posts.filter((post: Post) => post.area.includes(term));
};

export const updateLike = async (id: number, updatedLike: Post): Promise<Post> => {
  const res = await fetch(`http://localhost:3004/post/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedLike)
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  const post = await res.json();

  return post;
};

export const getPostById = async (id: number): Promise<Post> => {
  const res = await fetch(`http://localhost:3004/post/${id}`);

  if (!res.ok) {
    throw new Error("Error occurred while fetching post.");
  }

  const post = await res.json();

  return post;
};
