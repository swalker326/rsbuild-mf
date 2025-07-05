import { Suspense } from "react";
import "./App.css";
//@ts-expect-error
import RemoteModule from "remote/Module";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Suspense fallback={<div>Loading remote module...</div>}>
        <RemoteModule />
      </Suspense>
    </div>
  );
};

export default App;
