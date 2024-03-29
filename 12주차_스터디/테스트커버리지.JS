
// 11.3 테스트 커버리지

 

// 전체 코드 중에서 어떤 부분이 테스트되고 어떤 부분이 테스트되지 않는지 확인하는 방법이다.

 

// 전체 코드 중에서 테스트되고 있는 코드의 비율과 테스트되고 있지 않는 코드의 위치를 알려주는 jest의 기능을 커버리지 라고 한다.

// //package.json
// {
// 	...
//   	"scripts": {
//       	"start":"nodemon app",
//       	"test": "jest",
//       	"coverage":"jest --coverage"
//     },
// }
 

// jest 명령어 뒤에 --coverage 옵션 붙이면 jest가 테스트 커버리지를 분석한다.

 

// $npm run coverage
// 테스트 결과가 출력되고 추가적으로 표가 하나 더 출력된다.

// 퍼센티지가 높을수록 많은 코드가 테스트되었다는 뜻이다.

// % Stmts
// //구문 비율

// % Branch
// //if문 등의 분기점 비율

// % Funcs
// //함수 비율

// % Lines
// 코드 줄 수 비율

// Uncovered Line
// 커버되지 않은 줄 위치
 