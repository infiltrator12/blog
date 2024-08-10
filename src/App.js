import { Outlet,  createBrowserRouter, RouterProvider} from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import Single from './pages/single.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import UserProfile from './components/UserProfile.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import PostEditor from "./components/PostEditor.jsx";
import EditPostPage from './pages/EditPostPage.jsx';
import WritePostPage from './pages/WritePostPage.jsx';
import FileUpload from './components/FileUpload.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import "./style.scss"


const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/$/:postID", element: <Single /> },
      { path: "&", element: <WritePostPage /> },
      { path: ")", element: <AboutPage/> },
      { path: "!", element: <ContactPage/> },
      { path: "/p/:userID", element: <UserProfile/> },
      { path: "/pr", element: <AdminDashboard/> },
      { path: "/pq", element: <PostEditor/> },
      {path: "/edit/:postId", element: <EditPostPage />},
      {path: "/Z", element: <FileUpload />},
      {path: "/search", element: <SearchResultsPage />}
    ]
  },
  {
    path: "[",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <RegisterPage />
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
