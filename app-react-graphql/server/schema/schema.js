const { projects, clients } = require('../schema/sampleData')

const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

// Client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString},
    })
})


