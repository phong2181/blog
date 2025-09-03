import React from "react";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4">Thông báo</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🔔 Bạn có 1 bình luận mới</li>
          <li>🔔 Bài viết bạn theo dõi vừa được cập nhật</li>
          <li>🔔 Có 3 người thích bài viết của bạn</li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationModal;
