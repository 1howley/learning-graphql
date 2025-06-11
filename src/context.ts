import { ListingApi } from "./datasources/listings-api";

export type DataSourceContext = {
    dataSources: {
        listingApi: ListingApi;
    };
}