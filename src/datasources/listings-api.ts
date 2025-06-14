import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing } from "../types";

export class ListingApi extends RESTDataSource {
    baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

    getFeaturedListings(): Promise<Listing[]> {
        return this.get<Listing[]>("featured-listings");
    }
    getListing(id: string): Promise<Listing> {
        return this.get<Listing>(`listings/${id}`);
    }
}