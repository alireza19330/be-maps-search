import { appConfig } from "./config";
import { getPlaceAutocomplete } from "./maps-api";
import { SearchResult } from "./searchResult";
import { TomtomSearchResult } from "./tomtomSearchResult";

export async function getAutoCompleteDetails(address: any): Promise<any> {
  // get autocomplete results
  const res = getPlaceAutocomplete(appConfig.tomtomApiKey, address).then(
    (autocompleteResults: TomtomSearchResult[]) => {
      return autocompleteResults.map((result) => convert(result));
    }
  );
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
