import { posts } from "../data/posts";
import { useLanguage } from "../i18n/useLanguage";
import { ArrowLeft } from "lucide-react";
import { Link, Redirect, useRoute } from "wouter";
import { useTranslate } from "../i18n/useTranslate";

const Article = () => {
  const [, params] = useRoute("/blog/:id");
  const { language } = useLanguage();
  const t = useTranslate();
  const tPosts = posts[language];
  const post = tPosts.find((post) => post.path === params?.id);

  if (!post) {
    return <Redirect to="/404" />;
  }

  return (
    <section>
      <title>{`${post?.title} | Mozzesdev`}</title>
      <div className="w-full relative h-[300px]">
        <Link href="/blog">
          <button
            title="Go back"
            className="absolute top-4 left-4 z-10 bg-white p-1 rounded-full shadow-lg cursor-pointer hover:scale-[1.1] transition-transform"
          >
            <ArrowLeft size={20} className="text-blue-500" />
          </button>
        </Link>
        <img
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="py-3">
        <h1 className="text-2xl text-zinc-800 font-semibold mb-2">
          {post?.title}
        </h1>
        <time className="text-blue-500 text-sm mb-2 block">{post?.date}</time>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post?.content ?? "" }}
        ></div>
        <p className="text-center my-10 text-zinc-800">
          {t("hope_learn")}
        </p>
      </div>
    </section>
  );
};

export default Article;
