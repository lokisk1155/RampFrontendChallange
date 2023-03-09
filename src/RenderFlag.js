export const RenderFlag = ({ data }) => {
  const flagChars = data.split("");
  const flagItems = flagChars.map((char, index) => {
    return (
      <li key={index} style={{ animationDelay: `${0.5 * (index * 500)}s` }}>
        {char}
      </li>
    );
  });
  return <ul>{flagItems}</ul>;
};
