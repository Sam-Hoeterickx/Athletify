import { createHashRouter, RouterProvider } from "react-router-dom";
import type { FC } from "react";

//Components
import App from "../app/App";

//Routes
import { HOME_ROUTE } from "../home/home.route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const Root: FC = () => {

    const QUERYCLIENT = new QueryClient()

    const ROUTE = createHashRouter([
        {
            path:'/',
            element: <App />,
            children: [
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element
                }
            ]
        }
    ])

    return (
        <QueryClientProvider client={ QUERYCLIENT }>
            <RouterProvider router={ ROUTE } />
        </QueryClientProvider>
    )
}

