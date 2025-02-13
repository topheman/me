import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/topheman/repos?per_page=100", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add your GitHub token here if you have rate limiting issues
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos")
    }

    const repos = await response.json()
    const repoData = repos.map((repo: any) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }))

    return NextResponse.json(repoData)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub repos" }, { status: 500 })
  }
}

