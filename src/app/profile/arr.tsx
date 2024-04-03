import { Input, Text } from "@chakra-ui/react";

export const arr = [
  {
    title: "Manage My Account",
    list: [
      { title: "My Profile" },
      { title: "Address Book" },
      { title: "My Payment Options" },
    ],
  },
  {
    title: "My Orders",
    list: [{ title: "My Returns" }, { title: "My Cancellations" }],
  },
  {
    title: "My WishList",
    list: [
      { title: "My Returns" },
      { title: "My Cancellations" },
      { title: "My Payment Options" },
    ],
  },
];

const inputStyles = {
  title: "text-base font-medium",
  input: "lg:!w-[330px] w-[300px]",
};

export const inputs = [
  {
    title: (
      <Text className={inputStyles.title} mb="8px">
        First Name
      </Text>
    ),
    input: (
      <Input
        placeholder="Md"
        className={inputStyles.input}
        size="lg"
        variant='filled'
      />
    ),
  },
  {
    title: (
      <Text className={inputStyles.title} mb="8px">
        Last Name
      </Text>
    ),
    input: (
      <Input
        placeholder="Rimel"
        className={inputStyles.input}
        size="lg"
        variant='filled'
      />
    ),
  },
  {
    title: (
      <Text className={inputStyles.title} mb="8px">
        Email
      </Text>
    ),
    input: (
      <Input
        placeholder="rimel1111@gmail.com"
        className={inputStyles.input}
        size="lg"
        variant='filled'
      />
    ),
  },
  {
    title: (
      <Text className={inputStyles.title} mb="8px">
        Address
      </Text>
    ),
    input: (
      <Input
        placeholder="Kingston, 5236, United State"
        className={inputStyles.input}
        size="lg"
        variant='filled'
      />
    ),
  },
];
