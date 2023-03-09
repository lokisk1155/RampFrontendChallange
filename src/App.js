import React, { useState } from "react";
import { useEffect } from "react";
import  { RenderFlag }  from "./RenderFlag";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const requestToRamp = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f"
      );
      const requestParsed = await requestToRamp.text();
      return requestParsed;
    };
    getData().then((data) => {
      setTimeout(() => {
        setData(data);
      }, 750);
    });
  }, []);

  console.log(data);

  return <>{data ? <RenderFlag data={data} /> : <p>Loading...</p>}</>;
}

export default App;

// const sectionTags = document.querySelectorAll('section');
// const filteredSections = [];

// Array.from(sectionTags).forEach(section => {
//   if (section.id.startsWith('11')) {
//     const mainElements = section.querySelectorAll(':scope > main[id$="22"]');
//     mainElements.forEach(main => {
//       const filteredDirectChildren = Array.from(main.children).filter(child => child.tagName === 'ARTICLE');
//       const articleChildren = [];

//       filteredDirectChildren.forEach(article => {
//         const children = Array.from(article.querySelectorAll('*')).filter(grandchild => grandchild.tagName === 'P');
//         articleChildren.push(...children);
//       });

//       filteredSections.push({
//         section: section,
//         main: main, 
//         children: filteredDirectChildren,
//         grandchildren: articleChildren
//       });
//     });
//   }
// });

// console.log(filteredSections);


// const validCharacters = [] 
// filteredSections.forEach(({ grandchildren }) => {
//     validCharacters.push(grandchildren[0].getAttribute('value'));
// })

// console.log(validCharacters.join(""))