import { useState, useCallback } from "react";
import { IPostCommentProps } from "../PostComment";

import api from "../../services/api";

interface IUsePostProps {
  postId: number;
}

const usePost = ({ postId }: IUsePostProps) => {
  const [comments, setComments] = useState<IPostCommentProps[]>([]);
  const [showComments, setShowComments] = useState(false);

  const handleGetComments = useCallback(async () => {
    const { data } = await api.get("/comments", {
      params: {
        postId,
      },
    });

    setComments(data);
    setShowComments(true);
  }, [postId]);

  return {
    comments,
    showComments,
    setShowComments,
    handleGetComments,
  };
};

export default usePost;
