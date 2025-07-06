import { Suspense } from "react";
import "./App.css";
//@ts-expect-error
import RemoteModule from "remote/Remote";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <Suspense fallback={<div>Loading remote module...</div>}>
        <RemoteModule />
      </Suspense>
    </div>
  );
};

export default App;
