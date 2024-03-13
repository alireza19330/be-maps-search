import { SearchResult } from "./searchResult";
import { TomtomSearchResult } from "./tomtomSearchResult";

export function convertTomtomResult(source: TomtomSearchResult): SearchResult {
  return {
    type: source.type,
    placeId: source.id,
    address: {
      streetNumber: source.address.streetNumber,
      streetName: source.address.streetName,
      municipalitySubdivision: source.address.municipalitySubdivision,
      municipality: source.address.municipality,
      countrySubdivision: source.address.countrySubdivision,
      postalCode: source.address.postalCode,
      country: source.address.country,
      countryCode: source.address.countryCode,
      freeformAddress: source.address.freeformAddress,
    },
  };
}
