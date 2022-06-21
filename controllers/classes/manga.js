export class Manga{
    site = String;
    title = String;
    about = String;
    link = String;

    constructor(site){
        this.site = site;
    }

    getTitle(){
        return this.title;
    }

    getAbout(){
        return this.about;
    }

    getLink(){
        return this.link;
    }
}