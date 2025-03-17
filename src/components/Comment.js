import React from "react";

const comments = [
  {
    id: 1,
    username: "RAZ",
    time: "2 week ago",
    text: "#nasionalisme",
    replies: [
      {
        id: 2,
        username: "Bukan agent shell",
        time: "1 week ago",
        text: "Shell terbaik",
        replies: [],
      },
      {
        id: 3,
        username: "かわい子ちゃん",
        time: "1 week ago",
        text: "ジョコウィ100期",
        replies: [
          {
            id: 3,
            username: "The ***** destroyer",
            time: "2 days ago",
            text: "**** ***** **** **** *** ***? ******",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        username: "The ***** destroyer",
        time: "2 days ago",
        text: "Pra**** *****",
        replies: [],
      },
    ],
  },
];

const Comment = ({ comment }) => {
  return (
    <div className="ml-4 pl-4">
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-semibold">
              {comment.username}
            </p>
            <span className="sm:text-xs text-[8px] text-gray-400 ml-auto">
              {comment.time}
            </span>
          </div>
          <div className="bg-gray-800 text-white rounded p-2 mt-1 text-sm">
            {comment.text}
          </div>
          <div className="flex items-center gap-4 mt-1 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <i className="fas fa-heart text-xs"></i> <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fas fa-arrow-down text-xs"></i> <span>0</span>
            </div>
            <button className="text-xs text-gray-400 mt-1">Reply</button>
            <i className="fas fa-ellipsis-v ml-2 cursor-pointer ml-auto mr-[10px]"></i>
          </div>
          <div className="mt-2">
            <div className="flex gap-2 mt-2">
              <button className="text-xs text-gray-400 mt-1">Reply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} />
        ))}
      </div>
    </div>
  );
};

const CommentThread = () => {
  return (
    <div className=" p-6 min-h-screen text-white ml-[-19px]">
      <hr />
      <h2 className="text-lg font-bold font-serif my-[10px]">COMMENT</h2>
      <hr className="mb-4" />
      <div className="ml-[-32px]">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentThread;
