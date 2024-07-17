import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "Light-pollution-detection",
      link: "https://github.com/Williams-Ademola/Light-pollution-detection",
      description: "Measuring intensity of light pollution",
    },
    {
      repo: "nexxel.dev",
      link: "https://github.com/nexxeln/nexxel.dev",
      description: "Boring personal site built with Astro",
    },
    {
      repo: "Product-recommendation-system",
      link: "https://github.com/Williams-Ademola/Product-recommendation-system",
      description: "Using Java to analyze user behavior and preferences.",
    },
    {
      repo: "spotify-voice-control",
      link: "https://github.com/nexxeln/spotify-voice-control",
      description: "Voice control for Spotify through the terminal",
    },
    {
      repo: "hackernews",
      link: "https://github.com/nexxeln/hackernews",
      description: "Hacker News clone made with SolidStart and tRPC",
    },
    {
      repo: "dots",
      link: "https://github.com/nexxeln/dots",
      description: "My dotfiles for MacOS",
    },
    {
      repo: "File-Based-Router",
      link: "https://github.com/Williams-Ademola/File-Based-Router",
      description: "File based routing with Golang",
    },
  ];
}
