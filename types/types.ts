import { ChangeEvent } from "react";

export type InputesType = {
  type?: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder: string;
};
