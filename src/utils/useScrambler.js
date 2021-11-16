// import React, { useCallback, useEffect, useState } from "react";

// export default function useScrambler(sentence) {
//   const [wordi, setWord] = useState([]);

//   useEffect(() => {
//     sentence.split(" ").forEach((word, index) => {
//       var arr = word.split(""),
//         n = arr.length;

//       if (n <= 3) setWord([...wordi, ...word]);

//       if (n === 4) setWord([...wordi, ...(arr[0] + arr[2] + arr[1] + arr[3])]);

//       if (n > 4) {
//         for (var i = n - 2; i > 1; i--) {
//           var j = Math.floor(Math.random() * i) + 1;
//           // swap(arr, i, j);
//           var tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//         setWord([...wordi, ...arr.join("")]);
//       }
//     });
//   }, [sentence]);

//   return wordi;
// }
