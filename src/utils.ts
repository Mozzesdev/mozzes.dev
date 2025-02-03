export function highlightCode(code: string): string {
    const keywords = new Set([
      "function",
      "const",
      "let",
      "var",
      "return",
      "if",
      "else",
      "for",
      "while",
      "switch",
      "case",
      "break",
      "default",
      "import",
      "export",
      "class",
      "mkdir",
      "cd",
      "npm",
      "extends",
      "super",
      "new",
      "this",
      "public",
      "private",
      "protected",
      "static",
      "readonly",
      "as",
      "async",
      "await",
      "try",
      "catch",
      "finally",
      "throw",
      "typeof",
      "instanceof",
      "interface",
      "implements",
      "enum",
      "namespace",
      "declare",
      "type",
      "from",
    ]);
  
    let result = "";
    let inString = false;
    let inComment = false;
    let buffer = "";
    let quoteChar = "";
    let lastKeyword = ""; // Para rastrear la última palabra clave (const, let, var)
  
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const nextChar = code[i + 1];
  
      if (inString) {
        buffer += char;
        if (char === quoteChar) {
          result += `<span class="string">${buffer}</span>`;
          buffer = "";
          inString = false;
        }
        continue;
      }
  
      if (inComment) {
        buffer += char;
        if (char === "\n") {
          result += `<span class="comment">${buffer}</span>`;
          buffer = "";
          inComment = false;
        }
        continue;
      }
  
      if (char === '"' || char === "'" || char === "`") {
        inString = true;
        quoteChar = char;
        buffer = char;
        continue;
      }
  
      if (char === "/" && nextChar === "/") {
        inComment = true;
        buffer = "//";
        i++;
        continue;
      }
  
      if (/\w/.test(char)) {
        buffer += char;
      } else {
        if (buffer.length > 0) {
          if (keywords.has(buffer)) {
            // Si es una palabra clave, guardamos la última palabra clave
            lastKeyword = buffer;
            result += `<span class="keyword">${buffer}</span>`;
          } else if (/^\d+(\.\d+)?$/.test(buffer)) {
            result += `<span class="number">${buffer}</span>`;
          } else if (code[i] === '(') { // Detecta si el buffer es seguido por un paréntesis abierto
            result += `<span class="function">${buffer}</span>`;
          } else if (lastKeyword === "const") {
            // Si la última palabra clave fue 'const', aplicar la clase .const
            result += `<span class="const">${buffer}</span>`;
            lastKeyword = ""; // Reiniciamos la última palabra clave
          } else if (lastKeyword === "let" || lastKeyword === "var") {
            // Si la última palabra clave fue 'let' o 'var', aplicar la clase .property
            result += `<span class="property">${buffer}</span>`;
            lastKeyword = ""; // Reiniciamos la última palabra clave
          } else {
            result += buffer;
          }
          buffer = "";
        }
        result += char;
      }

      // Detectar asignaciones de funciones flecha
      if (buffer.endsWith("=>")) {
        const funcName = buffer.slice(0, -2).trim();
        if (funcName.length > 0) {
          result = result.slice(0, -buffer.length); // Elimina el nombre de la función del resultado
          result += `<span class="function">${funcName}</span> =>`;
          buffer = "";
        }
      }
    }
  
    if (buffer.length > 0) {
      if (lastKeyword === "const") {
        result += `<span class="const">${buffer}</span>`;
      } else if (lastKeyword === "let" || lastKeyword === "var") {
        result += `<span class="property">${buffer}</span>`;
      } else {
        result += buffer;
      }
    }
  
    return result;
  }