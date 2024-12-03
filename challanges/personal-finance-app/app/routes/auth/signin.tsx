import HomePage from "~/pages/home/HomePage";
import type { Route } from "./+types/signin"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Signin() {
  return <HomePage/>;
}