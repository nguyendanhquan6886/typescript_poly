type productType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  image: string[];
};
type hairType = {
  color: string;
  type: string;
};
type coordinatesType = {
  lat: number;
  lng: number;
};
type addressType = {
  address: string;
  city: string;
  coordinates: coordinatesType;
  postalCode: string;
  state: string;
};
type bankType = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};
type cartType = {
  id: number;
  products: productType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};
type cryptoType = {
  coin: string;
  wallet: string;
  networks: string;
};
type addresscompanyType = {
  address: string;
  city: string;
  coordinates: coordinatesType;
  postalCode: string;
  state: string;
};
type companyType = {
  address: addresscompanyType;
  department: string;
  name: string;
  title: string;
};
type userType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: number;
  hair: hairType;
  domain: string;
  ip: string;
  address: addressType;
  macAddress: string;
  university: string;
  bank: bankType;
  company: companyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: cryptoType;
};
