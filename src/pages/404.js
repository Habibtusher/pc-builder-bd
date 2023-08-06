import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ textAlign: "center" }}><p style={{ fontSize: "2rem", marginBottom: "10px" }}> 404 Not Found</p>
                <Link href="/">
                    <Button>Back Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;