import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <>
            <Header/>
            <div className={classes.area}>
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {props.children}

                <Footer/>
            </div>
        </>
    )
}

export default Layout;