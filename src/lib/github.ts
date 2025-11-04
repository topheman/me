export async function getGithubRepos(
  pages: number = 1,
): Promise<{ name: string; stars: number }[]> {
  const fetcher = function (page: number) {
    return fetch(
      `https://api.github.com/users/topheman/repos?per_page=100&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      },
    );
  };

  const repos = await Promise.all(
    Array.from({ length: pages }, (_, i) => fetcher(i + 1)),
  );

  const data = await Promise.all(
    repos.map(async (repo) => {
      if (!repo.ok) {
        throw new Error("Failed to fetch repos");
      }
      const data = (await repo.json()) as {
        name: string;
        stargazers_count: number;
      }[];
      return data.map((repo: any) => ({
        name: repo.name,
        stars: repo.stargazers_count,
      }));
    }),
  );

  return data.flat();
}
