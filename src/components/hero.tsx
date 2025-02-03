import { Linkedin } from "lucide-react";
import yo from "@/assets/Yo.jpg";
import Java from "@/icons/Java";
import TS from "@/icons/Ts";
import Python from "@/icons/Python";

export function Hero() {
  const name = "Moisés Zambrano";
  return (
    <section className="px-2 py-12 md:px-6 relative z-10">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center h-[410px] justify-between relative gap-5 md:mb-14">
          <div
            className="absolute left-[5%] bottom-[10%] md:left-[10%] md:bottom-[15%] lg:left-[3rem] lg:-bottom-[3rem] z-[9] entrance-levitate block"
            style={{ animationDelay: "2s" }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 group">
              <div className="absolute cursor-pointer inset-1 bg-[#e4e4e4d0] group-hover:-inset-2 transition-all duration-200 rounded-full" />
              <div
                className="absolute -inset-[10vw] md:-inset-60 border border-gray-300 opacity-40 rounded-full
                    transition-all duration-200 transform-gpu group-hover:-inset-10 origin-center pointer-events-none"
              />
              <div className="cursor-pointer absolute inset-0 flex items-center justify-center">
                <Java className="w-8 h-8 md:w-11 md:h-11" />
              </div>
            </div>
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[5%] md:top-[15%] lg:left-[28rem] lg:top-0 z-[9] entrance-levitate block"
            style={{ animationDelay: "3s" }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 group">
              <div className="absolute cursor-pointer inset-1 bg-[#ffe58e] opacity-40 group-hover:-inset-2 transition-all duration-200 rounded-full" />
              <div
                className="absolute -inset-[15vw] md:-inset-40 border border-gray-300 opacity-40 rounded-full
                    transition-all duration-200 transform-gpu group-hover:-inset-10 origin-center pointer-events-none"
              />
              <div className="cursor-pointer absolute inset-0 flex items-center justify-center">
                <Python className="w-7 h-7 md:w-10 md:h-10" />
              </div>
            </div>
          </div>
          <div
            className="absolute right-[5%] bottom-[15%] md:right-[10%] md:bottom-[20%] lg:left-[45rem] lg:bottom-[4rem] z-[9] entrance-levitate block"
            style={{ animationDelay: "2.5s" }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 group flex items-center justify-center">
              <div className="absolute cursor-pointer inset-1 z-[9] bg-[#0044d0] opacity-40 group-hover:-inset-2 transition-all duration-200 rounded-full" />
              <div
                className="absolute -inset-[20vw] md:-inset-90 border border-gray-300 opacity-40 rounded-full
                    transition-all duration-200 transform-gpu group-hover:-inset-10 origin-center pointer-events-none"
              />
              <span className="cursor-pointer inline-block relative z-10 h-[1.5rem] md:h-[2rem] bg-white">
                <TS className="w-6 h-7 md:w-8 md:h-9 pb-1" />
              </span>
            </div>
          </div>
          <div className="space-y-8">
            <p
              className="text-gray-600 letter-entrance"
              style={{ animationDelay: "1s" }}
            >
              <span className="animate-wave-hand">👋</span> Hello there! I am
            </p>
            <h1 className="text-6xl md:text-7xl font-bold break-keep whitespace-normal relative z-10">
              {name.split(" ").map((word, wordIndex, wordsArray) => {
                // Calculamos el índice inicial acumulativo de letras
                const startingLetterIndex = wordsArray
                  .slice(0, wordIndex)
                  .reduce((acc, currWord) => acc + currWord.length, 0);

                return (
                  <span
                    key={wordIndex}
                    className="inline-block [word-break:keep-all] [overflow-wrap:break-word]"
                  >
                    {word.split("").map((letter, letterIndex) => {
                      // Índice global = letras anteriores + índice actual
                      const globalIndex = startingLetterIndex + letterIndex;

                      return (
                        <span
                          key={letterIndex}
                          className="relative inline-block group letter-entrance"
                          style={{ animationDelay: `${globalIndex * 0.1}s` }} // Usamos índice global
                        >
                          {letter === " " ? (
                            <span className="inline-block w-4">&nbsp;</span>
                          ) : (
                            <>
                              <span className="group-hover:-translate-y-1.5 text-g-blue group-hover:duration-150 inline-block transition duration-500 relative z-[1]">
                                {letter}
                              </span>
                              <span className="absolute inset-0 z-0 inline-block text-blue-900">
                                {letter}
                              </span>
                            </>
                          )}
                        </span>
                      );
                    })}
                    {/* Espacio entre palabras */}
                    {wordIndex !== wordsArray.length - 1 && (
                      <span className="inline-block w-4" />
                    )}
                  </span>
                );
              })}
            </h1>
            <p
              className="text-gray-600 max-w-xl animate-entrance"
              style={{ animationDelay: "1s" }}
            >
              Experienced Full Stack Developer with over 3 years of expertise in
              designing, developing, and deploying end-to-end web solutions.
              Proficient in both frontend and backend development, with a strong
              command of modern frameworks, RESTful API integration, and
              database architectures.
            </p>
            <div
              className="flex gap-4 animate-entrance"
              style={{ animationDelay: "1.3s" }}
            >
              <a href="#contact">
                <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Let's Talk
                </button>
              </a>
              <a
                href="https://linkedin.com/in/mozzesdev/"
                className="w-[40px] flex items-center justify-center h-[40px] rounded-full border hover:bg-gray-50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
          <div
            className="relative w-64 h-64 animate-entrance hidden md:block z-10"
            style={{ animationDelay: "1.1s" }}
          >
            <img
              src={yo}
              alt="Profile"
              className="rounded-full w-full h-full object-cover border border-blue-600 levitate shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
