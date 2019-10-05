# Javascript-Web-Todo

## Introduction

React를 사용해 Todo Application을 구현했습니다. React Hooks를 사용한 상태관리를 학습하고자 하였으며, Application 구현의 핵심 사항입니다.

## Requirements

- Babel과 Webpack을 통한 빌드 환경을 직접 구성한다.
- Styled Components 또는 SASS를 통해 CSS의 생산성을 높인다.
- Functional Component와 Hooks API를 사용한다.
- React의 Rendering과 Lifecycle을 이해하고 적용한다.
- React-Router를 사용해 메뉴를 구성한다.
- 컴포넌트 구조를 세분화한다.

## Features

- Home, Todo, About tab을 통해 해당 메뉴의 내용을 확인할 수 있다.
- Home 메뉴에서 통해 할 일, 완료한 일, 총 리스트 갯수를 확인할 수 있다.
- Todo 메뉴에서 할 일을 **추가**, **제거**할 수 있고, **완료한 일**로 상태를 변경할 수 있다.
- Todo 메뉴에서 리스트를 열고 닫을 수 있다.
- About을 통해 정보를 확인할 수 있다.

## Tech

- Javascript (ES2015+)
- Node.js
- Express
- Styled-components
- React
- State management using Hooks API
- Routing using react-router
- Asynchronous
- Webpack
- Axios

## Challenge

1. React Lifecycle의 변화
- Class component 방식에서의 Lifecycle과 React Hooks 방식에서의 Lifecycle 관리에 대해 학습.
- componentDidMount, shouldComponentUpdate를 대체하는 lifecyle api `useEffect`을 사용한 lifecycle의 관리 및 이해.
2. React 최적화에 대한 학습.
- React.memo, useMemo, useCallback과 같은 React 최적화 Api 사용법에 대해 학습하고 이를 Application에 적용.
- React Dev Tools를 사용해 직접 불필요한 렌더링이 이뤄지는지에 대해 검사하며 최적화 진행.
- React 최적화 Api의 작동원리를 공부하며 불필요한 사용으로 인한 Side Effect가 발생할 수 있어 지속적인 학습을 통해 최적화의 품질을 높일 것을 고민.
3. Webpack과 Babel 설정
- Create-React-App을 사용하지 않고 직접 React Webpack과 Babel을 학습해 이해하고 Application에 적용.
- 필요한 Api를 사용하면서 편의성을 높이고 불필요한 설정을 최소화하여 Application의 크기를 줄이도록 노력.