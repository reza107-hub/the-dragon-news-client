import { Navigate, createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category";
import NewsLayOut from "../Components/NewsLayOut";
import NewsDetails from "../Components/NewsDetails";
import About from "../Components/About/About";
import Career from "../Components/Career";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagories/${params.id}`),
      },
      
    ],
  },
  {
    path: "news",
    element: <NewsLayOut></NewsLayOut>,
    children: [
      {
        path: ":id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {},
    ],
  },
]);

export default router;
