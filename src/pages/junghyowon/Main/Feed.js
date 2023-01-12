import React, { useState } from 'react';

const Feed = props => {
  const { feed } = props;
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const commentActive = commentInput.length > 5;

  const saveCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const handleClickBtn = () => {
    setCommentList([...commentList, commentInput]);
    setCommentInput('');
  };

  return (
    <>
      <div className="feed-image-top">
        <div className="user-profile" />
        <img alt="user-profile-image" src={feed.userImg} />
        <span>{feed.userName}</span>
        <div className="feed-image-top-more">
          <img alt="feed-viewmore" src="/images/junghyowon/viewmore.png" />
        </div>
      </div>
      <div className="feed-image">
        <img alt="feed-image" src={feed.feedImg} />
      </div>
      <div className="mainfeed-comment-top">
        <img alt="comment-icon" src="/images/junghyowon/heart.png" />
        <img alt="comment-icon" src="/images/junghyowon/message.png" />
        <img alt="comment-icon" src="/images/junghyowon/dm.png" />
        <div className="bookmark">
          <img alt="bookmark" src="/images/junghyowon/bookmark.png" />
        </div>
      </div>
      <div className="feed-comment-main">
        <div className="comment-my">
          <p>좋아요 {feed.likeNum}</p>
          <span>{feed.userName}</span>
          <span>{feed.feedText}</span>
          <ul>
            {commentList.map((comment, index) => {
              return (
                <li key={index}>
                  <span className="my-comment-name">renebaebae</span>
                  {comment}
                </li>
              );
            })}
          </ul>
          <span className="feed-time">{feed.feedTime}</span>
        </div>
        <div className="comment-write">
          <img alt="emogi" src="/images/junghyowon/emogi.png" />
          <input
            className="comment-input"
            type="text"
            placeholder="댓글 달기..."
            value={commentInput}
            onChange={saveCommentInput}
          />
          <button
            className={commentActive ? 'comment-push' : 'comment-nonepush'}
            type="button"
            onClick={handleClickBtn}
          >
            게시
          </button>
        </div>
      </div>
    </>
  );
};

export default Feed;
