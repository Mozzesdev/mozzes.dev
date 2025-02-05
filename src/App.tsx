import Layout from "./Layout";
import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import { useEffect } from "react";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import PdfView from "./pages/PdfView";

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/cv" component={PdfView} />
      <Route path="blog">
        <Layout>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Blog />
          </div>
        </Layout>
      </Route>
      <Route path={`/blog/:id`}>
        <Layout>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Article />
          </div>
        </Layout>
      </Route>
      <Route path={`/projects`}>
        <Layout>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Projects />
          </div>
        </Layout>
      </Route>
      <Route path={`/projects/:id`}>
        <Layout>
          <div className="max-w-6xl mx-auto min-h-[calc(100dvh-76px)]">
            <Project />
          </div>
        </Layout>
      </Route>
      <Route path="*">
        {(params) => (
          <Layout>
            <div className="max-w-6xl mx-auto min-h-[calc(100dvh-132px)] flex items-center justify-center">
              <p className="text-3xl mb-12 text-zinc-800">{`404, Sorry the page ${params["*"]} does not exist!`}</p>
            </div>
          </Layout>
        )}
      </Route>
    </Switch>
  );
}
