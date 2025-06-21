import { Heart } from "lucide-react"; // install lucide-react OR use react-icons
import React, { useState } from "react";

const InstagramLikeHeart = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div style={{ fontSize: "3rem", cursor: "pointer" }} onClick={toggleLike}>
      <Heart
        fill={liked ? "red" : "none"} // fill if liked
        color={liked ? "red" : "gray"} // stroke color
        style={{ transition: "0.2s ease", width: "32px", height: "32px" }}
      />
    </div>
  );
};

export default InstagramLikeHeart;
