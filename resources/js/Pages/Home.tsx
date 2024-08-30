import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

const Home = () => {
  return (
    <div className="main-content">
      <Head title="Home" />
      <Layout>
      <h1>Welcome to Your App</h1>
        <p>This is the home page of your application.</p>
        {/* <Link href="/about">About</Link> */}
      </Layout>
    </div>
  );
};

export default Home;
