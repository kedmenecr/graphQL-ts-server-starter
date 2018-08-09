import { ResolverMap } from "./types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'Lol'}`,
  },
  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => { }
  }
};