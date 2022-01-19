import React, { useState } from "react";
import { useParams } from "react-router-dom";

const withLogin = (SimpleComponent) => (props) => {
    const { type } = useParams;
    const [pageChange, setPageChange] = useState(
        type === "edit" ? type : "user"
    );
    const object = {
        onLogin: true
    };

    localStorage.setItem("user", JSON.stringify(object));
    let isLogin = JSON.parse(localStorage.getItem("user"));

    const handleChange = () => {
        object.onLogin === true
            ? (object.onLogin = false)
            : (object.onLogin = true);
        localStorage.setItem("user", JSON.stringify(object));
        isLogin = JSON.parse(localStorage.getItem("user"));
        setPageChange((prevState) => (prevState === "edit" ? "user" : "edit"));
    };

    return (
        <>
            {(isLogin.onLogin === true) & (pageChange === "user") ? (
                <SimpleComponent
                    {...props}
                    onLogOut="Войти"
                    handleChange={handleChange}
                    name="Требуется авторизация"
                />
            ) : (
                <SimpleComponent
                    {...props}
                    onLogOut="Выйти из системы"
                    handleChange={handleChange}
                    name="Добро пожаловать User"
                />
            )}
        </>
    );
};

export default withLogin;
