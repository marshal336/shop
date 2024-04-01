"use client";
import { Button, Input, Link } from "@chakra-ui/react";
import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOAuth,
} from "@react-oauth/google";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { TOKEN } from "~/enum/token";
import axios from "axios";
import { iUser } from "~/types/user";

const Register = () => {
  const { push } = useRouter();
  const google = useGoogleLogin({
    onSuccess: async (user) => {
      if (user) {
        Cookie.set(TOKEN.ACCESS_TOKEN, user.access_token, {
          secure: true,
        });
        try {
          const { data } = await axios.get<iUser>(
            `${TOKEN.GET_USER_PROFILE}=${user.access_token}`,
            {
              headers: {
                Authorization: `${user.token_type} ${user.access_token}`,
                Accept: "application/json",
              },
            }
          );
          const token = Cookie.get(TOKEN.ACCESS_TOKEN);
          if (token) push("/");
          return data;
        } catch (err) {
          console.log(err);
        }
      }
    },
  });
  return (
    <div className="pt-[59px] pb-[80px] max-w-[1300px] mx-auto flex gap-32 items-center">
      <div className="">
        <Image src={"/signLogo.png"} alt="logo" width={805} height={781} />
      </div>

      <form>
        <h1 className="text-4xl pb-6">Create an account</h1>
        <p className="text-base">Enter your details below</p>
        <div className="flex flex-col gap-10 pt-12">
          <Input variant="flushed" placeholder="Name" type="text" />
          <Input variant="flushed" placeholder="Email" type="email" />
          <Input variant="flushed" placeholder="Password" type="password" />
        </div>
        <div className="flex flex-col pt-10 gap-4">
          <Button
            type="submit"
            className="!bg-main !text-white !text-base"
            size={"lg"}
          >
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
        <div className="flex pt-9 justify-center gap-4">
          <p>Already have account?</p>
          <Link href={"/sign-in"}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
