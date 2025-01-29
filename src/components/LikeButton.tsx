import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  postId: string;  
  username: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, username }) => {
  const [liked, setLiked] = useState(false);

  // Load likes for the specific user on mount
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    if (storedLikes[username]?.includes(postId)) {
      setLiked(true);
    }
  }, [postId, username]);

  // Toggle like state and update localStorage
  const toggleLike = () => {
    const storedLikes = JSON.parse(localStorage.getItem("likedPosts") || "{}");

    let userLikes = storedLikes[username] || [];
    if (liked) {
      userLikes = userLikes.filter((id: string) => id !== postId);
    } else {
      userLikes = [...userLikes, postId];
    }

    // Save updated likes
    localStorage.setItem(
      "likedPosts",
      JSON.stringify({ ...storedLikes, [username]: userLikes })
    );

    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${
        liked ? "text-red-500" : "text-gray-500"
      } hover:bg-gray-100`}
    >
      <Heart
        className={`w-6 h-6 transition-transform duration-300 ${
          liked ? "fill-red-500 scale-110" : "scale-100"
        }`}
        fill={liked ? "currentColor" : "none"}
      />
    </button>
  );
};

export default LikeButton;
