const axios = require("axios");
import { Manga } from "../manga";

export class MangaTube extends Manga{
    async connect(){
        let client = await axios.default.get(this.site);
        if(client.status == 200) return true;
        else return false;
    }

    async getReleases(){
        let client = await axios.default.post(this.site + "jsons/news/chapters.json", new URLSearchParams({
            pagina : 1
        }));

        let data = await client.data;

        let list = Object(data);
        for(const item in list){
            if(item == "releases"){
                let releaseList = list[item];
                releaseList.map((element)=> console.log(element))
            }
        }
    }

    async search(name){
        let searchList = Array();
        let client = await axios.default.get(encodeURI(this.site + `wp-json/site/search/?keyword=${name}&type=undefined&nonce=5e74532793`),{
            headers : {
                "Accept" : "application/json"
            }
        });
        let data = await Object(client.data);
        for(let x in data){
            searchList.push({
                "title" : data[x].title,
                "img" : data[x].img,
                "url" : data[x].url,
                "autor" : data[x].autor,
                "address" : x
            });
        }
        return searchList;
    }

    async getChapterList(manga, address, page, callback){
        let list = [];
        let client = await axios.default.get(encodeURI(manga + `jsons/series/chapters_list.json?page=${page}&order=asc&id_s=${address}`),{
            headers : {
                "Accept" : "application/json"
            },
            timeout : 2000
        });
        let data = await Object(client.data);
        for(const x in data){
            if(x == "chapters"){
                data[x].map((element)=>{
                    list.push(element)
                })
            }
        }
        callback(list);
    }
}

// https://mangatube.site/jsons/series/chapters_list.json?page=1&order=desc&id_s=14415