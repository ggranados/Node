const { 
	ApolloServer, 
	gql
	/*, 
	MockList  */
} = require("apollo-server");

const typeDefs = gql`

	scalar Date

	"""
	And Object that describes the characteristics of a SkiDay
	"""
	type SkiDay{
		"A ski day´s unique identifier"
		id: ID!
		"The date that a ski day occurred"
		date: Date!
		"Location where a ski day occurred"
		mountain: String!
		"The shape that the snow was in when this ski day happened"
		conditions: Conditions
	}

	type Query{
		totalDays: Int!
		allDays: [SkiDay!]!
	}	

	enum Conditions{
		POWDER
		HEAVY
		ICE
		THIN
	}

	input AddDayInput{
		date: Date!
		mountain: String
		conditions: Conditions
	}

	type RemoveDayPayload{
		day: SkiDay!
		removed: Boolean
		totalBefore: Int
		totalAfter: Int
	}

	type Mutation{
		removeDay(id: ID!): RemoveDayPayload!
		addDay(input: AddDayInput!): SkiDay
	}

	type Subscription{
		newDay: SkiDay!
	}
`;

/*
const resolvers = {

};
*/

const mocks = {
	Date: () => "1/2/2025",
	String: () => "Cool Data"
	/*,
	Query: () => ({
		allDays: () => new MockList(8)
	})*/
};

const server = new ApolloServer({
	typeDefs,
	mocks
});

server
	.listen()
	.then(({ url }) =>
		console.log(`Server running at ${url}`)
	);