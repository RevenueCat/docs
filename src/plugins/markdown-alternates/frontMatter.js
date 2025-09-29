function escapeYaml(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  const strValue = String(value).replace(/"/g, '\\"');
  return `"${strValue}"`;
}

function serializeArray(key, values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "";
  }

  const filtered = values
    .map((value) => escapeYaml(value))
    .filter((value) => value !== "");

  if (!filtered.length) {
    return "";
  }

  const serialized = filtered.map((value) => `  - ${value}`).join("\n");

  return `${key}:\n${serialized}`;
}

export function createFrontMatterBlock(frontMatter) {
  const lines = [];

  for (const [key, value] of Object.entries(frontMatter)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      const serializedArray = serializeArray(key, value);
      if (serializedArray) {
        lines.push(serializedArray);
      }
      continue;
    }

    const escaped = escapeYaml(value);
    if (escaped === "") {
      continue;
    }
    lines.push(`${key}: ${escaped}`);
  }

  if (!lines.length) {
    return "";
  }

  return `---\n${lines.join("\n")}\n---\n\n`;
}
