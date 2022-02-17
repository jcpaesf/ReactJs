import React from "react";
import "./postcomment.scss";

export interface IPostCommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostComment = ({ name, email, body }: IPostCommentProps) => {
  return (
    <div className="postcomment">
      <div className="postcomment--detail">
        <div className="postcomment--detail--nh">
          <span className="postcomment--detail--nh--title">{email}</span>

          <span className="postcomment--detail--nh--hour">15:38</span>
        </div>
        <div className="postcomment--detail--body">
          <span>{body}</span>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
