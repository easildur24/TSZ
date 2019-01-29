"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Academics",
    embedded: false
  },
  {
    name: "ActScores",
    embedded: false
  },
  {
    name: "ActScoresTemplate",
    embedded: false
  },
  {
    name: "Admission",
    embedded: false
  },
  {
    name: "Badge",
    embedded: false
  },
  {
    name: "Cost",
    embedded: false
  },
  {
    name: "Demographics",
    embedded: false
  },
  {
    name: "Geography",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Overview",
    embedded: false
  },
  {
    name: "Ranking",
    embedded: false
  },
  {
    name: "SatScores",
    embedded: false
  },
  {
    name: "SatScoresTemplate",
    embedded: false
  },
  {
    name: "SchoolDetailsItem",
    embedded: false
  },
  {
    name: "SchoolListItem",
    embedded: false
  },
  {
    name: "SchoolRecommendation",
    embedded: false
  },
  {
    name: "SchoolSuggestion",
    embedded: false
  },
  {
    name: "SortByColumn",
    embedded: false
  },
  {
    name: "System",
    embedded: false
  },
  {
    name: "college",
    embedded: false
  },
  {
    name: "major",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/easildur24-d0b3f3/graphql-server/dev`
});
exports.prisma = new exports.Prisma();
