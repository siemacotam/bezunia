export interface FormValues {
  email: string;
  name: string;
  message: string;
  title: string;
}

export interface Message extends FormValues {
  date: string;
}
