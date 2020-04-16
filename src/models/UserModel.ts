export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: { name: string, catch: string };
  website: string;
}
