# Day 10 미션

## vite를 이용해 React App 생성

## Welcome 컴포넌트 구현하기
src/App.jsx 안에 다음 조건을 만족하는 Welcome 컴포넌트를 구현하세요
- Welcome 컴포넌트는 App 컴포넌트의 자식 컴포넌트입니다.
- Welcome 컴포넌트는 다음 2개의 Props를 받습니다.
  - 사용자의 이름을 의미하는 name
  - 사용자의 가입 여부를 의미하는 isMember
- isMember 값에 따라 다음과 같이 조건부 렌더링을 수행합니다:
  - true일 경우:"${name}님 다시 오셨군요"를 렌더링.   
![image](https://github.com/jazzyfact/onebite-react/assets/51365114/d1c1f9e4-b65d-49a0-b0ef-9da27c4661af)

  - false일 경우: "${name}님 가입하시겠어요?"를 렌더링.   
![image](https://github.com/jazzyfact/onebite-react/assets/51365114/0f75511d-d8c3-484d-8c82-bb304ea06225)
