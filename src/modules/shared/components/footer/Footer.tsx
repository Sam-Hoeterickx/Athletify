import clsx from "clsx";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

//Routes
import { ACCOUNT_ROUTE } from "../../../components/account/account.route";
import { EXPLORE_EXERCISES_ROUTE } from "../../../components/exploreExercises/exploreExercises.route";
import { EXPLORE_TRAININGS_ROUTE } from "../../../components/exploreTrainings/exploreTrainings.route";
import { HOME_ROUTE } from "../../../components/home/home.route";

//CSS
import styles from './footer.module.scss'

export const Footer: FC = () => {

    return (
        <footer>
            <div className={ clsx(styles["navigation--logo"]) }>
                <NavLink to={ HOME_ROUTE.path } >
                    <img src="/logo.webp" alt="Athletify logo" />
                </NavLink>
            </div>
            <div className={clsx(styles["navigation--link-wrappers"])} >
                <NavLink to={ EXPLORE_TRAININGS_ROUTE.path }>TRAININGS</NavLink>
                <NavLink to={ EXPLORE_EXERCISES_ROUTE.path }>EXERCISES</NavLink>
                <NavLink to="#" className="button" >GET STARTED</NavLink>
                <NavLink to={ ACCOUNT_ROUTE.path } className="secundary-button" >LOG IN</NavLink>
            </div>
        </footer>
    )
}
            