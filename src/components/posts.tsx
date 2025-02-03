import { posts } from "@/data/posts";
import { useLanguage } from "@/i18n/useLanguage";
import { Link } from "wouter";

export function Posts() {
  const { language } = useLanguage();
  const tPosts = posts[language];

  return (
    <section className="px-6 pt-12 pb-8 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl mb-4 text-zinc-800 font-light">
          Recent <span className="block ml-14 pt-2">Posts</span>
        </h2>
        <p className="text-zinc-500 mb-6 text-sm">
          I was write about stuff I'm learning this fun.
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
          All posts →
        </Link>
      </div>
    </section>
  );
}
