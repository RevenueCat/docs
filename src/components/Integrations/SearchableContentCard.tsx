import { useState } from "react";
import { ContentCardItemProvider } from "../ContentCardItem/ContentCardItem";
import { ContentCardItemProps } from "../ContentCardItem/ContentCardItem";

interface SearchableContentProviderProps {
  content: ContentCardItemProps[];
}

export const SearchableContentProvider = ({
  content,
}: SearchableContentProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProviders = content.filter((provider) =>
    provider.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search providers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      {filteredProviders.map((provider, index) => (
        <ContentCardItemProvider key={index} {...provider} />
      ))}
    </div>
  );
};
