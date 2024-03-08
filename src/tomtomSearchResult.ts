export interface TomtomSearchResult {
  type: string;
  id: string;
  summary: {
    numResults: number;
    totalResults: number;
  };
  address: {
    streetNumber: string;
    streetName: string;
    municipalitySubdivision: string;
    municipality: string;
    countrySubdivision: string;
    postalCode: string;
    country: string;
    countryCode: string;
    freeformAddress: string;
  };
}
