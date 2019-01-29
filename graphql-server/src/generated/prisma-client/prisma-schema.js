module.exports = {
        typeDefs: /* GraphQL */ `type Academics {
  majors(where: majorWhereInput, orderBy: majorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [major!]
  colleges(where: collegeWhereInput, orderBy: collegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [college!]
}

type AcademicsConnection {
  pageInfo: PageInfo!
  edges: [AcademicsEdge]!
  aggregate: AggregateAcademics!
}

input AcademicsCreateInput {
  majors: majorCreateManyInput
  colleges: collegeCreateManyInput
}

input AcademicsCreateOneInput {
  create: AcademicsCreateInput
}

type AcademicsEdge {
  node: Academics!
  cursor: String!
}

enum AcademicsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AcademicsSubscriptionPayload {
  mutation: MutationType!
  node: Academics
  updatedFields: [String!]
}

input AcademicsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AcademicsWhereInput
  AND: [AcademicsSubscriptionWhereInput!]
  OR: [AcademicsSubscriptionWhereInput!]
  NOT: [AcademicsSubscriptionWhereInput!]
}

input AcademicsUpdateDataInput {
  majors: majorUpdateManyInput
  colleges: collegeUpdateManyInput
}

input AcademicsUpdateOneInput {
  create: AcademicsCreateInput
  update: AcademicsUpdateDataInput
  upsert: AcademicsUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input AcademicsUpsertNestedInput {
  update: AcademicsUpdateDataInput!
  create: AcademicsCreateInput!
}

input AcademicsWhereInput {
  majors_every: majorWhereInput
  majors_some: majorWhereInput
  majors_none: majorWhereInput
  colleges_every: collegeWhereInput
  colleges_some: collegeWhereInput
  colleges_none: collegeWhereInput
  AND: [AcademicsWhereInput!]
  OR: [AcademicsWhereInput!]
  NOT: [AcademicsWhereInput!]
}

type ActScores {
  percentile25th: ActScoresTemplate
  mid: ActScoresTemplate
  percentile75th: ActScoresTemplate
}

type ActScoresConnection {
  pageInfo: PageInfo!
  edges: [ActScoresEdge]!
  aggregate: AggregateActScores!
}

input ActScoresCreateInput {
  percentile25th: ActScoresTemplateCreateOneInput
  mid: ActScoresTemplateCreateOneInput
  percentile75th: ActScoresTemplateCreateOneInput
}

input ActScoresCreateOneInput {
  create: ActScoresCreateInput
}

type ActScoresEdge {
  node: ActScores!
  cursor: String!
}

enum ActScoresOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActScoresSubscriptionPayload {
  mutation: MutationType!
  node: ActScores
  updatedFields: [String!]
}

input ActScoresSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActScoresWhereInput
  AND: [ActScoresSubscriptionWhereInput!]
  OR: [ActScoresSubscriptionWhereInput!]
  NOT: [ActScoresSubscriptionWhereInput!]
}

type ActScoresTemplate {
  writing: Int
  english: Int
  math: Int
  cumulative: Int
}

type ActScoresTemplateConnection {
  pageInfo: PageInfo!
  edges: [ActScoresTemplateEdge]!
  aggregate: AggregateActScoresTemplate!
}

input ActScoresTemplateCreateInput {
  writing: Int
  english: Int
  math: Int
  cumulative: Int
}

input ActScoresTemplateCreateOneInput {
  create: ActScoresTemplateCreateInput
}

type ActScoresTemplateEdge {
  node: ActScoresTemplate!
  cursor: String!
}

enum ActScoresTemplateOrderByInput {
  writing_ASC
  writing_DESC
  english_ASC
  english_DESC
  math_ASC
  math_DESC
  cumulative_ASC
  cumulative_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActScoresTemplatePreviousValues {
  writing: Int
  english: Int
  math: Int
  cumulative: Int
}

type ActScoresTemplateSubscriptionPayload {
  mutation: MutationType!
  node: ActScoresTemplate
  updatedFields: [String!]
  previousValues: ActScoresTemplatePreviousValues
}

input ActScoresTemplateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActScoresTemplateWhereInput
  AND: [ActScoresTemplateSubscriptionWhereInput!]
  OR: [ActScoresTemplateSubscriptionWhereInput!]
  NOT: [ActScoresTemplateSubscriptionWhereInput!]
}

input ActScoresTemplateUpdateDataInput {
  writing: Int
  english: Int
  math: Int
  cumulative: Int
}

input ActScoresTemplateUpdateManyMutationInput {
  writing: Int
  english: Int
  math: Int
  cumulative: Int
}

input ActScoresTemplateUpdateOneInput {
  create: ActScoresTemplateCreateInput
  update: ActScoresTemplateUpdateDataInput
  upsert: ActScoresTemplateUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input ActScoresTemplateUpsertNestedInput {
  update: ActScoresTemplateUpdateDataInput!
  create: ActScoresTemplateCreateInput!
}

input ActScoresTemplateWhereInput {
  writing: Int
  writing_not: Int
  writing_in: [Int!]
  writing_not_in: [Int!]
  writing_lt: Int
  writing_lte: Int
  writing_gt: Int
  writing_gte: Int
  english: Int
  english_not: Int
  english_in: [Int!]
  english_not_in: [Int!]
  english_lt: Int
  english_lte: Int
  english_gt: Int
  english_gte: Int
  math: Int
  math_not: Int
  math_in: [Int!]
  math_not_in: [Int!]
  math_lt: Int
  math_lte: Int
  math_gt: Int
  math_gte: Int
  cumulative: Int
  cumulative_not: Int
  cumulative_in: [Int!]
  cumulative_not_in: [Int!]
  cumulative_lt: Int
  cumulative_lte: Int
  cumulative_gt: Int
  cumulative_gte: Int
  AND: [ActScoresTemplateWhereInput!]
  OR: [ActScoresTemplateWhereInput!]
  NOT: [ActScoresTemplateWhereInput!]
}

input ActScoresUpdateDataInput {
  percentile25th: ActScoresTemplateUpdateOneInput
  mid: ActScoresTemplateUpdateOneInput
  percentile75th: ActScoresTemplateUpdateOneInput
}

input ActScoresUpdateOneInput {
  create: ActScoresCreateInput
  update: ActScoresUpdateDataInput
  upsert: ActScoresUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input ActScoresUpsertNestedInput {
  update: ActScoresUpdateDataInput!
  create: ActScoresCreateInput!
}

input ActScoresWhereInput {
  percentile25th: ActScoresTemplateWhereInput
  mid: ActScoresTemplateWhereInput
  percentile75th: ActScoresTemplateWhereInput
  AND: [ActScoresWhereInput!]
  OR: [ActScoresWhereInput!]
  NOT: [ActScoresWhereInput!]
}

type Admission {
  acceptanceRate: Float
  actScores: ActScores
  satScores: SatScores
  toeflMinScore: Int
  ieltsMinScore: Int
  earlyDecisionDeadline: DateTime
  regularDeadline: DateTime
  schoolResponseDeadline: DateTime
  studentResponseDeadline: DateTime
}

type AdmissionConnection {
  pageInfo: PageInfo!
  edges: [AdmissionEdge]!
  aggregate: AggregateAdmission!
}

input AdmissionCreateInput {
  acceptanceRate: Float
  actScores: ActScoresCreateOneInput
  satScores: SatScoresCreateOneInput
  toeflMinScore: Int
  ieltsMinScore: Int
  earlyDecisionDeadline: DateTime
  regularDeadline: DateTime
  schoolResponseDeadline: DateTime
  studentResponseDeadline: DateTime
}

input AdmissionCreateOneInput {
  create: AdmissionCreateInput
}

type AdmissionEdge {
  node: Admission!
  cursor: String!
}

enum AdmissionOrderByInput {
  acceptanceRate_ASC
  acceptanceRate_DESC
  toeflMinScore_ASC
  toeflMinScore_DESC
  ieltsMinScore_ASC
  ieltsMinScore_DESC
  earlyDecisionDeadline_ASC
  earlyDecisionDeadline_DESC
  regularDeadline_ASC
  regularDeadline_DESC
  schoolResponseDeadline_ASC
  schoolResponseDeadline_DESC
  studentResponseDeadline_ASC
  studentResponseDeadline_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdmissionPreviousValues {
  acceptanceRate: Float
  toeflMinScore: Int
  ieltsMinScore: Int
  earlyDecisionDeadline: DateTime
  regularDeadline: DateTime
  schoolResponseDeadline: DateTime
  studentResponseDeadline: DateTime
}

type AdmissionSubscriptionPayload {
  mutation: MutationType!
  node: Admission
  updatedFields: [String!]
  previousValues: AdmissionPreviousValues
}

input AdmissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdmissionWhereInput
  AND: [AdmissionSubscriptionWhereInput!]
  OR: [AdmissionSubscriptionWhereInput!]
  NOT: [AdmissionSubscriptionWhereInput!]
}

input AdmissionUpdateDataInput {
  acceptanceRate: Float
  actScores: ActScoresUpdateOneInput
  satScores: SatScoresUpdateOneInput
  toeflMinScore: Int
  ieltsMinScore: Int
  earlyDecisionDeadline: DateTime
  regularDeadline: DateTime
  schoolResponseDeadline: DateTime
  studentResponseDeadline: DateTime
}

input AdmissionUpdateManyMutationInput {
  acceptanceRate: Float
  toeflMinScore: Int
  ieltsMinScore: Int
  earlyDecisionDeadline: DateTime
  regularDeadline: DateTime
  schoolResponseDeadline: DateTime
  studentResponseDeadline: DateTime
}

input AdmissionUpdateOneInput {
  create: AdmissionCreateInput
  update: AdmissionUpdateDataInput
  upsert: AdmissionUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input AdmissionUpsertNestedInput {
  update: AdmissionUpdateDataInput!
  create: AdmissionCreateInput!
}

input AdmissionWhereInput {
  acceptanceRate: Float
  acceptanceRate_not: Float
  acceptanceRate_in: [Float!]
  acceptanceRate_not_in: [Float!]
  acceptanceRate_lt: Float
  acceptanceRate_lte: Float
  acceptanceRate_gt: Float
  acceptanceRate_gte: Float
  actScores: ActScoresWhereInput
  satScores: SatScoresWhereInput
  toeflMinScore: Int
  toeflMinScore_not: Int
  toeflMinScore_in: [Int!]
  toeflMinScore_not_in: [Int!]
  toeflMinScore_lt: Int
  toeflMinScore_lte: Int
  toeflMinScore_gt: Int
  toeflMinScore_gte: Int
  ieltsMinScore: Int
  ieltsMinScore_not: Int
  ieltsMinScore_in: [Int!]
  ieltsMinScore_not_in: [Int!]
  ieltsMinScore_lt: Int
  ieltsMinScore_lte: Int
  ieltsMinScore_gt: Int
  ieltsMinScore_gte: Int
  earlyDecisionDeadline: DateTime
  earlyDecisionDeadline_not: DateTime
  earlyDecisionDeadline_in: [DateTime!]
  earlyDecisionDeadline_not_in: [DateTime!]
  earlyDecisionDeadline_lt: DateTime
  earlyDecisionDeadline_lte: DateTime
  earlyDecisionDeadline_gt: DateTime
  earlyDecisionDeadline_gte: DateTime
  regularDeadline: DateTime
  regularDeadline_not: DateTime
  regularDeadline_in: [DateTime!]
  regularDeadline_not_in: [DateTime!]
  regularDeadline_lt: DateTime
  regularDeadline_lte: DateTime
  regularDeadline_gt: DateTime
  regularDeadline_gte: DateTime
  schoolResponseDeadline: DateTime
  schoolResponseDeadline_not: DateTime
  schoolResponseDeadline_in: [DateTime!]
  schoolResponseDeadline_not_in: [DateTime!]
  schoolResponseDeadline_lt: DateTime
  schoolResponseDeadline_lte: DateTime
  schoolResponseDeadline_gt: DateTime
  schoolResponseDeadline_gte: DateTime
  studentResponseDeadline: DateTime
  studentResponseDeadline_not: DateTime
  studentResponseDeadline_in: [DateTime!]
  studentResponseDeadline_not_in: [DateTime!]
  studentResponseDeadline_lt: DateTime
  studentResponseDeadline_lte: DateTime
  studentResponseDeadline_gt: DateTime
  studentResponseDeadline_gte: DateTime
  AND: [AdmissionWhereInput!]
  OR: [AdmissionWhereInput!]
  NOT: [AdmissionWhereInput!]
}

type AggregateAcademics {
  count: Int!
}

type AggregateActScores {
  count: Int!
}

type AggregateActScoresTemplate {
  count: Int!
}

type AggregateAdmission {
  count: Int!
}

type AggregateBadge {
  count: Int!
}

type Aggregatecollege {
  count: Int!
}

type AggregateCost {
  count: Int!
}

type AggregateDemographics {
  count: Int!
}

type AggregateGeography {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type Aggregatemajor {
  count: Int!
}

type AggregateOverview {
  count: Int!
}

type AggregateRanking {
  count: Int!
}

type AggregateSatScores {
  count: Int!
}

type AggregateSatScoresTemplate {
  count: Int!
}

type AggregateSchoolDetailsItem {
  count: Int!
}

type AggregateSchoolListItem {
  count: Int!
}

type AggregateSchoolRecommendation {
  count: Int!
}

type AggregateSchoolSuggestion {
  count: Int!
}

type Badge {
  tooltip: String
  url: String
}

type BadgeConnection {
  pageInfo: PageInfo!
  edges: [BadgeEdge]!
  aggregate: AggregateBadge!
}

input BadgeCreateInput {
  tooltip: String
  url: String
}

input BadgeCreateManyInput {
  create: [BadgeCreateInput!]
}

type BadgeEdge {
  node: Badge!
  cursor: String!
}

enum BadgeOrderByInput {
  tooltip_ASC
  tooltip_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BadgePreviousValues {
  tooltip: String
  url: String
}

input BadgeScalarWhereInput {
  tooltip: String
  tooltip_not: String
  tooltip_in: [String!]
  tooltip_not_in: [String!]
  tooltip_lt: String
  tooltip_lte: String
  tooltip_gt: String
  tooltip_gte: String
  tooltip_contains: String
  tooltip_not_contains: String
  tooltip_starts_with: String
  tooltip_not_starts_with: String
  tooltip_ends_with: String
  tooltip_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [BadgeScalarWhereInput!]
  OR: [BadgeScalarWhereInput!]
  NOT: [BadgeScalarWhereInput!]
}

type BadgeSubscriptionPayload {
  mutation: MutationType!
  node: Badge
  updatedFields: [String!]
  previousValues: BadgePreviousValues
}

input BadgeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BadgeWhereInput
  AND: [BadgeSubscriptionWhereInput!]
  OR: [BadgeSubscriptionWhereInput!]
  NOT: [BadgeSubscriptionWhereInput!]
}

input BadgeUpdateManyDataInput {
  tooltip: String
  url: String
}

input BadgeUpdateManyInput {
  create: [BadgeCreateInput!]
  deleteMany: [BadgeScalarWhereInput!]
  updateMany: [BadgeUpdateManyWithWhereNestedInput!]
}

input BadgeUpdateManyMutationInput {
  tooltip: String
  url: String
}

input BadgeUpdateManyWithWhereNestedInput {
  where: BadgeScalarWhereInput!
  data: BadgeUpdateManyDataInput!
}

input BadgeWhereInput {
  tooltip: String
  tooltip_not: String
  tooltip_in: [String!]
  tooltip_not_in: [String!]
  tooltip_lt: String
  tooltip_lte: String
  tooltip_gt: String
  tooltip_gte: String
  tooltip_contains: String
  tooltip_not_contains: String
  tooltip_starts_with: String
  tooltip_not_starts_with: String
  tooltip_ends_with: String
  tooltip_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [BadgeWhereInput!]
  OR: [BadgeWhereInput!]
  NOT: [BadgeWhereInput!]
}

type BatchPayload {
  count: Long!
}

type college {
  name: String
  rank: Int
}

type collegeConnection {
  pageInfo: PageInfo!
  edges: [collegeEdge]!
  aggregate: Aggregatecollege!
}

input collegeCreateInput {
  name: String
  rank: Int
}

input collegeCreateManyInput {
  create: [collegeCreateInput!]
}

type collegeEdge {
  node: college!
  cursor: String!
}

enum collegeOrderByInput {
  name_ASC
  name_DESC
  rank_ASC
  rank_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type collegePreviousValues {
  name: String
  rank: Int
}

input collegeScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [collegeScalarWhereInput!]
  OR: [collegeScalarWhereInput!]
  NOT: [collegeScalarWhereInput!]
}

type collegeSubscriptionPayload {
  mutation: MutationType!
  node: college
  updatedFields: [String!]
  previousValues: collegePreviousValues
}

input collegeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: collegeWhereInput
  AND: [collegeSubscriptionWhereInput!]
  OR: [collegeSubscriptionWhereInput!]
  NOT: [collegeSubscriptionWhereInput!]
}

input collegeUpdateManyDataInput {
  name: String
  rank: Int
}

input collegeUpdateManyInput {
  create: [collegeCreateInput!]
  deleteMany: [collegeScalarWhereInput!]
  updateMany: [collegeUpdateManyWithWhereNestedInput!]
}

input collegeUpdateManyMutationInput {
  name: String
  rank: Int
}

input collegeUpdateManyWithWhereNestedInput {
  where: collegeScalarWhereInput!
  data: collegeUpdateManyDataInput!
}

input collegeWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [collegeWhereInput!]
  OR: [collegeWhereInput!]
  NOT: [collegeWhereInput!]
}

type Cost {
  tuitionUndergrad: Int
  tuitionGrad: Int
}

type CostConnection {
  pageInfo: PageInfo!
  edges: [CostEdge]!
  aggregate: AggregateCost!
}

input CostCreateInput {
  tuitionUndergrad: Int
  tuitionGrad: Int
}

input CostCreateOneInput {
  create: CostCreateInput
}

type CostEdge {
  node: Cost!
  cursor: String!
}

enum CostOrderByInput {
  tuitionUndergrad_ASC
  tuitionUndergrad_DESC
  tuitionGrad_ASC
  tuitionGrad_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CostPreviousValues {
  tuitionUndergrad: Int
  tuitionGrad: Int
}

type CostSubscriptionPayload {
  mutation: MutationType!
  node: Cost
  updatedFields: [String!]
  previousValues: CostPreviousValues
}

input CostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CostWhereInput
  AND: [CostSubscriptionWhereInput!]
  OR: [CostSubscriptionWhereInput!]
  NOT: [CostSubscriptionWhereInput!]
}

input CostUpdateDataInput {
  tuitionUndergrad: Int
  tuitionGrad: Int
}

input CostUpdateManyMutationInput {
  tuitionUndergrad: Int
  tuitionGrad: Int
}

input CostUpdateOneInput {
  create: CostCreateInput
  update: CostUpdateDataInput
  upsert: CostUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input CostUpsertNestedInput {
  update: CostUpdateDataInput!
  create: CostCreateInput!
}

input CostWhereInput {
  tuitionUndergrad: Int
  tuitionUndergrad_not: Int
  tuitionUndergrad_in: [Int!]
  tuitionUndergrad_not_in: [Int!]
  tuitionUndergrad_lt: Int
  tuitionUndergrad_lte: Int
  tuitionUndergrad_gt: Int
  tuitionUndergrad_gte: Int
  tuitionGrad: Int
  tuitionGrad_not: Int
  tuitionGrad_in: [Int!]
  tuitionGrad_not_in: [Int!]
  tuitionGrad_lt: Int
  tuitionGrad_lte: Int
  tuitionGrad_gt: Int
  tuitionGrad_gte: Int
  AND: [CostWhereInput!]
  OR: [CostWhereInput!]
  NOT: [CostWhereInput!]
}

scalar DateTime

type Demographics {
  numStudents: Int
  numUndergraduates: Int
  numGraduates: Int
}

type DemographicsConnection {
  pageInfo: PageInfo!
  edges: [DemographicsEdge]!
  aggregate: AggregateDemographics!
}

input DemographicsCreateInput {
  numStudents: Int
  numUndergraduates: Int
  numGraduates: Int
}

input DemographicsCreateOneInput {
  create: DemographicsCreateInput
}

type DemographicsEdge {
  node: Demographics!
  cursor: String!
}

enum DemographicsOrderByInput {
  numStudents_ASC
  numStudents_DESC
  numUndergraduates_ASC
  numUndergraduates_DESC
  numGraduates_ASC
  numGraduates_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DemographicsPreviousValues {
  numStudents: Int
  numUndergraduates: Int
  numGraduates: Int
}

type DemographicsSubscriptionPayload {
  mutation: MutationType!
  node: Demographics
  updatedFields: [String!]
  previousValues: DemographicsPreviousValues
}

input DemographicsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DemographicsWhereInput
  AND: [DemographicsSubscriptionWhereInput!]
  OR: [DemographicsSubscriptionWhereInput!]
  NOT: [DemographicsSubscriptionWhereInput!]
}

input DemographicsUpdateDataInput {
  numStudents: Int
  numUndergraduates: Int
  numGraduates: Int
}

input DemographicsUpdateManyMutationInput {
  numStudents: Int
  numUndergraduates: Int
  numGraduates: Int
}

input DemographicsUpdateOneInput {
  create: DemographicsCreateInput
  update: DemographicsUpdateDataInput
  upsert: DemographicsUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input DemographicsUpsertNestedInput {
  update: DemographicsUpdateDataInput!
  create: DemographicsCreateInput!
}

input DemographicsWhereInput {
  numStudents: Int
  numStudents_not: Int
  numStudents_in: [Int!]
  numStudents_not_in: [Int!]
  numStudents_lt: Int
  numStudents_lte: Int
  numStudents_gt: Int
  numStudents_gte: Int
  numUndergraduates: Int
  numUndergraduates_not: Int
  numUndergraduates_in: [Int!]
  numUndergraduates_not_in: [Int!]
  numUndergraduates_lt: Int
  numUndergraduates_lte: Int
  numUndergraduates_gt: Int
  numUndergraduates_gte: Int
  numGraduates: Int
  numGraduates_not: Int
  numGraduates_in: [Int!]
  numGraduates_not_in: [Int!]
  numGraduates_lt: Int
  numGraduates_lte: Int
  numGraduates_gt: Int
  numGraduates_gte: Int
  AND: [DemographicsWhereInput!]
  OR: [DemographicsWhereInput!]
  NOT: [DemographicsWhereInput!]
}

type Geography {
  location: Location
}

type GeographyConnection {
  pageInfo: PageInfo!
  edges: [GeographyEdge]!
  aggregate: AggregateGeography!
}

input GeographyCreateInput {
  location: LocationCreateOneInput
}

input GeographyCreateOneInput {
  create: GeographyCreateInput
}

type GeographyEdge {
  node: Geography!
  cursor: String!
}

enum GeographyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GeographySubscriptionPayload {
  mutation: MutationType!
  node: Geography
  updatedFields: [String!]
}

input GeographySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GeographyWhereInput
  AND: [GeographySubscriptionWhereInput!]
  OR: [GeographySubscriptionWhereInput!]
  NOT: [GeographySubscriptionWhereInput!]
}

input GeographyUpdateDataInput {
  location: LocationUpdateOneInput
}

input GeographyUpdateOneInput {
  create: GeographyCreateInput
  update: GeographyUpdateDataInput
  upsert: GeographyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input GeographyUpsertNestedInput {
  update: GeographyUpdateDataInput!
  create: GeographyCreateInput!
}

input GeographyWhereInput {
  location: LocationWhereInput
  AND: [GeographyWhereInput!]
  OR: [GeographyWhereInput!]
  NOT: [GeographyWhereInput!]
}

type Location {
  latittude: Float
  longitude: Float
  state: String
  city: String
  zip: String
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  latittude: Float
  longitude: Float
  state: String
  city: String
  zip: String
}

input LocationCreateOneInput {
  create: LocationCreateInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  latittude_ASC
  latittude_DESC
  longitude_ASC
  longitude_DESC
  state_ASC
  state_DESC
  city_ASC
  city_DESC
  zip_ASC
  zip_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  latittude: Float
  longitude: Float
  state: String
  city: String
  zip: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  latittude: Float
  longitude: Float
  state: String
  city: String
  zip: String
}

input LocationUpdateManyMutationInput {
  latittude: Float
  longitude: Float
  state: String
  city: String
  zip: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  latittude: Float
  latittude_not: Float
  latittude_in: [Float!]
  latittude_not_in: [Float!]
  latittude_lt: Float
  latittude_lte: Float
  latittude_gt: Float
  latittude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

scalar Long

type major {
  name: String
  rank: Int
}

type majorConnection {
  pageInfo: PageInfo!
  edges: [majorEdge]!
  aggregate: Aggregatemajor!
}

input majorCreateInput {
  name: String
  rank: Int
}

input majorCreateManyInput {
  create: [majorCreateInput!]
}

type majorEdge {
  node: major!
  cursor: String!
}

enum majorOrderByInput {
  name_ASC
  name_DESC
  rank_ASC
  rank_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type majorPreviousValues {
  name: String
  rank: Int
}

input majorScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [majorScalarWhereInput!]
  OR: [majorScalarWhereInput!]
  NOT: [majorScalarWhereInput!]
}

type majorSubscriptionPayload {
  mutation: MutationType!
  node: major
  updatedFields: [String!]
  previousValues: majorPreviousValues
}

input majorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: majorWhereInput
  AND: [majorSubscriptionWhereInput!]
  OR: [majorSubscriptionWhereInput!]
  NOT: [majorSubscriptionWhereInput!]
}

input majorUpdateManyDataInput {
  name: String
  rank: Int
}

input majorUpdateManyInput {
  create: [majorCreateInput!]
  deleteMany: [majorScalarWhereInput!]
  updateMany: [majorUpdateManyWithWhereNestedInput!]
}

input majorUpdateManyMutationInput {
  name: String
  rank: Int
}

input majorUpdateManyWithWhereNestedInput {
  where: majorScalarWhereInput!
  data: majorUpdateManyDataInput!
}

input majorWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [majorWhereInput!]
  OR: [majorWhereInput!]
  NOT: [majorWhereInput!]
}

type Mutation {
  createAcademics(data: AcademicsCreateInput!): Academics!
  deleteManyAcademicses(where: AcademicsWhereInput): BatchPayload!
  createActScores(data: ActScoresCreateInput!): ActScores!
  deleteManyActScoreses(where: ActScoresWhereInput): BatchPayload!
  createActScoresTemplate(data: ActScoresTemplateCreateInput!): ActScoresTemplate!
  updateManyActScoresTemplates(data: ActScoresTemplateUpdateManyMutationInput!, where: ActScoresTemplateWhereInput): BatchPayload!
  deleteManyActScoresTemplates(where: ActScoresTemplateWhereInput): BatchPayload!
  createAdmission(data: AdmissionCreateInput!): Admission!
  updateManyAdmissions(data: AdmissionUpdateManyMutationInput!, where: AdmissionWhereInput): BatchPayload!
  deleteManyAdmissions(where: AdmissionWhereInput): BatchPayload!
  createBadge(data: BadgeCreateInput!): Badge!
  updateManyBadges(data: BadgeUpdateManyMutationInput!, where: BadgeWhereInput): BatchPayload!
  deleteManyBadges(where: BadgeWhereInput): BatchPayload!
  createCost(data: CostCreateInput!): Cost!
  updateManyCosts(data: CostUpdateManyMutationInput!, where: CostWhereInput): BatchPayload!
  deleteManyCosts(where: CostWhereInput): BatchPayload!
  createDemographics(data: DemographicsCreateInput!): Demographics!
  updateManyDemographicses(data: DemographicsUpdateManyMutationInput!, where: DemographicsWhereInput): BatchPayload!
  deleteManyDemographicses(where: DemographicsWhereInput): BatchPayload!
  createGeography(data: GeographyCreateInput!): Geography!
  deleteManyGeographies(where: GeographyWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createOverview(data: OverviewCreateInput!): Overview!
  updateManyOverviews(data: OverviewUpdateManyMutationInput!, where: OverviewWhereInput): BatchPayload!
  deleteManyOverviews(where: OverviewWhereInput): BatchPayload!
  createRanking(data: RankingCreateInput!): Ranking!
  updateManyRankings(data: RankingUpdateManyMutationInput!, where: RankingWhereInput): BatchPayload!
  deleteManyRankings(where: RankingWhereInput): BatchPayload!
  createSatScores(data: SatScoresCreateInput!): SatScores!
  deleteManySatScoreses(where: SatScoresWhereInput): BatchPayload!
  createSatScoresTemplate(data: SatScoresTemplateCreateInput!): SatScoresTemplate!
  updateManySatScoresTemplates(data: SatScoresTemplateUpdateManyMutationInput!, where: SatScoresTemplateWhereInput): BatchPayload!
  deleteManySatScoresTemplates(where: SatScoresTemplateWhereInput): BatchPayload!
  createSchoolDetailsItem(data: SchoolDetailsItemCreateInput!): SchoolDetailsItem!
  updateSchoolDetailsItem(data: SchoolDetailsItemUpdateInput!, where: SchoolDetailsItemWhereUniqueInput!): SchoolDetailsItem
  updateManySchoolDetailsItems(data: SchoolDetailsItemUpdateManyMutationInput!, where: SchoolDetailsItemWhereInput): BatchPayload!
  upsertSchoolDetailsItem(where: SchoolDetailsItemWhereUniqueInput!, create: SchoolDetailsItemCreateInput!, update: SchoolDetailsItemUpdateInput!): SchoolDetailsItem!
  deleteSchoolDetailsItem(where: SchoolDetailsItemWhereUniqueInput!): SchoolDetailsItem
  deleteManySchoolDetailsItems(where: SchoolDetailsItemWhereInput): BatchPayload!
  createSchoolListItem(data: SchoolListItemCreateInput!): SchoolListItem!
  updateSchoolListItem(data: SchoolListItemUpdateInput!, where: SchoolListItemWhereUniqueInput!): SchoolListItem
  updateManySchoolListItems(data: SchoolListItemUpdateManyMutationInput!, where: SchoolListItemWhereInput): BatchPayload!
  upsertSchoolListItem(where: SchoolListItemWhereUniqueInput!, create: SchoolListItemCreateInput!, update: SchoolListItemUpdateInput!): SchoolListItem!
  deleteSchoolListItem(where: SchoolListItemWhereUniqueInput!): SchoolListItem
  deleteManySchoolListItems(where: SchoolListItemWhereInput): BatchPayload!
  createSchoolRecommendation(data: SchoolRecommendationCreateInput!): SchoolRecommendation!
  updateManySchoolRecommendations(data: SchoolRecommendationUpdateManyMutationInput!, where: SchoolRecommendationWhereInput): BatchPayload!
  deleteManySchoolRecommendations(where: SchoolRecommendationWhereInput): BatchPayload!
  createSchoolSuggestion(data: SchoolSuggestionCreateInput!): SchoolSuggestion!
  updateManySchoolSuggestions(data: SchoolSuggestionUpdateManyMutationInput!, where: SchoolSuggestionWhereInput): BatchPayload!
  deleteManySchoolSuggestions(where: SchoolSuggestionWhereInput): BatchPayload!
  createcollege(data: collegeCreateInput!): college!
  updateManycolleges(data: collegeUpdateManyMutationInput!, where: collegeWhereInput): BatchPayload!
  deleteManycolleges(where: collegeWhereInput): BatchPayload!
  createmajor(data: majorCreateInput!): major!
  updateManymajors(data: majorUpdateManyMutationInput!, where: majorWhereInput): BatchPayload!
  deleteManymajors(where: majorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Overview {
  name: String!
  description: String
  notableRankings(where: RankingWhereInput, orderBy: RankingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ranking!]
  badges(where: BadgeWhereInput, orderBy: BadgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Badge!]
  location: Location
  url: String
  menOnly: Boolean
  womenOnly: Boolean
  operating: Boolean
  onlineOnly: Boolean
  deadline: DateTime
  system: System
}

type OverviewConnection {
  pageInfo: PageInfo!
  edges: [OverviewEdge]!
  aggregate: AggregateOverview!
}

input OverviewCreateInput {
  name: String!
  description: String
  notableRankings: RankingCreateManyInput
  badges: BadgeCreateManyInput
  location: LocationCreateOneInput
  url: String
  menOnly: Boolean
  womenOnly: Boolean
  operating: Boolean
  onlineOnly: Boolean
  deadline: DateTime
  system: System
}

input OverviewCreateOneInput {
  create: OverviewCreateInput
}

type OverviewEdge {
  node: Overview!
  cursor: String!
}

enum OverviewOrderByInput {
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  menOnly_ASC
  menOnly_DESC
  womenOnly_ASC
  womenOnly_DESC
  operating_ASC
  operating_DESC
  onlineOnly_ASC
  onlineOnly_DESC
  deadline_ASC
  deadline_DESC
  system_ASC
  system_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OverviewPreviousValues {
  name: String!
  description: String
  url: String
  menOnly: Boolean
  womenOnly: Boolean
  operating: Boolean
  onlineOnly: Boolean
  deadline: DateTime
  system: System
}

type OverviewSubscriptionPayload {
  mutation: MutationType!
  node: Overview
  updatedFields: [String!]
  previousValues: OverviewPreviousValues
}

input OverviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OverviewWhereInput
  AND: [OverviewSubscriptionWhereInput!]
  OR: [OverviewSubscriptionWhereInput!]
  NOT: [OverviewSubscriptionWhereInput!]
}

input OverviewUpdateDataInput {
  name: String
  description: String
  notableRankings: RankingUpdateManyInput
  badges: BadgeUpdateManyInput
  location: LocationUpdateOneInput
  url: String
  menOnly: Boolean
  womenOnly: Boolean
  operating: Boolean
  onlineOnly: Boolean
  deadline: DateTime
  system: System
}

input OverviewUpdateManyMutationInput {
  name: String
  description: String
  url: String
  menOnly: Boolean
  womenOnly: Boolean
  operating: Boolean
  onlineOnly: Boolean
  deadline: DateTime
  system: System
}

input OverviewUpdateOneInput {
  create: OverviewCreateInput
  update: OverviewUpdateDataInput
  upsert: OverviewUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input OverviewUpsertNestedInput {
  update: OverviewUpdateDataInput!
  create: OverviewCreateInput!
}

input OverviewWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  notableRankings_every: RankingWhereInput
  notableRankings_some: RankingWhereInput
  notableRankings_none: RankingWhereInput
  badges_every: BadgeWhereInput
  badges_some: BadgeWhereInput
  badges_none: BadgeWhereInput
  location: LocationWhereInput
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  menOnly: Boolean
  menOnly_not: Boolean
  womenOnly: Boolean
  womenOnly_not: Boolean
  operating: Boolean
  operating_not: Boolean
  onlineOnly: Boolean
  onlineOnly_not: Boolean
  deadline: DateTime
  deadline_not: DateTime
  deadline_in: [DateTime!]
  deadline_not_in: [DateTime!]
  deadline_lt: DateTime
  deadline_lte: DateTime
  deadline_gt: DateTime
  deadline_gte: DateTime
  system: System
  system_not: System
  system_in: [System!]
  system_not_in: [System!]
  AND: [OverviewWhereInput!]
  OR: [OverviewWhereInput!]
  NOT: [OverviewWhereInput!]
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  academicses(where: AcademicsWhereInput, orderBy: AcademicsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Academics]!
  academicsesConnection(where: AcademicsWhereInput, orderBy: AcademicsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AcademicsConnection!
  actScoreses(where: ActScoresWhereInput, orderBy: ActScoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActScores]!
  actScoresesConnection(where: ActScoresWhereInput, orderBy: ActScoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActScoresConnection!
  actScoresTemplates(where: ActScoresTemplateWhereInput, orderBy: ActScoresTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActScoresTemplate]!
  actScoresTemplatesConnection(where: ActScoresTemplateWhereInput, orderBy: ActScoresTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActScoresTemplateConnection!
  admissions(where: AdmissionWhereInput, orderBy: AdmissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admission]!
  admissionsConnection(where: AdmissionWhereInput, orderBy: AdmissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdmissionConnection!
  badges(where: BadgeWhereInput, orderBy: BadgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Badge]!
  badgesConnection(where: BadgeWhereInput, orderBy: BadgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BadgeConnection!
  costs(where: CostWhereInput, orderBy: CostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cost]!
  costsConnection(where: CostWhereInput, orderBy: CostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CostConnection!
  demographicses(where: DemographicsWhereInput, orderBy: DemographicsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Demographics]!
  demographicsesConnection(where: DemographicsWhereInput, orderBy: DemographicsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DemographicsConnection!
  geographies(where: GeographyWhereInput, orderBy: GeographyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Geography]!
  geographiesConnection(where: GeographyWhereInput, orderBy: GeographyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeographyConnection!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  overviews(where: OverviewWhereInput, orderBy: OverviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Overview]!
  overviewsConnection(where: OverviewWhereInput, orderBy: OverviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OverviewConnection!
  rankings(where: RankingWhereInput, orderBy: RankingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ranking]!
  rankingsConnection(where: RankingWhereInput, orderBy: RankingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RankingConnection!
  satScoreses(where: SatScoresWhereInput, orderBy: SatScoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SatScores]!
  satScoresesConnection(where: SatScoresWhereInput, orderBy: SatScoresOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SatScoresConnection!
  satScoresTemplates(where: SatScoresTemplateWhereInput, orderBy: SatScoresTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SatScoresTemplate]!
  satScoresTemplatesConnection(where: SatScoresTemplateWhereInput, orderBy: SatScoresTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SatScoresTemplateConnection!
  schoolDetailsItem(where: SchoolDetailsItemWhereUniqueInput!): SchoolDetailsItem
  schoolDetailsItems(where: SchoolDetailsItemWhereInput, orderBy: SchoolDetailsItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolDetailsItem]!
  schoolDetailsItemsConnection(where: SchoolDetailsItemWhereInput, orderBy: SchoolDetailsItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolDetailsItemConnection!
  schoolListItem(where: SchoolListItemWhereUniqueInput!): SchoolListItem
  schoolListItems(where: SchoolListItemWhereInput, orderBy: SchoolListItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolListItem]!
  schoolListItemsConnection(where: SchoolListItemWhereInput, orderBy: SchoolListItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolListItemConnection!
  schoolRecommendations(where: SchoolRecommendationWhereInput, orderBy: SchoolRecommendationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolRecommendation]!
  schoolRecommendationsConnection(where: SchoolRecommendationWhereInput, orderBy: SchoolRecommendationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolRecommendationConnection!
  schoolSuggestions(where: SchoolSuggestionWhereInput, orderBy: SchoolSuggestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolSuggestion]!
  schoolSuggestionsConnection(where: SchoolSuggestionWhereInput, orderBy: SchoolSuggestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolSuggestionConnection!
  colleges(where: collegeWhereInput, orderBy: collegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [college]!
  collegesConnection(where: collegeWhereInput, orderBy: collegeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): collegeConnection!
  majors(where: majorWhereInput, orderBy: majorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [major]!
  majorsConnection(where: majorWhereInput, orderBy: majorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): majorConnection!
  node(id: ID!): Node
}

type Ranking {
  name: String
  rank: Int
}

type RankingConnection {
  pageInfo: PageInfo!
  edges: [RankingEdge]!
  aggregate: AggregateRanking!
}

input RankingCreateInput {
  name: String
  rank: Int
}

input RankingCreateManyInput {
  create: [RankingCreateInput!]
}

input RankingCreateOneInput {
  create: RankingCreateInput
}

type RankingEdge {
  node: Ranking!
  cursor: String!
}

enum RankingOrderByInput {
  name_ASC
  name_DESC
  rank_ASC
  rank_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RankingPreviousValues {
  name: String
  rank: Int
}

input RankingScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [RankingScalarWhereInput!]
  OR: [RankingScalarWhereInput!]
  NOT: [RankingScalarWhereInput!]
}

type RankingSubscriptionPayload {
  mutation: MutationType!
  node: Ranking
  updatedFields: [String!]
  previousValues: RankingPreviousValues
}

input RankingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RankingWhereInput
  AND: [RankingSubscriptionWhereInput!]
  OR: [RankingSubscriptionWhereInput!]
  NOT: [RankingSubscriptionWhereInput!]
}

input RankingUpdateDataInput {
  name: String
  rank: Int
}

input RankingUpdateManyDataInput {
  name: String
  rank: Int
}

input RankingUpdateManyInput {
  create: [RankingCreateInput!]
  deleteMany: [RankingScalarWhereInput!]
  updateMany: [RankingUpdateManyWithWhereNestedInput!]
}

input RankingUpdateManyMutationInput {
  name: String
  rank: Int
}

input RankingUpdateManyWithWhereNestedInput {
  where: RankingScalarWhereInput!
  data: RankingUpdateManyDataInput!
}

input RankingUpdateOneInput {
  create: RankingCreateInput
  update: RankingUpdateDataInput
  upsert: RankingUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input RankingUpsertNestedInput {
  update: RankingUpdateDataInput!
  create: RankingCreateInput!
}

input RankingWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rank: Int
  rank_not: Int
  rank_in: [Int!]
  rank_not_in: [Int!]
  rank_lt: Int
  rank_lte: Int
  rank_gt: Int
  rank_gte: Int
  AND: [RankingWhereInput!]
  OR: [RankingWhereInput!]
  NOT: [RankingWhereInput!]
}

type SatScores {
  percentile25th: SatScoresTemplate
  mid: SatScoresTemplate
  percentile75th: SatScoresTemplate
}

type SatScoresConnection {
  pageInfo: PageInfo!
  edges: [SatScoresEdge]!
  aggregate: AggregateSatScores!
}

input SatScoresCreateInput {
  percentile25th: SatScoresTemplateCreateOneInput
  mid: SatScoresTemplateCreateOneInput
  percentile75th: SatScoresTemplateCreateOneInput
}

input SatScoresCreateOneInput {
  create: SatScoresCreateInput
}

type SatScoresEdge {
  node: SatScores!
  cursor: String!
}

enum SatScoresOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SatScoresSubscriptionPayload {
  mutation: MutationType!
  node: SatScores
  updatedFields: [String!]
}

input SatScoresSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SatScoresWhereInput
  AND: [SatScoresSubscriptionWhereInput!]
  OR: [SatScoresSubscriptionWhereInput!]
  NOT: [SatScoresSubscriptionWhereInput!]
}

type SatScoresTemplate {
  reading: Int
  writing: Int
  math: Int
}

type SatScoresTemplateConnection {
  pageInfo: PageInfo!
  edges: [SatScoresTemplateEdge]!
  aggregate: AggregateSatScoresTemplate!
}

input SatScoresTemplateCreateInput {
  reading: Int
  writing: Int
  math: Int
}

input SatScoresTemplateCreateOneInput {
  create: SatScoresTemplateCreateInput
}

type SatScoresTemplateEdge {
  node: SatScoresTemplate!
  cursor: String!
}

enum SatScoresTemplateOrderByInput {
  reading_ASC
  reading_DESC
  writing_ASC
  writing_DESC
  math_ASC
  math_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SatScoresTemplatePreviousValues {
  reading: Int
  writing: Int
  math: Int
}

type SatScoresTemplateSubscriptionPayload {
  mutation: MutationType!
  node: SatScoresTemplate
  updatedFields: [String!]
  previousValues: SatScoresTemplatePreviousValues
}

input SatScoresTemplateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SatScoresTemplateWhereInput
  AND: [SatScoresTemplateSubscriptionWhereInput!]
  OR: [SatScoresTemplateSubscriptionWhereInput!]
  NOT: [SatScoresTemplateSubscriptionWhereInput!]
}

input SatScoresTemplateUpdateDataInput {
  reading: Int
  writing: Int
  math: Int
}

input SatScoresTemplateUpdateManyMutationInput {
  reading: Int
  writing: Int
  math: Int
}

input SatScoresTemplateUpdateOneInput {
  create: SatScoresTemplateCreateInput
  update: SatScoresTemplateUpdateDataInput
  upsert: SatScoresTemplateUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input SatScoresTemplateUpsertNestedInput {
  update: SatScoresTemplateUpdateDataInput!
  create: SatScoresTemplateCreateInput!
}

input SatScoresTemplateWhereInput {
  reading: Int
  reading_not: Int
  reading_in: [Int!]
  reading_not_in: [Int!]
  reading_lt: Int
  reading_lte: Int
  reading_gt: Int
  reading_gte: Int
  writing: Int
  writing_not: Int
  writing_in: [Int!]
  writing_not_in: [Int!]
  writing_lt: Int
  writing_lte: Int
  writing_gt: Int
  writing_gte: Int
  math: Int
  math_not: Int
  math_in: [Int!]
  math_not_in: [Int!]
  math_lt: Int
  math_lte: Int
  math_gt: Int
  math_gte: Int
  AND: [SatScoresTemplateWhereInput!]
  OR: [SatScoresTemplateWhereInput!]
  NOT: [SatScoresTemplateWhereInput!]
}

input SatScoresUpdateDataInput {
  percentile25th: SatScoresTemplateUpdateOneInput
  mid: SatScoresTemplateUpdateOneInput
  percentile75th: SatScoresTemplateUpdateOneInput
}

input SatScoresUpdateOneInput {
  create: SatScoresCreateInput
  update: SatScoresUpdateDataInput
  upsert: SatScoresUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input SatScoresUpsertNestedInput {
  update: SatScoresUpdateDataInput!
  create: SatScoresCreateInput!
}

input SatScoresWhereInput {
  percentile25th: SatScoresTemplateWhereInput
  mid: SatScoresTemplateWhereInput
  percentile75th: SatScoresTemplateWhereInput
  AND: [SatScoresWhereInput!]
  OR: [SatScoresWhereInput!]
  NOT: [SatScoresWhereInput!]
}

type SchoolDetailsItem {
  id: ID!
  overview: Overview
  images: [String!]!
  admission: Admission
  academics: Academics
  cost: Cost
  demographics: Demographics
  geography: Geography
}

type SchoolDetailsItemConnection {
  pageInfo: PageInfo!
  edges: [SchoolDetailsItemEdge]!
  aggregate: AggregateSchoolDetailsItem!
}

input SchoolDetailsItemCreateimagesInput {
  set: [String!]
}

input SchoolDetailsItemCreateInput {
  overview: OverviewCreateOneInput
  images: SchoolDetailsItemCreateimagesInput
  admission: AdmissionCreateOneInput
  academics: AcademicsCreateOneInput
  cost: CostCreateOneInput
  demographics: DemographicsCreateOneInput
  geography: GeographyCreateOneInput
}

type SchoolDetailsItemEdge {
  node: SchoolDetailsItem!
  cursor: String!
}

enum SchoolDetailsItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolDetailsItemPreviousValues {
  id: ID!
  images: [String!]!
}

type SchoolDetailsItemSubscriptionPayload {
  mutation: MutationType!
  node: SchoolDetailsItem
  updatedFields: [String!]
  previousValues: SchoolDetailsItemPreviousValues
}

input SchoolDetailsItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolDetailsItemWhereInput
  AND: [SchoolDetailsItemSubscriptionWhereInput!]
  OR: [SchoolDetailsItemSubscriptionWhereInput!]
  NOT: [SchoolDetailsItemSubscriptionWhereInput!]
}

input SchoolDetailsItemUpdateimagesInput {
  set: [String!]
}

input SchoolDetailsItemUpdateInput {
  overview: OverviewUpdateOneInput
  images: SchoolDetailsItemUpdateimagesInput
  admission: AdmissionUpdateOneInput
  academics: AcademicsUpdateOneInput
  cost: CostUpdateOneInput
  demographics: DemographicsUpdateOneInput
  geography: GeographyUpdateOneInput
}

input SchoolDetailsItemUpdateManyMutationInput {
  images: SchoolDetailsItemUpdateimagesInput
}

input SchoolDetailsItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  overview: OverviewWhereInput
  admission: AdmissionWhereInput
  academics: AcademicsWhereInput
  cost: CostWhereInput
  demographics: DemographicsWhereInput
  geography: GeographyWhereInput
  AND: [SchoolDetailsItemWhereInput!]
  OR: [SchoolDetailsItemWhereInput!]
  NOT: [SchoolDetailsItemWhereInput!]
}

input SchoolDetailsItemWhereUniqueInput {
  id: ID
}

type SchoolListItem {
  id: ID!
  name: String
  usRanking: Ranking
  badges(where: BadgeWhereInput, orderBy: BadgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Badge!]
  thumbnail: String
  acceptanceRate: Float
  actScores: ActScores
  satScores: SatScores
  toeflMinScore: Int
  regularDeadline: DateTime
}

type SchoolListItemConnection {
  pageInfo: PageInfo!
  edges: [SchoolListItemEdge]!
  aggregate: AggregateSchoolListItem!
}

input SchoolListItemCreateInput {
  name: String
  usRanking: RankingCreateOneInput
  badges: BadgeCreateManyInput
  thumbnail: String
  acceptanceRate: Float
  actScores: ActScoresCreateOneInput
  satScores: SatScoresCreateOneInput
  toeflMinScore: Int
  regularDeadline: DateTime
}

type SchoolListItemEdge {
  node: SchoolListItem!
  cursor: String!
}

enum SchoolListItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  thumbnail_ASC
  thumbnail_DESC
  acceptanceRate_ASC
  acceptanceRate_DESC
  toeflMinScore_ASC
  toeflMinScore_DESC
  regularDeadline_ASC
  regularDeadline_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolListItemPreviousValues {
  id: ID!
  name: String
  thumbnail: String
  acceptanceRate: Float
  toeflMinScore: Int
  regularDeadline: DateTime
}

type SchoolListItemSubscriptionPayload {
  mutation: MutationType!
  node: SchoolListItem
  updatedFields: [String!]
  previousValues: SchoolListItemPreviousValues
}

input SchoolListItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolListItemWhereInput
  AND: [SchoolListItemSubscriptionWhereInput!]
  OR: [SchoolListItemSubscriptionWhereInput!]
  NOT: [SchoolListItemSubscriptionWhereInput!]
}

input SchoolListItemUpdateInput {
  name: String
  usRanking: RankingUpdateOneInput
  badges: BadgeUpdateManyInput
  thumbnail: String
  acceptanceRate: Float
  actScores: ActScoresUpdateOneInput
  satScores: SatScoresUpdateOneInput
  toeflMinScore: Int
  regularDeadline: DateTime
}

input SchoolListItemUpdateManyMutationInput {
  name: String
  thumbnail: String
  acceptanceRate: Float
  toeflMinScore: Int
  regularDeadline: DateTime
}

input SchoolListItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  usRanking: RankingWhereInput
  badges_every: BadgeWhereInput
  badges_some: BadgeWhereInput
  badges_none: BadgeWhereInput
  thumbnail: String
  thumbnail_not: String
  thumbnail_in: [String!]
  thumbnail_not_in: [String!]
  thumbnail_lt: String
  thumbnail_lte: String
  thumbnail_gt: String
  thumbnail_gte: String
  thumbnail_contains: String
  thumbnail_not_contains: String
  thumbnail_starts_with: String
  thumbnail_not_starts_with: String
  thumbnail_ends_with: String
  thumbnail_not_ends_with: String
  acceptanceRate: Float
  acceptanceRate_not: Float
  acceptanceRate_in: [Float!]
  acceptanceRate_not_in: [Float!]
  acceptanceRate_lt: Float
  acceptanceRate_lte: Float
  acceptanceRate_gt: Float
  acceptanceRate_gte: Float
  actScores: ActScoresWhereInput
  satScores: SatScoresWhereInput
  toeflMinScore: Int
  toeflMinScore_not: Int
  toeflMinScore_in: [Int!]
  toeflMinScore_not_in: [Int!]
  toeflMinScore_lt: Int
  toeflMinScore_lte: Int
  toeflMinScore_gt: Int
  toeflMinScore_gte: Int
  regularDeadline: DateTime
  regularDeadline_not: DateTime
  regularDeadline_in: [DateTime!]
  regularDeadline_not_in: [DateTime!]
  regularDeadline_lt: DateTime
  regularDeadline_lte: DateTime
  regularDeadline_gt: DateTime
  regularDeadline_gte: DateTime
  AND: [SchoolListItemWhereInput!]
  OR: [SchoolListItemWhereInput!]
  NOT: [SchoolListItemWhereInput!]
}

input SchoolListItemWhereUniqueInput {
  id: ID
}

type SchoolRecommendation {
  names: [String!]!
}

type SchoolRecommendationConnection {
  pageInfo: PageInfo!
  edges: [SchoolRecommendationEdge]!
  aggregate: AggregateSchoolRecommendation!
}

input SchoolRecommendationCreateInput {
  names: SchoolRecommendationCreatenamesInput
}

input SchoolRecommendationCreatenamesInput {
  set: [String!]
}

type SchoolRecommendationEdge {
  node: SchoolRecommendation!
  cursor: String!
}

enum SchoolRecommendationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolRecommendationPreviousValues {
  names: [String!]!
}

type SchoolRecommendationSubscriptionPayload {
  mutation: MutationType!
  node: SchoolRecommendation
  updatedFields: [String!]
  previousValues: SchoolRecommendationPreviousValues
}

input SchoolRecommendationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolRecommendationWhereInput
  AND: [SchoolRecommendationSubscriptionWhereInput!]
  OR: [SchoolRecommendationSubscriptionWhereInput!]
  NOT: [SchoolRecommendationSubscriptionWhereInput!]
}

input SchoolRecommendationUpdateManyMutationInput {
  names: SchoolRecommendationUpdatenamesInput
}

input SchoolRecommendationUpdatenamesInput {
  set: [String!]
}

input SchoolRecommendationWhereInput {
  AND: [SchoolRecommendationWhereInput!]
  OR: [SchoolRecommendationWhereInput!]
  NOT: [SchoolRecommendationWhereInput!]
}

type SchoolSuggestion {
  names: [String!]!
}

type SchoolSuggestionConnection {
  pageInfo: PageInfo!
  edges: [SchoolSuggestionEdge]!
  aggregate: AggregateSchoolSuggestion!
}

input SchoolSuggestionCreateInput {
  names: SchoolSuggestionCreatenamesInput
}

input SchoolSuggestionCreatenamesInput {
  set: [String!]
}

type SchoolSuggestionEdge {
  node: SchoolSuggestion!
  cursor: String!
}

enum SchoolSuggestionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolSuggestionPreviousValues {
  names: [String!]!
}

type SchoolSuggestionSubscriptionPayload {
  mutation: MutationType!
  node: SchoolSuggestion
  updatedFields: [String!]
  previousValues: SchoolSuggestionPreviousValues
}

input SchoolSuggestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolSuggestionWhereInput
  AND: [SchoolSuggestionSubscriptionWhereInput!]
  OR: [SchoolSuggestionSubscriptionWhereInput!]
  NOT: [SchoolSuggestionSubscriptionWhereInput!]
}

input SchoolSuggestionUpdateManyMutationInput {
  names: SchoolSuggestionUpdatenamesInput
}

input SchoolSuggestionUpdatenamesInput {
  set: [String!]
}

input SchoolSuggestionWhereInput {
  AND: [SchoolSuggestionWhereInput!]
  OR: [SchoolSuggestionWhereInput!]
  NOT: [SchoolSuggestionWhereInput!]
}

type Subscription {
  academics(where: AcademicsSubscriptionWhereInput): AcademicsSubscriptionPayload
  actScores(where: ActScoresSubscriptionWhereInput): ActScoresSubscriptionPayload
  actScoresTemplate(where: ActScoresTemplateSubscriptionWhereInput): ActScoresTemplateSubscriptionPayload
  admission(where: AdmissionSubscriptionWhereInput): AdmissionSubscriptionPayload
  badge(where: BadgeSubscriptionWhereInput): BadgeSubscriptionPayload
  cost(where: CostSubscriptionWhereInput): CostSubscriptionPayload
  demographics(where: DemographicsSubscriptionWhereInput): DemographicsSubscriptionPayload
  geography(where: GeographySubscriptionWhereInput): GeographySubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  overview(where: OverviewSubscriptionWhereInput): OverviewSubscriptionPayload
  ranking(where: RankingSubscriptionWhereInput): RankingSubscriptionPayload
  satScores(where: SatScoresSubscriptionWhereInput): SatScoresSubscriptionPayload
  satScoresTemplate(where: SatScoresTemplateSubscriptionWhereInput): SatScoresTemplateSubscriptionPayload
  schoolDetailsItem(where: SchoolDetailsItemSubscriptionWhereInput): SchoolDetailsItemSubscriptionPayload
  schoolListItem(where: SchoolListItemSubscriptionWhereInput): SchoolListItemSubscriptionPayload
  schoolRecommendation(where: SchoolRecommendationSubscriptionWhereInput): SchoolRecommendationSubscriptionPayload
  schoolSuggestion(where: SchoolSuggestionSubscriptionWhereInput): SchoolSuggestionSubscriptionPayload
  college(where: collegeSubscriptionWhereInput): collegeSubscriptionPayload
  major(where: majorSubscriptionWhereInput): majorSubscriptionPayload
}

enum System {
  SEMESTER
  QUARTER
}
`
      }
    