export interface SearchResult {
  type: string;
  placeId: string;
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
