import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export default function usersRoutes(fastify: FastifyInstance, options: Object) {

  interface createUserBody {
    name: string
    email: string
    password: string
  }

  fastify.route(
    {
      method: "POST",
      url: "/users",

      //schema
      schema: {
        body: {
          type: "object",
          properties: {
            name: {type: "string"},
            email: {type: "string"},
            password: {type: "string"}
          },
          required: ["name", "email", "password"]
        }
      },

      handler: async function(request: FastifyRequest<{ Body: createUserBody }>, reply: FastifyReply) {
        const { name, email, password } = request.body;
        return reply.send({msg: "all ok", body: {name, email, password}})
      }


    }
  )

}
