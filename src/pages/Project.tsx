import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/useLanguage";
import { ArrowLeft, Dock, Github } from "lucide-react";
import { Link, Redirect, useRoute } from "wouter";

const Project = () => {
  const [, params] = useRoute("/projects/:id");
  const { language } = useLanguage();
  const tProjects = projects[language];
  const project = tProjects.find(
    (post) => post.title.toLowerCase().replace(/ /g, "-") === params?.id
  );

  if (!project) {
    return <Redirect to="/404" />;
  }

  return (
    <section className="mb-10">
      <title>{`${project?.title} | Mozzesdev`}</title>
      <div className="w-full relative h-[300px]">
        <Link href="/projects">
          <button
            title="Go back"
            className="absolute top-4 left-4 z-10 bg-white p-1 rounded-full shadow-lg cursor-pointer hover:scale-[1.1] transition-transform"
          >
            <ArrowLeft size={20} className="text-blue-500" />
          </button>
        </Link>
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="py-3">
        <div className="flex gap-3 my-3 mb-5">
          <a href={project.repo!} target="_blank">
            <button className="cursor-pointer flex gap-2 h-full items-center px-5 py-2 border-blue-400 border text-blue-500 hover:text-white hover:bg-blue-500 text-sm transition-colors">
              <Github className="w-4.5" />
              Repo
            </button>
          </a>
          <a href={project.link!} target="_blank">
            <button className="cursor-pointer flex h-full gap-2 items-center px-5 py-1 border-blue-400 border text-blue-500 hover:text-white hover:bg-blue-500 text-sm transition-colors">
              <Dock className="w-4.5" />
              Project
            </button>
          </a>
        </div>
        <h1 className="text-2xl text-zinc-800 font-semibold mb-2">
          {project?.title}
        </h1>
        <p className="text-zinc-700 ">{project.description}</p>
        {/* <time className="text-blue-500 text-sm mb-2 block">{project?.}</time> */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: project?.content ?? "" }}
        ></div>
      </div>
    </section>
  );
};

export default Project;
