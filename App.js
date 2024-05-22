import ReactProvider from "./store/ReactProvider";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <>
      <ReactProvider>
        <Layout />
        {/* <LoginScreen /> */}
      </ReactProvider>
    </>
  );
}
