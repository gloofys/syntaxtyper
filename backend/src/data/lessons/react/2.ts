import { Lesson } from "../../types";

const lesson2: Lesson = {
    lessonId: 2,
    language: "react",
    title: "useState() Hook",
    steps: [
        {
            title: "Introduction",
            description: `
The \`useState\` hook lets you add “state” to function components.
You can declare a piece of state with an initial value, then update it—and React will re‑render your component with the new value.
      `.trim(),
        },
        {
            title: "Typing Challenge",
            description: "Create a simple counter component that uses the `useState` hook to track and update a count.",
            type: "typingChallenge",
            codeSnippet: `
import React, { useState } from "react";

function Counter() {
  // 1. Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // 2. Increment count when the button is clicked
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
      `.trim(),
        },
        {
            title: "Explanation",
            description: `
1. **Destructuring:** \`const [count, setCount]\` pulls out the current state and a function to update it.  
2. **Initial Value:** \`useState(0)\` sets the initial count to 0.  
3. **Updating State:** Calling \`setCount(newValue)\` schedules a re‑render with the updated value.  
4. **Why Not Direct Mutation?** You must use \`setCount\` so React knows your component’s state changed.
      `.trim(),
        },
        {
            title: "Quiz",
            description: "Test your understanding of useState",
            type: "quiz",
            questions: [
                {
                    question: "What does calling the updater function (e.g. setCount) do?",
                    options: [
                        "Directly mutates the state variable",
                        "Schedules a re-render with the new state value",
                        "Clears the component cache",
                    ],
                    correctIndex: 1,
                },
                {
                    question: "How do you initialize state to an object instead of a number?",
                    options: [
                        "useState({})",
                        "useStateObject({})",
                        "useObjectState({})",
                    ],
                    correctIndex: 0,
                },
                {
                    question: "Why shouldn’t you do `count = count + 1` directly?",
                    options: [
                        "It’s invalid JavaScript",
                        "React won’t detect the change and re-render",
                        "It throws a runtime error",
                    ],
                    correctIndex: 1,
                },
            ],
        },
        {
            title: "Summary",
            description: `
Great job! You’ve:
- Learned how to declare state with \`useState\`.  
- Written a counter component that updates on button click.  
- Understood why you must use the updater function instead of direct assignment.

Next up, we’ll explore how to run side‑effects with \`useEffect\`.
    `.trim(),
        },
    ],
};

export default lesson2;
