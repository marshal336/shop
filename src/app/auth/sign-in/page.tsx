"use client";
import { Button, Input, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../Auth.module.scss";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "~/redux/store";
import { loginUser } from "~/redux/reducers/user";



const Login = () => {
  const { refresh } = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useAppDispatch()
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }
    if (email.length + password.length === 0) return
    dispatch(loginUser(data))
    refresh()
  }
  return (
    <div className={`${styles.root} main-width`}>
      <div className={styles.logo}>
        <Image src={"/signLogo.png"} alt="logo" width={805} height={781} />
      </div>

      <form onSubmit={submit}>
        <h1 className={styles.h1}>Log in to Exclusive</h1>
        <p className={styles.p}>Enter your details below</p>
        <div className={styles.inputs}>
        <Input onChange={(e) => setEmail(e.target.value)} value={email} variant="flushed" placeholder="Email" type="email" />
          <Input onChange={(e) => setPassword(e.target.value)} value={password} variant="flushed" placeholder="Password" type="password" />
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
