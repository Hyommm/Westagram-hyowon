import React, { useEffect } from 'react';
import { useState } from 'react';
import Feed from './Feed';
import './JungMain.scss';

function JungMain() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/junghyowon/feedList.json')
      .then(response => response.json())
      .then(result => {
        setFeedList(result);
      });
  }, []);

  return (
    <>
      {/*헤더*/}
      <nav className="nav-icon">
        <img className="logo" alt="logo" src="/images/junghyowon/logo.png" />
        <img alt="home" src="/images/junghyowon/home.png" />
        <img alt="search" src="/images/junghyowon/search.png" />
        <img alt="camposs" src="/images/junghyowon/camposs.png" />
        <img alt="dm" src="/images/junghyowon/dm.png" />
        <img alt="heart" src="/images/junghyowon/heart.png" />
        <img
          className="myprofile"
          alt="my profile"
          src="/images/junghyowon/friend1.jpg"
        />
        <div className="moreview-img">
          <img
            className="moreview"
            alt="moreview"
            src="/images/junghyowon/moreview.png"
          />
        </div>
      </nav>
      <div className="mainfeed-container">
        {/* 메인 이미지 피드 */}
        <article>
          {feedList.map(feed => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </article>
        {/* 피드 오른쪽 부분 */}
        <div className="main-feed-right">
          <div className="myprofile-right">
            <img
              className="imageround"
              alt="myprofile"
              src="/images/junghyowon/friend1.jpg"
            />
            <div className="myprofile-name">
              <p>renebaebae</p>
              <p className="myname">배주현</p>
            </div>
            <div className="myprofile-modify">
              <span>전환</span>
            </div>
          </div>
          <div className="recommand">
            <span className="my-recommand">회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/profile.jpeg" />
            <div className="friend-name">
              <p className="followfriend-name">seumseu</p>
              <span>회원님을 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/99uri.png" />
            <div className="friend-name">
              <p className="followfriend-name">a999o999s</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/sowhat.jpg" />
            <div className="friend-name">
              <p className="followfriend-name">dindu___u</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/profile1.jpeg" />
            <div className="friend-name">
              <p>hyommm_</p>
              <span>jhdaijh님과 jhartjh님이 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <ul className="footer-info">
            {FOOTER_INFO_LIST.map(infoList => {
              return (
                <li key={infoList.id}>
                  <a href={infoList.link}>{infoList.text}</a>
                </li>
              );
            })}
          </ul>
          <p className="cop">ⓒ 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
}

export default JungMain;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.instagram.com/', text: '소개' },
  { id: 2, link: 'https://help.instagram.com/', text: '도움말' },
  { id: 3, link: 'https://about.instagram.com/blog', text: '홍보 센터' },
  {
    id: 4,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  {
    id: 5,
    link: 'https://about.instagram.com/about-us/careers',
    text: '채용 정보',
  },
  {
    id: 6,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침',
  },
  { id: 7, link: 'https://help.instagram.com/581066165581870/', text: '약관' },
  { id: 8, link: 'https://www.instagram.com/explore/locations/', text: '위치' },
  { id: 9, link: '#', text: '언어' },
];
