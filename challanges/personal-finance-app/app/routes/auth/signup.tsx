import HomePage from "~/pages/home/HomePage";
import type { Route } from "./+types/signup"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Signup() {
  return <HomePage/>;
}