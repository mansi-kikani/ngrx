export class User {
  id?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  token?: string;
}
export class UserData {
  id?: string;
  email?: string;
  username?: string;
  name?: Name;
  address?: AddressData;
  password?: string;
  phone?: string;
}
export class Name {
  firstname?: string;
  lastname?: string;
}
export class AddressData {
  city?: string;
  street?: string;
  number?: Number;
  zipcode?: number;
}
