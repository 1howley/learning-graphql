import { Resolvers } from "./types";

export const resolvers: Resolvers = {
    Query: {
        featuredListings: (_, __, { dataSources }) => {
            return dataSources.listingApi.getFeaturedListings();
        },
        listing: (_, { id }, { dataSources }) => {
            return dataSources.listingApi.getListing(id);
        },
    },
};
