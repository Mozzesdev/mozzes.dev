import yo from "../assets/Yo.webp";
import { useTranslate } from "../i18n/useTranslate";

export function AboutMe() {
  const t = useTranslate();
  return (
    <section className="px-6 py-12 bg-gray-50 relative z-10" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-light mb-8">
          {t("about_me.about")}{" "}
          <span className="block ml-18 pt-2">{t("about_me.about_1")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30 gap-8">
          <div className="relative w-full h-full flex-shrink-0">
            <img
              src={yo}
              alt="About Me"
              className="object-cover w-full h-[90%]"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-zinc-800">
              Moisés Zambrano
            </h3>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-600">{t("about_me.available")}</span>
            </div>

            <p className="text-gray-600">{t("about_me.des")}</p>
            <div className="text-gray-600">
              <h4 className="font-semibold mb-2">{t("about_me.edu")}</h4>
              <ul className="space-y-2">
                <li>• {t("about_me.edu_1")}</li>
                <li>• {t("about_me.edu_2")}</li>
                <li>• {t("about_me.edu_3")}</li>
              </ul>
            </div>

            <button className="text-blue-600 hover:underline">
              <a href="/cv" target="_blank">
                {t("about_me.full_resume")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
