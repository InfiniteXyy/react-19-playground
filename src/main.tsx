import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>loading</div>}>
    <App />
  </Suspense>
);
