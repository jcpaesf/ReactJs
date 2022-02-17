import { useState, useEffect } from "react";
import { IPostProps } from "./components/Post";

import api from "./services/api";

const useApp = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api.get<IPostProps[]>("/posts");

      setPosts(data);
    }

    getPosts();
  }, []);

  return {
    posts,
  };
};

export default useApp;
