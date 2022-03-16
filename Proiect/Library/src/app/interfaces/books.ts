import { Data } from "@angular/router";

export interface Books {
  id:string;
  author:string;
  title:string;
  image:string;
  dateOfPublication: Date;
  description:string;
}
