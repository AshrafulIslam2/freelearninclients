import Login from "../components/Login/Login";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import Registration from "../components/Registration/Registration";

const { createBrowserRouter } = require("react-router-dom");
const { default: Blog } = require("../components/Blogs/Blog");
const { default: Cheackout } = require("../components/CheackOutPage/Cheackout");
const {
  default: CourseDetail,
} = require("../components/CoursDetails/CourseDetail");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Home } = require("../components/Home/Home");
const { default: Mains } = require("../layouts/Mains");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains></Mains>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: (
          <PrivetRoute>
            <Courses></Courses>
          </PrivetRoute>
        ),
        loader: () => fetch("https://freelearning.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(`https://freelearning.vercel.app/courses/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/checkout",
        element: <Cheackout></Cheackout>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Erorr 404</div>,
  },
]);
