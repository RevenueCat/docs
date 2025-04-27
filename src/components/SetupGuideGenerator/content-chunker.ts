import { DocChunk } from "./types";
import fs from "fs";
import path from "path";

export class ContentChunker {
  private docsPath: string;
  private chunks: DocChunk[] = [];

  constructor(docsPath: string) {
    this.docsPath = docsPath;
  }

  async loadChunks(): Promise<DocChunk[]> {
    try {
      await this.processDirectory(this.docsPath);
      return this.chunks;
    } catch (error) {
      console.error("Error loading chunks:", error);
      throw error;
    }
  }

  private async processDirectory(dirPath: string): Promise<void> {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await this.processDirectory(fullPath);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
      ) {
        await this.processFile(fullPath);
      }
    }
  }

  private async processFile(filePath: string): Promise<void> {
    try {
      const content = await fs.promises.readFile(filePath, "utf-8");
      const relativePath = path.relative(this.docsPath, filePath);

      // Extract platform information from the file path
      const platforms = this.extractPlatformsFromPath(relativePath);

      // Extract tags from content (you might want to enhance this based on your needs)
      const tags = this.extractTagsFromContent(content);

      const chunk: DocChunk = {
        id: this.generateChunkId(relativePath),
        content: this.cleanContent(content),
        path: relativePath,
        platform: platforms,
        tags: tags,
      };

      this.chunks.push(chunk);
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }

  private extractPlatformsFromPath(filePath: string): string[] {
    const platforms = ["ios", "android", "react-native", "flutter", "web"];
    return platforms.filter((platform) =>
      filePath.toLowerCase().includes(platform),
    );
  }

  private extractTagsFromContent(content: string): string[] {
    // This is a simple implementation. You might want to enhance this
    // based on your documentation structure and needs
    const tags: string[] = [];

    // Look for common tags in the content
    if (content.includes("backend")) tags.push("backend");
    if (content.includes("api")) tags.push("api");
    if (content.includes("sdk")) tags.push("sdk");
    if (content.includes("setup")) tags.push("setup");
    if (content.includes("configuration")) tags.push("configuration");

    return tags;
  }

  private cleanContent(content: string): string {
    // Remove frontmatter if present
    content = content.replace(/^---[\s\S]*?---/, "");

    // Remove HTML comments
    content = content.replace(/<!--[\s\S]*?-->/g, "");

    // Remove code blocks (we'll handle them separately if needed)
    content = content.replace(/```[\s\S]*?```/g, "");

    // Clean up extra whitespace
    content = content.replace(/\s+/g, " ").trim();

    return content;
  }

  private generateChunkId(filePath: string): string {
    return Buffer.from(filePath).toString("base64");
  }

  // Helper method to find relevant chunks based on context
  findRelevantChunks(context: {
    platforms?: string[];
    tags?: string[];
    searchTerm?: string;
  }): DocChunk[] {
    return this.chunks.filter((chunk) => {
      // Check platform match
      if (context.platforms && context.platforms.length > 0) {
        if (
          !chunk.platform ||
          !chunk.platform.some((p) => context.platforms!.includes(p))
        ) {
          return false;
        }
      }

      // Check tag match
      if (context.tags && context.tags.length > 0) {
        if (!chunk.tags || !chunk.tags.some((t) => context.tags!.includes(t))) {
          return false;
        }
      }

      // Check search term match
      if (context.searchTerm) {
        return chunk.content
          .toLowerCase()
          .includes(context.searchTerm.toLowerCase());
      }

      return true;
    });
  }
}
