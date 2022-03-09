import { Data } from "@angular/router";

export interface Author {
  name:string;
  image:MediaImage;
  dateOfBirth:Data;
  description:string;
}
