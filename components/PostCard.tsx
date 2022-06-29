/** @jsx h */
import { h, Fragment, ComponentChildren } from "preact";
import { tw } from "@twind";
import { Marked } from "marked";

import { Post } from "../types/post.type.ts";

type PostType = {
  post: Post;
};

export default function PostCard({ post }: PostType) {
  const markup = Marked.parse(post.body);
  return (
    <article class={tw`prose-xl bg-green-500`}>
      <h1>{post.title}</h1>
      <time>{post.date_created}</time>
      <img
        src={`https://8kk3xzfc.directus.app/assets/${post.thumbnail.filename_disk}`}
        alt={post.title}
      />
      <p dangerouslySetInnerHTML={{ __html: markup.content }} />
    </article>
  );
}
