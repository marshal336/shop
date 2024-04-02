"use client";
import { Button, Input, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../Auth.module.scss";

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Image src={"/signLogo.png"} alt="logo" width={805} height={781} />
      </div>

      <form>
        <h1 className={styles.h1}>Log in to Exclusive</h1>
        <p className={styles.p}>Enter your details below</p>
        <div className={styles.inputs}>
          <Input variant="flushed" placeholder="Email" type="email" />
          <Input variant="flushed" placeholder="Password" type="password" />
        </div>
        <div className={styles.buttons}>
          <Button
            type="submit"
            className="!bg-main !text-white !text-base"
            size={"lg"}
            width={143}
          >
            Log in
          </Button>
          <Link href="/" className="!text-main">
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
