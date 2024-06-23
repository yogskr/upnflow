import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export async function SearchUtil(query) {
  try {
    const fileNames = fs.readdirSync(blogsDirectory);

    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const markdownFile = fs.readFileSync(
          path.join(blogsDirectory, fileName),
          'utf8'
        );
        const { data: frontMatter } = matter(markdownFile);

        return {
          slug: fileName.replace('.mdx', ''),
          title: frontMatter.title,
          summary: frontMatter.summary,
          date: frontMatter.date,
        };
      })
      .filter((post) => {
        const searchTerms = query.split(' ');
        return searchTerms.every((term) =>
          [post.title, post.summary]
            .join(' ')
            .toLowerCase()
            .includes(term.toLowerCase())
        );
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return posts;
  } catch (error) {
    console.error('Error retrieving search results:', error);
    return [];
  }
}
