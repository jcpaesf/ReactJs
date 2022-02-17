import React from "react";
import Post from "./components/Post";
import useApp from "./useApp";

import "./app.scss";
import "./styles/global.scss";

const App = () => {
  const { posts } = useApp();

  return (
    <div className="page">
      <div className="containerPosts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;
