import { appConfig } from "./config";
import { getPlaceAutocomplete } from "./maps-api";
import { TomtomSearchResult } from "./tomtomSearchResult";
import { convertTomtomResult } from "./tomtomSearchResultConverter";

export async function getAutoCompleteDetails(address: any): Promise<any> {
  // get autocomplete results
  const res = getPlaceAutocomplete(appConfig.tomtomApiKey, address).then(
    (autocompleteResults: TomtomSearchResult[]) => {
      return autocompleteResults.map((result) => convertTomtomResult(result));
    }
  );
  return res;
}
