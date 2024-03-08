import { getPlaceAutocomplete } from "./maps-api";
import { SearchResult } from "./searchResult";
import { TomtomSearchResult } from "./tomtomSearchResult";

export async function getAutoCompleteDetails(address: any): Promise<any> {
  const apiKey = process.env.TOMTOM_API_KEY;
  // get autocomplete results
  const res = getPlaceAutocomplete(apiKey, address)
    .then(async (autocompleteResults: TomtomSearchResult[]) => {
      return autocompleteResults.map((result) => convert(result));
    })
    .catch((error: Error) => {
      console.error(error.message);
    });
  return res;
}

function convert(source: TomtomSearchResult): SearchResult {
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
