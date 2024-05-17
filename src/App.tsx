import { use, useState } from 'react';

function fibonacci(input: number): number {
  console.log('computing fibonacci', { input });
  return (function doFib(n: number): number {
    return n <= 1 ? n : doFib(n - 1) + doFib(n - 2);
  })(input);
}

const getDataPromise = Promise.resolve(23);

function Title(props: { text: string }) {
  console.log('rendering title', { text: props.text });
  return <h1>Title: {props.text}</h1>;
}

function App() {
  const [count, setCount] = useState(5);
  const [input, setInput] = useState('');

  return (
    <div>
      {count % 2 === 0 && use(getDataPromise)}
      <Title text={input} />
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
      <div>
        fibonacci({count}) is: {fibonacci(count)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
