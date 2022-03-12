import { Data } from "@angular/router";

export interface Books {
  author:string;
  title:string;
  image:MediaImage;
  dateOfPublication:Data;
  description:string;
}
