import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Translation } from "../types";

interface Comment {
  id: number;
  text: string;
}

interface CommentSectionProps {
  t: Translation;
}

const CommentSection: React.FC<CommentSectionProps> = ({ t }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-10 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <MessageCircle className="w-5 h-5 mr-2" />
        {t.comments || "Comments"}
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={t.writeComment || "Write a comment..."}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {t.postComment || "Post Comment"}
        </button>
      </form>

      {/* Danh sách bình luận */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">{t.noComments || "No comments yet."}</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="p-3 border rounded-lg bg-gray-50">
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
