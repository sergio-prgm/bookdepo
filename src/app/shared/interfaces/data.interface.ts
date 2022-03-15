export interface ApiResponse {
  items: Book[]
}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: BookInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface BookInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  // description: string;
  // industryIdentifiers: IndustryIdentifier[];
  // readingModes: ReadingModes;
  pageCount: number;
  // printType: string;
  categories: string[];
  // maturityRating: string;
  // allowAnonLogging: boolean;
  // contentVersion: string;
  // panelizationSummary: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  // canonicalVolumeLink: string;
}
interface IndustryIdentifier {
    type: string;
    identifier: string;
}
interface ReadingModes {
    text: boolean;
    image: boolean;
}

interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

interface ImageLinks {
    smallThumbnail?: string;
    thumbnail: string;
}

interface ListPrice {
    amount: number;
    currencyCode: string;
}

interface RetailPrice {
    amount: number;
    currencyCode: string;
}

interface ListPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

interface RetailPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

interface Offer {
    finskyOfferType: number;
    listPrice: ListPrice2;
    retailPrice: RetailPrice2;
    giftable: boolean;
}

interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
    buyLink: string;
    offers: Offer[];
}

interface Epub {
    isAvailable: boolean;
    acsTokenLink: string;
}

interface Pdf {
    isAvailable: boolean;
    acsTokenLink: string;
}

interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

interface SearchInfo {
    textSnippet: string;
}






