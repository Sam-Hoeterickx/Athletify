import { createHashRouter, RouterProvider } from "react-router-dom";
import type { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Components
import App from "../app/App";

//Routes
import { ACCOUNT_ROUTE } from "../account/account.route";
import { EXPLORE_EXERCISES_ROUTE } from "../exploreExercises/exploreExercises.route";
import { EXPLORE_TRAININGS_ROUTE } from "../exploreTrainings/exploreTrainings.route";
import { HOME_ROUTE } from "../home/home.route";

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
                },
                {
                    path: EXPLORE_EXERCISES_ROUTE.path,
                    element: EXPLORE_EXERCISES_ROUTE.element
                },
                {
                    path: EXPLORE_TRAININGS_ROUTE.path,
                    element: EXPLORE_TRAININGS_ROUTE.element
                },
                {
                    path: ACCOUNT_ROUTE.path,
                    element: ACCOUNT_ROUTE.element
                },
            ]
        }
    ])

    return (
        <QueryClientProvider client={ QUERYCLIENT }>
            <RouterProvider router={ ROUTE } />
        </QueryClientProvider>
    )
}

