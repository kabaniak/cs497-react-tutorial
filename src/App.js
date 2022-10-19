import CourseList from "./components/CourseList";
import Banner from "./components/Banner";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDbData } from "./utilities/firebase";
import Dispatcher from "./components/Dispatcher";
import { useProfile } from './utilities/profile';

const Main = () => {
  const [data, error] = useDbData('/');
  const [profile, profileLoading, profileError] = useProfile();
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (!data) return <h1>No user data found</h1>;

  
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  console.log(data)
  return (
    <div className="app">
      <Banner 
        title={data.title}
      />
      <Dispatcher courses={data.courses} profile={profile} />
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;