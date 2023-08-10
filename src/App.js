import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
export default function App() {
  const isLookingForJob = false;
  return (
    <Layout>
      <Slidebar />
      <Display isLookingForJob={isLookingForJob} />
    </Layout>
  );
}
