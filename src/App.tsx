import Layout from "./Layout";
import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import { useEffect } from "react";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="blog">
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Blog />
          </div>
        </Route>
        <Route path={`/blog/:id`}>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Article />
          </div>
        </Route>
        <Route path={`/projects`}>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Projects />
          </div>
        </Route>
        <Route path={`/projects/:id`}>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Project />
          </div>
        </Route>
        <Route path="*">
          {(params) => (
            <div className="max-w-6xl mx-auto min-h-[calc(100dvh-132px)] flex items-center justify-center">
              <p className="text-3xl mb-12 text-zinc-800">{`404, Sorry the page ${params["*"]} does not exist!`}</p>
            </div>
          )}
        </Route>
      </Switch>
    </Layout>
  );
}
