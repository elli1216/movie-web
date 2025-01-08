import { Axios, AxiosResponse } from "axios";
import { IconType } from "react-icons";

export interface SliderButtonProps {
  isRight : boolean;
}

export interface ButtonProps {
  filled : boolean;
  level? : string;
  Icon : IconType;
  rounded? : boolean;
  onClick? : () => void;
  hidden? : boolean;
}

export interface CardProps {
  defaultCard? : boolean;
  removeMovie? : (id : number) => void;
  item : Media;
  MediaType : string;
  enableGenres? : boolean;
}

export enum MediaType {
  MOVIE = "movie",
  TV = "tv",
}

export interface Genre{
  id : number;
  name : string;
}

export interface Media{
  id : number;
  adult : boolean;
  backdrop_path : string;
  genre_ids : number[];
  original_language : string;
  original_title : string;
  overview : string;
  popularity : number;
  poster_path : string; 
  release_date : string;
  title : string;
  video : boolean;
  vote_average : number;
  vote_count : number;
  key? : string;
  type? : string;
  genres? : [];
}

export interface Video {
  id : string;
  key : string;
  type : string;
  name : string;
  site : string;
}

export interface MediaItem {
  id : number;
  type : "movie" | "tv";
  title : string;
}

export interface AxiosErrorType {
  code? : string;
  message : string;
  config : Axios;
  name : string;
  request? : XMLHttpRequest;
  response? : AxiosResponse;
  status? : number;
  stack? : string;
}

export interface RequestError extends Error{
  status? : number;
  details? : unknown;
}
export interface APIResponse<T>{
  data? : T;
  error?: RequestError | undefined;
}

export interface MovieResponse {
  page : number;
  total_pages : number;
  total_results : number;
  genres : Genre[]; 
  results : Media[];
}

export interface RenderGenreProps {
  generids : number[];
}

export interface ChildrenProvider { 
  children : React.ReactNode;
}

export interface ModalProps {
  modalData : Media;
  modalOpen : boolean;
  enableGenres : boolean;
  handleClose : () => void;
}

export interface SimilarMediaProps {
  id : number;
}