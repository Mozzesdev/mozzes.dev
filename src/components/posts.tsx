import { posts } from "../data/posts";
import { useLanguage } from "../i18n/useLanguage";
import { Link } from "wouter";
import { useTranslate } from "../i18n/useTranslate";

export function Posts() {
  const { language } = useLanguage();
  const t = useTranslate();
  const tPosts = posts[language];

  return (
    <section className="px-6 pt-12 pb-8 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-4 text-zinc-800 font-light">
          {t("posts.recent")} <span className="block ml-14 pt-2">{t("posts.recent_2")}</span>
        </h2>
        <p className="text-zinc-500 mb-6 text-sm">
        {t("posts.recent_3")}
        </p>
        <div className="space-y-6">
          {tPosts.map((post) => (
            <Link key={post.title} href={`/blog/${post.path}`} className="block group">
              <article className="flex justify-between items-center">
                <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <time className="text-sm text-gray-500">{post.date}</time>
              </article>
            </Link>
          ))}
        </div>
        <Link href="/blog" className="inline-block mt-8 text-blue-600 hover:underline">
          {t("posts.all_posts")} →
        </Link>
      </div>
    </section>
  );
}
