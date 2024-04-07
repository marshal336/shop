"use client";
//Core
import { useForm } from "react-hook-form";
import { schema } from "./config";
import { yupResolver } from "@hookform/resolvers/yup";

//styles
import styles from "../Contact.module.scss";

import { Input } from "~/components/elements/input";

export const FormsMessage = () => {
  const form = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles["form-message"]}>
      <form>
        <div className={styles["form-inputs"]}>
          <Input
            placeholder="Your Name"
            error={form.formState.errors?.fullName}
            register={form.register("fullName")}
          />

          <Input
            placeholder="Your Email"
            error={form.formState.errors?.email}
            register={form.register("email")}
          />

          <Input
            placeholder="Your Phone"
            error={form.formState.errors?.phone}
            register={form.register("phone")}
          />
        </div>

        <Input
          placeholder="Your Message"
          tag="textarea"
          error={form.formState.errors.message}
          register={form.register("message")}
        />
      </form>
      <div className={styles["form-button"]}>
        <button>Send message</button>
      </div>
    </div>
  );
};
