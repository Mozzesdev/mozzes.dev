import { languages } from "@/data/personal-info"

export function LanguagesAndHobbies() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Languages</h2>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex justify-between items-center">
                <span className="font-medium">{lang.name}</span>
                <span className="text-gray-600">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

