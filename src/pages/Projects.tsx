import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const Projects = () => {
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);
  const { language } = useLanguage();
  const [proje, setProje] = useState(projects[language]);

  useEffect(() => {
    setProje(projects[language]);
  }, [language]);

  const filterArticles = (query: string) => {
    let filtered = projects[language];

    if (query) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setProje(filtered);
  };

  const searchArticle = (query: string) => {
    setSearchValue(query);
    filterArticles(query);
  };

  return (
    <main className="mx-auto py-4 mb-10 md:px-0 px-2">
      <title>Projects | Mozzesdev</title>
      <div className="mb-5">
        <h1 className="text-4xl mb-2 text-zinc-800">Projects</h1>
        <p className="text-zinc-500 text-sm">
          Sharing thoughts and experiences about technology and development
        </p>
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
            Search article
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
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {proje.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}
            className="group block bg-white relative rounded-lg hover:scale-[0.98] shadow-lg transition-all z-10"
          >
            <div className="border-bounce group-hover:!scale-[1.01_1.05] z-0 group-hover:!opacity-[1] rounded-lg"></div>
            <div className="flex bg-white content-border-bounce items-center space-x-4 rounded-lg p-3">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="rounded-lg w-30 h-20 object-cover"
              />
              <div className="space-y-1 truncate">
                <h2 className="text-lg font-medium truncate">
                  {project.title}
                </h2>
                <p className="text-[#666666] truncate w-full text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
