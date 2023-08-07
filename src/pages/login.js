import React from 'react';
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { base_url } from '@/base_url';
import { useSession, signIn, signOut } from "next-auth/react"
import styles from "@/styles/Login.module.css";

const Login = () => {
    return (
        <div className={styles.form}>
            <h3>LOGIN</h3>
            <div className={styles.social_icons}>
                <GoogleOutlined onClick={() => signIn("google", {
                    callbackUrl: base_url
                })} />
                <GithubOutlined onClick={() => signIn("github", {
                    callbackUrl: base_url
                })} />
            </div>
        </div>
    );
};

export default Login;