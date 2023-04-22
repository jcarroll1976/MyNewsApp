import axios from "axios";
import { NewsResponse,Articles,Source } from "../models/Articles";

const apiKey=process.env.REACT_APP_NEWS_API_KEY || "";


export function fetchNews():Promise<Articles[]> {
    return axios.get<NewsResponse>(`https://newsapi.org/v2/everything?domains=msnbc.com&apiKey=${apiKey}`)
    .then((response) => {
        return response.data.articles
    })
}