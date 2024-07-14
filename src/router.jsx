import { Route, createBrowserRouter, Outlet, createRoutesFromElements } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"


const RootLayout = () => {
    return <div className="min-h-screen min-w-screen overflow-hidden container mx-auto w-[90%]">
        <Outlet />
    </div>
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Route>
    )
)

export default Router;