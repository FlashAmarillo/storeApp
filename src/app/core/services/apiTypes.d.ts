export interface APITypes {
  results: Result[];
  pages:   number;
  records: number;
  current: number;
  filter:  string;
}

export interface Result {
  _id:                           string;
  title:                         string;
  description:                   null;
  sku:                           string;
  regular_price:                 number;
  id_marketplace_store_category: string;
  images:                        Image[];
  status:                        Status;
  id_product:                    number;
  id_depot:                      number;
  medium:                        Medium[];
  small:                         Medium[];
  id_marketplace_store_brand:    IDMarketplaceStoreBrand;
  amenity_add:                   boolean;
  booking_detail:                boolean;
  has_booking:                   boolean;
  has_daypass:                   boolean;
  unit:                          null;
  order_anonymous:               boolean;
  featured:                      boolean;
  offer_percent:                 null;
  offer_price:                   null;
  date_on_sale_from:             null;
  date_on_sale_to:               null;
  stock_quantity:                number;
  factor:                        string;
  regular_usd:                   number;
  tax_rate:                      number;
  print:                         boolean;
  variations:                    any[];
  large:                         Large[];
  image:                         Image;
  variation:                     boolean;
  size:                          boolean;
  color1:                        boolean;
  color2:                        boolean;
  model:                         boolean;
  reviews_average:               number;
  pickup:                        any[];
  check_pickup:                  boolean;
  has_variation:                 boolean;
  hash:                          Hash;
  site_name:                     SiteName;
  marketplace:                   string;
  store:                         Store;
  ico:                           Ico;
  flag:                          Flag;
  url:                           string;
  offer_usd:                     null;
  offer_min:                     null;
  brand:                         string;
}

export enum Flag {
  The0078Ab = "#0078AB",
}

export enum Hash {
  B5LjnrSjjiUwQXbzC0AH7QeCPwJhhXAEXgOrQIOak0D7W90D930TqI6JYBR = "b5ljnrSjji_Uw_qXbzC0A_H7QeCPwJhhXAEXgOrQI-Oak0D7w90D930Tq-I6jYBR",
}

export enum Ico {
  ObjectHTMLCollection = "[object HTMLCollection]",
}

export interface IDMarketplaceStoreBrand {
  $id: string;
}

export interface Image {
  _id:        IDMarketplaceStoreBrand;
  name:       string;
  image:      string;
  position:   number;
  mime:       MIME;
  id_product: number;
  massive?:   boolean;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export interface Large {
  position: number;
  image:    string;
  text:     string;
}

export interface Medium {
  image: string;
  text:  string;
}

export enum SiteName {
  AlimentosGlobal = "alimentos global",
}

export enum Status {
  Publish = "publish",
}

export enum Store {
  Tienda1 = "Tienda 1",
}
