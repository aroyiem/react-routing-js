import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
    </Route>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage/> },
            { path: 'products', element: <ProductsPage/> },
            { path: 'products/:productId', element: <ProductDetailPage/> }
        ]
    }
]);

//const router = createBrowserRouter(routeDefinitions);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
