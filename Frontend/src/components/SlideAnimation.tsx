// import { Transition } from "framer-motion";
// import { useState, useCallback } from "react";
// import styled from "styled-components";

// const BaseItem = styled.div`
//   width: 300px;
//   height: 200px;
// `;

// const Animation = styled(BaseItem)`
//   transition: 0.5s;
//   transform: translateX(
//     ${({ state }) => (state === "entering" || state === "entered" ? 400 : 0)}px
//   );
// `;
// export const AnimateItem = () => {
//   const [animate, setAnimate] = useState(false);

//   // Animate on click button and revert after 3000ms.
//   const doAnimate = useCallback(() => {
//     setAnimate(true);
//     setTimeout(() => {
//       setAnimate(false);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       {/* Transition change state with `in` props */}
//       <Transition in={animate} timeout={500}>
//         {(state) => (
//           // state change: exited -> entering -> entered -> exiting -> exited
//           <Animation state={state}>Hello</Animation>
//         )}
//       </Transition>
//       <button onClick={doAnimate}>Animate</button>
//     </div>
//   );
// };
// export default Animation;
