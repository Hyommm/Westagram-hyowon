import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JungLogin.scss';

function JungLogin() {
  const [userValue, setUserValue] = useState({
    id: '',
    pw: '',
  });

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };

  const navigate = useNavigate();
  const idPw = userValue.id.includes('@') && userValue.pw.length > '5';
  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };

  const goToMain = e => {
    if (idPw) {
      navigate('/JungMain');
    }
  };

  // const loginFetch = () => {
  //   fetch('http://10.58.52.248:3001/auth/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({ email: id, password: password }),
  //   })
  //     .then(response => console.log(response))
  //     .then(data => localStorage.setItem('hyowon', data));
  // };

  return (
    <>
      <section className="container-wrap">
        <h1>Westagram</h1>
        <form className="input-container">
          <div className="input-wrap">
            {/*로그인 아이디 */}
            <input
              id="id"
              name="id"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              onChange={getUserInfo}
            />
            {/*패스워드 */}
            <input
              id="password"
              type="password"
              name="pw"
              placeholder="비밀번호"
              onChange={getUserInfo}
              onKeyUp={onCheckEnter}
            />
          </div>
          <button
            className={idPw ? 'trueid' : 'falseid'}
            disabled={!idPw}
            onClick={goToMain}
            id="btn"
          >
            로그인
          </button>
        </form>
        <div className="last">
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
      <section className="joincontainer-wrap">
        <div className="footer">
          <div className="join">
            <span className="join-notice">계정이 없으신가요?</span>
            <a href="#">가입하기</a>
          </div>
        </div>
        <div className="app-down">
          <div className="download-notice">앱을 다운로드하세요.</div>
          <img
            id="appstore"
            alt="apple-appstore"
            src="/images/junghyowon/apple.png"
          />
          <img
            id="appstore"
            alt="google-appstore"
            src="/images/junghyowon/google.png"
          />
        </div>
      </section>
    </>
  );
}

export default JungLogin;
