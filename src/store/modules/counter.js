import { createAction, handleActions } from "redux-actions";

// 카운터 관련 상태 로직
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export default handleActions(
  {
    // [INCREMENT]: (state, action) => {
    //   return { number: state.number + 1 };
    // },
    [INCREMENT]: ({ number }) => ({ number: number + 1 }),
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
  },
  initialState
);

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 };
//     case DECREMENT:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }
