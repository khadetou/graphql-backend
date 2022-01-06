import express, { Application, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const app: Application = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const port: number = 3001;

app.listen(port, () => console.log(`App listening on port ${port}!`));
