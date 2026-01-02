import Fastify from "fastify";
import usersRoutes from "./modules/users/routes/users.routes";

export const app = Fastify({
  logger: true,
});

app.register(usersRoutes);

app.get("/health", async () => {
  return { status: "ok" };
});
