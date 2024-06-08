import getPostMetadata from "@/utils/getPostMetadata";
import styles from "./page.module.css";
import PostCard from "@/components/post-card/PostCard";

export default function Home() {
  const postMetaData = getPostMetadata("blog-posts");
  return (
    <main>
      <div className={styles.container}>
        {postMetaData.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
