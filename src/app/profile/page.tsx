"use client";
import React from "react";
import { arr, inputs } from "./arr";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [idx, setIdx] = React.useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.h2}>
          <p className={styles.pA}>
            Home / <span className="">My Account</span>
          </p>
          <p>
            Welcome! <span className={styles.pB}>NAMEUSER</span>
          </p>
        </h2>
        <div className={styles.menu}>
          <div className={styles.containerMenu}>
            {arr.map(({ title, list }, i) => (
              <div className={styles.main} key={i}>
                <h1 className={styles.h1} onClick={() => setIdx(i)}>
                  {title}
                </h1>
                <ul className={`${idx === i ? "flex" : "hidden"} ${styles.ul}`}>
                  {list.map(({ title }, i) => (
                    <li key={i} className={styles.li}>
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Card className={styles.Card}>
            <CardHeader>
              <Heading size="md" className={styles.Heading}>
                Edit Your Profile
              </Heading>
            </CardHeader>
            <CardBody>
              <div className={styles.inputsA}>
                {inputs.map(({ input, title }, i) => (
                  <div className="">
                    {title}
                    {input}
                  </div>
                ))}
              </div>
              <div className={styles.inputsB}>
                <h2 className="">Password Changes</h2>
                <Input
                  variant="filled"
                  placeholder="Current Passwod"
                  size={"lg"}
                />
                <Input variant="filled" placeholder="New Passwod" size={"lg"} />
                <Input
                  variant="filled"
                  placeholder="Confirm New Passwod"
                  size={"lg"}
                />
              </div>
            </CardBody>
            <CardFooter className={styles.CardFooter}>
              <Button variant="ghost" size="lg">
                Cancel
              </Button>
              <Button colorScheme="red" size="lg" className={styles.Button}>
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
