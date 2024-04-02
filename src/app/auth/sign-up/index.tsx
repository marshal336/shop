"use client";
import Image from "next/image";
import Cookie from "js-cookie";
import React from "react";
import styles from "../Auth.module.scss";
import { Button, Input, Link } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { TOKEN } from "~/enum/token";

export const Register = () => {
  const { push } = useRouter();
  const google = useGoogleLogin({
    onSuccess: async (user) => {
      if (user) {
        Cookie.set(TOKEN.ACCESS_TOKEN, user.access_token, {
          secure: true,
        });

        const token = Cookie.get(TOKEN.ACCESS_TOKEN);
        if (token) push("/");
      }
    },
  });
  return (
    <div className={styles.root}>
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
          <Button
            onClick={() => google()}
            variant={"outline"}
            size={"lg"}
            leftIcon={<FcGoogle />}
          >
            Sign up with Google
          </Button>
        </div>
        <div className={styles.logIn}>
          <p>Already have account?</p>
          <Link href={"/sign-in"}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

