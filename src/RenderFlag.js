import { useEffect, useState } from "react";

export const RenderFlag = ({ data }) => {
  const flagChars = data.split("");
  const [displayFlag, setDisplayFlag] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayFlag((displayFlag) => (displayFlag += data[index]));
      index++;
      if (index === data.length) {
        clearInterval(intervalId);
      }
    }, 500);
  }, [data]);

  const flagItems = [...displayFlag].map((char, index) => {
    return <li key={index}>{char}</li>;
  });

  return <ul>{flagItems}</ul>;
};
