import {useEffect, useState} from 'react'
import fetchList from "./api/fetchList.ts";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  function resetItems() {
    setItems([]);
  }

  function handleError(err: Error | unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("An unknown error occurred");
    }
  }

  useEffect(() => {
    fetchList()
      .then(data => setItems(data))
      .catch(err => {
        handleError(err);
      })
      .finally(() => {
        console.log("Fetch resolved");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Typescript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={addItem}><em>Click me to add items</em></button>
        <ul id="firstList">
          {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>

        <button type="reset" onClick={resetItems}>Reset list</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
