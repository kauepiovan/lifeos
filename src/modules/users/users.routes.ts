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
        try {
          const { name, email, password } = request.body;
          // do somthing with body data request
          reply.status(200)
          return  reply.send();
        } catch (err) {
          reply.status(500)
          fastify.log.info("something it is wrong")
          fastify.log.error(err)
        }
      }


    }
  )

}
