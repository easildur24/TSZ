const { GraphQLServer } = require('graphql-yoga')

// 1
const typeDefs = `
schema {
	query: Query
	mutation: Mutation
	subscription: Subscription
}

type Query {
	schoolDetails(id: ID!): SchoolDetailsItem!
	schoolList(schoolList: SchoolListInput): [SchoolListItem!]!
	schoolSuggestions(searchInput: String!): [SchoolSuggestion!]!
	schoolRecommendations: [SchoolRecommendation!]!
}

input SchoolListInput {
	sortBy: SortByColumn
}

enum SortByColumn {
	US_RANK
	SAT
	ACT
	NUM_STUDENTS
	TOEFL
}

type SchoolDetailsItem {
	id: ID!
	overview: Overview
	images: [String]
	admission: Admission
	academics: Academics
	cost: Cost
	demographics: Demographics
	geography: Geography
}

type Overview {
	name: String!
	description: String
	notableRankings: [Ranking]
	badges: [Badge]
	location: Location
	url: String
	menOnly: Boolean
	womenOnly: Boolean
	operating: Boolean
	onlineOnly: Boolean
	deadline: Date
	system: System
}

type Ranking {
	name: String
	rank: Int
}

# if a value is used only for rendering a badge, its logic will be in the resolver instead of FE. e.g religiousAffiliation 
type Badge {
	tooltip: String
	url: String
}

type Location {
	latittude: Float
	longitude: Float
	state: String
	city: String
	zip: String
}

scalar Date

enum System {
	SEMESTER
	QUARTER
}

type Admission {
	acceptanceRate: Float
	actScores: ActScores
	satScores: SatScores
	toeflMinScore: Int
	ieltsMinScore: Int
	earlyDecisionDeadline: Date
	regularDeadline: Date
	schoolResponseDeadline: Date
	studentResponseDeadline: Date
}

type ActScoresTemplate {
	writing: Int
	english: Int
	math: Int
	Cumulative: Int
}

type ActScores {
	25thPercentile: ActScoresTemplate
	mid: ActScoresTemplate
	75thPercentile: ActScoresTemplate
}

type SatScoresTemplate {
	reading: Int
	writing: Int
	math: Int
}

type SatScores {
	25thPercentile: SatScoresTemplate
	mid: SatScoresTemplate
	75thPercentile: SatScoresTemplate
}

type Academics {
	majors: [major]
	colleges: [college]
}

type major {
	name: String
	rank: Int
}

type college {
	name: String
	rank: Int
}

type Cost {
}

type Demographics {
	numStudents: Int
	numUndergraduates: Int
	numGraduates: Int
}

type Geography {
}

type SchoolListItem {
	id: ID
	name: String
	usRanking: Ranking
	badges: [Badge]
	thumbnail: String
	acceptanceRate: Float
	actScores: ActScores
	satScores: SatScores
	toeflScores: ToeflScores
	regularDeadline: Date
}

input SchoolListInput {
  offset: Int = 0
  limit: Int = 20
}

type SchoolSuggestion {
}

type SchoolRecommendation {
}

type Mutation {
  # Placeholder for user profile actions
}

type Subscription {
  # Upvote feature
}
`

// 2
const resolvers = {

}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))