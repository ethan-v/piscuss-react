import React from "react";
import PostItem from "../components/Post/PostItem";

function HomePage() {

  // fake posts
  let posts: Array<any> = [];

  for (let i = 0; i < 15; i++) {
    posts.push({
      id: i,
      title: "How to add dynamic model",
      content: "Hi I want to make username as encrypted while storing data to the database using mutator. But I'm unable to decrypt user name using accessor . How I can store encrypted data to the table and get original data at the time of retrieval using accessors and mutators",
      created_at: "",
      posted_at: "2 hours ago",
      replied_at: "2 hours ago",
      replied_by: "ethanv",
      view_count: 25,
      reply_count: 5,
      topic: {
        name: "Django",
      },
      author: {
        name: "Ethan V",
        level: 3,
        avatar: "/images/no-avatar.png",
      },
      leader_board: {
        top: 10,
      }
    });
    
  }
  

  const postList = posts.map(post => {
    console.log("post: ", post)
    return <PostItem {...post} key={post.id} />
  });

  return (
    <div>
      {postList}
    </div>
  );
}

export default HomePage