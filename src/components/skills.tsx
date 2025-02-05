import { useState, useRef } from "react";
import { FileJson, Database, GitBranch } from "lucide-react";
import { useTranslate } from "../i18n/useTranslate";

type Skill = {
  id: string;
  name: string;
};

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React" },
    { id: "2", name: "Angular" },
    { id: "3", name: "Node" },
    { id: "4", name: "Java" },
    { id: "5", name: "SQL" },
    { id: "6", name: "HTML" },
    { id: "7", name: "CSS" },
    { id: "8", name: "Git" },
    { id: "9", name: "Electron" },
  ]);

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [targetId, setTargetId] = useState<string | null>(null);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const t = useTranslate();

  const skillIcons = {
    React: <div className="w-5 h-5 mr-2">⚛️</div>,
    Angular: <div className="w-5 h-5 mr-2">🅰️</div>,
    Electron: <div className="w-5 h-5 mr-2">⚛️</div>,
    Node: <FileJson className="w-5 h-5 mr-2" />,
    Java: <div className="w-5 h-5 mr-2">☕</div>,
    SQL: <Database className="w-5 h-5 mr-2" />,
    HTML: <div className="w-5 h-5 mr-2">📄</div>,
    CSS: <div className="w-5 h-5 mr-2">🎨</div>,
    Git: <GitBranch className="w-5 h-5 mr-2" />,
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragItem.current = position;
    setDraggingId(skills[position].id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setDragImage(new Image(), 0, 0); // Elimina la imagen fantasma
  };

  const handleDragEnter = (
    _e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragOverItem.current = position;
    setTargetId(skills[position].id);
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const newSkills = [...skills];
      const draggedItem = newSkills[dragItem.current];

      // Animación de intercambio
      newSkills.splice(dragItem.current, 1);
      newSkills.splice(dragOverItem.current, 0, draggedItem);

      setSkills(newSkills);
    }

    // Reset con transición
    setTimeout(() => {
      dragItem.current = null;
      dragOverItem.current = null;
      setDraggingId(null);
      setTargetId(null);
    }, 300); // Coincide con la duración de la transición
  };

  return (
    <section className="px-6 py-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-light mb-8">{t("skills.title")}</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDragEnd}
              className={`px-4 py-2 bg-white text-blue-600 rounded-full 
                border border-blue-100/50 shadow-sm hover:shadow-md 
                flex items-center cursor-grab 
                transition-all duration-300 ease-in-out
                ${
                  draggingId === skill.id
                    ? "scale-110 opacity-50 shadow-lg"
                    : "opacity-100"
                }
                ${
                  targetId === skill.id
                    ? "border-blue-500 scale-105 bg-blue-50 transition-border duration-150"
                    : ""
                }`}
            >
              {skillIcons[skill.name as keyof typeof skillIcons]}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
