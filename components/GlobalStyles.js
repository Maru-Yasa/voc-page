import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./Themes";

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text} ;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: ${({theme}) => theme.textBlue};
    }

    .text-primary {
        color : ${({theme}) => theme.textBlue};
    }

    .btn-primary {
        background-color: ${({theme}) => theme.textBlue};
        border-color: ${({theme}) => theme.textBlue};
        color : ${({theme}) => theme.text};
    }

    .btn-primary:hover {
        background-color: ${({theme}) => theme.textBlue};
        color : ${({theme}) => theme.text};
        border-color: ${({theme}) => theme.textBlue};
    }

    .btn-primary:focus {
        background-color: ${({theme}) => theme.textBlue};
        color : ${({theme}) => theme.text};
        border-color: ${({theme}) => theme.textBlue};
    }

    .btn-primary:active {
        background-color: ${({theme}) => theme.textBlue};
        color : ${({theme}) => theme.text};
        border-color: ${({theme}) => theme.textBlue};
    }

    .admin-img{
        max-width: 350px;
        object-fit: fill;
        border-radius: 20px !important;
    }

    .my-card {
        border-radius: 20px;
    }

    .logo {
        width: 200px;
        object-fit: cover;
    }

    .text-blue{
        color : ${({theme}) => theme.textBlue};
    }

    .bg-blue{
        background-color : ${({theme}) => theme.textBlue};
    }

    .my-bg {
        background-color: ${({theme}) => theme.background};
    }

    .navbar-brand {
        color : ${({theme}) => theme.textBlue};
    }

    .navbar-brand:hover {
        color : ${({theme}) => theme.textBlue};
    }

    .nav-link {
        color : ${({theme}) => theme.text};
    }

    .nav-link:focus {
        color : ${({theme}) => theme.textBlue};
    }

    .nav-link:hover {
        color : ${({theme}) => theme.textBlue}
    }

`