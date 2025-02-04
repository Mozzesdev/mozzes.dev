import yo from "../assets/Yo.webp";

export function AboutMe() {
  return (
    <section className="px-6 py-12 bg-gray-50 relative z-10" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-light mb-8">
          About <span className="block ml-18 pt-2">Me</span>
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
              <span className="text-gray-600">Available for work</span>
            </div>

            <p className="text-gray-600">
              Full Stack Developer with 3+ years of experience building web
              applications. Specialized in React, Angular, and Node.js, focused
              on creating intuitive interfaces and scalable systems. I combine
              functional design with robust technical solutions.
            </p>
            <div className="text-gray-600">
              <h4 className="font-semibold mb-2">Education:</h4>
              <ul className="space-y-2">
                <li>
                  • Systems Engineering - Margarita University (2019-2022)
                </li>
                <li>• Master's in Web Development - JS/MySQL projects</li>
                <li>• Full Stack Bootcamp - 100+ hours in React/Node.js</li>
              </ul>
            </div>

            <button className="text-blue-600 hover:underline">
              View Full Resume →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
