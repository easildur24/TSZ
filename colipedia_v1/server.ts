import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import {response} from "express";

const resolvers = {
    Query: {
        schoolDetailsItem(parent, args, context) {
            return context.prisma.schoolDetailsItem({id: args.id});
        }
    },
    SchoolDetailsItem: {
        overview (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).overview()
        },
        geography (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).geography()
        },
        admission (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).admission()
        },
        academics (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).academics()
        },
        cost (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).cost()
        },
        demographics (parent, args, context) {
            return context.prisma.schoolDetailsItem(
                {id: parent.id}
            ).demographics()
        }
    },
    Overview: {
        notableRankings (parent, args, context) {
            return context.prisma.overview(
                {id: parent.id}
            ).notableRankings()
        },
        badges (parent, args, context) {
            return context.prisma.overview(
                {id: parent.id}
            ).badges()
        },
        system (parent, args, context) {
            return context.prisma.overview(
                {id: parent.id}
            ).system()
        },
        location(parent, args, context) {
            return context.prisma.overview(
                {id: parent.id}
            ).location()
        }
    },
    Admission: {
        actScores (parent, args, context) {
            return context.prisma.admission(
                {id:parent.id}
            ).actScores()
        },
        satScores (parent, args, context) {
            return context.prisma.admission(
                {id:parent.id}
            ).satScores()
        }
    },
    ActScores: {
        percentile25th (parent, args, context) {
            return context.prisma.actScores(
                {id: parent.id}
            ).percentile25th()
        },
        mid (parent, args, context) {
            return context.prisma.actScores(
                {id: parent.id}
            ).mid()
        },
        percentile75th (parent, args, context) {
            return context.prisma.actScores(
                {id: parent.id}
            ).percentile75th()
        }
    },
    SatScores: {
        percentile25th (parent, args, context) {
            return context.prisma.satScores(
                {id: parent.id}
            ).percentile25th()
        },
        mid (parent, args, context) {
            return context.prisma.satScores(
                {id: parent.id}
            ).mid()
        },
        percentile75th (parent, args, context) {
            return context.prisma.satScores(
                {id: parent.id}
            ).percentile75th()
        }
    },
    Academics: {
        majors (parent, args, context) {
            return context.prisma.academics(
                {id: parent.id}
            ).majors()
        },
        colleges (parent, args, context) {
            return context.prisma.academics(
                {id: parent.id}
            ).colleges()
        }
    },
    Geography: {
        location (parent, args, context) {
            return context.prisma.geography(
                {id: parent.id}
            ).location()
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
        prisma
    },
})
server.start(() => console.log('Server is running on http://localhost:4000'))