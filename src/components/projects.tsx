import { projects } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { Link } from "wouter";
import { useTranslate } from "../i18n/useTranslate";

export function Projects() {
  const { language } = useLanguage();
  const t = useTranslate();
  const tProjects = projects[language];
  return (
    <section className="px-6 py-12 bg-gray-50 relative z-10" id="portfolio">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute left-0 top-0">
          <h2 className="text-5xl mb-4 text-zinc-800 font-light overflow-hidden">
            {t("projects.featured")} <span className="block ml-16 pt-2">{t("projects.featured_2")}</span>
          </h2>
          <p className="text-zinc-500 mb-6 text-sm">
            {t("projects.featured_3")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {tProjects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              key={project.title}
              className="group block h-fit first:mt-[11rem] cursor-pointer relative z-10 rounded-xl hover:scale-[0.98] transition-all"
            >
              <Link
                href={`projects/${project.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <div className="border-bounce group-hover:!scale-[1.02] z-0 group-hover:!opacity-[1] rounded-xl"></div>
                <div className="content-border-bounce bg-[#f9fafb] rounded-xl">
                  <div
                    className={`relative ${
                      index === 1 || index === 2 ? "h-[35rem]" : "h-96"
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover object-top w-full h-full rounded-t-xl"
                    />
                  </div>
                  <div className="py-6 group-hover:px-3 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-2xl text-zinc-700 font-bold group-hover:translate-x-2 transition duration-300">
                        {project.title}
                      </h3>
                      <span className="group-hover:text-white relative text-zinc-800 transition-colors group-hover:scale-[1.2] rounded-full p-1.5 duration-100 ease-out">
                        <ArrowRight className="group-hover:-rotate-45 transition-all duration-500 w-7 h-7 relative z-[2]" />
                        <div className="absolute inset-0 scale-0 bg-g-blue group-hover:scale-[1] transition-all duration-500 rounded-full z-[1]"></div>
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs mb-3 group-hover:translate-x-2 duration-1000">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 pb-1 pt-2 rounded-full transition-all text-xs text-blue-600 border border-blue-600 hover:scale-[1.1] group-hover:bg-blue-600 group-hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
