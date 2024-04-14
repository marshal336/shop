"use client";
import Image from "next/image";
import React from "react";
import styles from "../Auth.module.scss";
import { Button, Input, Link } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ErrorCatch } from "~/utils/error";
import { useRouter } from "next/navigation";

export const Register = () => {
  const {push} = useRouter()
  return (
    <div className={`${styles.root} main-width`}>
      <div className={styles.logo}>
        <Image src={"/signLogo.png"} alt="logo" width={805} height={781} />
      </div>
      <form>
        <h1 className={styles.h1}>Create an account</h1>
        <p className={styles.p}>Enter your details below</p>
        <div className={styles.inputs}>
          <Input variant="flushed" placeholder="Name" type="text" />
          <Input variant="flushed" placeholder="Email" type="email" />
          <Input variant="flushed" placeholder="Password" type="password" />
        </div>
        <div className={styles.buttons}>
          <Button type="submit" className={styles.firstButton} size={"lg"}>
            Create Account
          </Button>
          <GoogleLogin
            onSuccess={async ({ credential }) => {
              try {
                const { data } = await axios.post('http://localhost:5500/api/auth/google/log-in', {
                  token: credential
                })
                if(data) push('/')
                console.log(data);
              } catch (error) {
                console.log(ErrorCatch(error));
            
              }
            }} />
        </div>
        <div className={styles.logIn}>
          <p>Already have account?</p>
          <Link href={"/auth/sign-in"}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

