import React from "react";
import "./post.scss";

import pictureImg from "../../assets/images/picture.png";
import usePost from "./usePost";
import PostComment from "../PostComment";

export interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = ({ id, title, body }: IPostProps) => {
  const { comments, showComments, setShowComments, handleGetComments } =
    usePost({ postId: id });

  return (
    <div
      className={`${!showComments ? "hover" : ""} ${
        showComments && "alignImageWhenShowComment"
      } posts`}
    >
      <div className="posts--image">
        <img src={pictureImg} alt="User profile" />
      </div>
      <div className="posts--detail">
        <div className="posts--detail--nh">
          <span className="posts--detail--nh--title">{title}</span>

          <span className="posts--detail--nh--hour">15:38</span>
        </div>
        <div className="posts--detail--body">
          <span>{body}</span>
        </div>
        {showComments &&
          comments.map((comment) => (
            <PostComment key={comment.id} {...comment} />
          ))}
        <button
          className="posts--detail--loadcomments"
          onClick={
            showComments ? () => setShowComments(false) : handleGetComments
          }
        >
          {showComments ? "Hide comments" : "Load comments"}
        </button>
      </div>
    </div>
  );
};

export default Post;
