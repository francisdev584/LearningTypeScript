import { Response, Request } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "francis@gmail.com",
    password: "13-14-83-",
    name: "Francinildo",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "javaScript", experience: 100 },
    ],
  });

  return response.json({ message: "Hello World!" });
}
