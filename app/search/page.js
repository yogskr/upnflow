import Link from 'next/link';
import { SearchUtil } from '../../utils/searchUtil';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || '';
  const posts = await SearchUtil(query);

  return (
    <main>
      <h2>Search Results</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </main>
  );
}
