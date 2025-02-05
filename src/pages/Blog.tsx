import { categories } from "../data/categories";
import { posts } from "../data/posts";
import { useLanguage } from "../i18n/useLanguage";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useTranslate } from "../i18n/useTranslate";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);
  const { language } = useLanguage();
  const [articles, setArticles] = useState(posts[language]);

  const t = useTranslate();

  useEffect(() => {
    setArticles(posts[language]);
  }, [language]);

  const filterArticles = (query: string, category: string) => {
    let filtered = posts[language];

    if (category !== "All Posts") {
      filtered = filtered.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setArticles(filtered);
  };

  const searchArticle = (query: string) => {
    setSearchValue(query);
    filterArticles(query, selectedCategory);
  };

  const filterArticlesByCategory = (category: string) => {
    const newCategory = category === selectedCategory ? "All Posts" : category;
    setSelectedCategory(newCategory);
    filterArticles(searchValue, newCategory);
  };

  return (
    <main className="mx-auto py-4 mb-10 md:px-0 px-2">
      <title>{`${t("blog.title")} | Mozzesdev`}</title>
      <div className="mb-5">
        <h1 className="text-4xl mb-2 text-zinc-800">Blog</h1>
        <p className="text-zinc-500 text-sm">{t("blog.des")}</p>
      </div>
      <div className="relative mb-8">
        <label
          className={`mb-4 relative border-zinc-600 border flex items-center ${
            focus && "!border-blue-500"
          }`}
          htmlFor="search"
        >
          <Search
            size={16}
            className={`absolute left-2 text-zinc-600 ${
              focus && "!text-blue-500"
            }`}
          />
          <span
            className={`absolute left-8 pt-[3px] pointer-events-none text-zinc-600 text-sm ${
              (focus || searchValue) && "opacity-0"
            }`}
          >
            {t("search.article")}
          </span>
          <input
            autoComplete="off"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => searchArticle(e.target.value)}
            type="text"
            id="search"
            className={`pr-2 pl-8 py-2 text-sm w-full outline-0 text-zinc-600 ${
              focus && "!text-blue-500"
            }`}
          />
        </label>
        <div className="flex gap-2">
          {categories
            .filter((cat) =>
              posts[language].some((post) => post.category === cat.name)
            )
            .map((category) => (
              <button
                key={category.id}
                onClick={() => filterArticlesByCategory(category.name)}
                className={`${
                  category.color
                } px-3.5 py-1.5 cursor-pointer rounded-full text-xs font-medium whitespace-nowrap transition-all
                    ${
                      selectedCategory === category.name
                        ? "ring-1 ring-offset-1 ring-blue-500"
                        : ""
                    }
                  `}
              >
                {category.name}
              </button>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((post) => (
          <article
            key={post.date}
            className="bg-white cursor-pointer relative rounded-lg hover:scale-[0.98] shadow-lg transition-all z-10 group"
          >
            <Link href={`/blog/${post.path}`}>
              <div className="border-bounce group-hover:!scale-[1.02] z-0 group-hover:!opacity-[1] rounded-lg"></div>
              <div className="content-border-bounce bg-[#f9fafb] rounded-lg h-full">
                <div className="relative h-48">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover rounded-t-lg w-full h-full"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        categories.find((c) => c.name === post.category)
                          ?.color || ""
                      }`}
                    >
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <time className="text-xs text-gray-500">{post.date}</time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
