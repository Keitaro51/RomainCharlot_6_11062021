class Photographer {
    
    async allPhotographers(){
        let data = await fetch('../data/FishEyeData.json')
        data = await data.json()
        return data
    }
    
    async taggedPhotographers(tag){
        let taggedArtists =[]
        let data = await fetch('../data/FishEyeData.json')
        data = await data.json()
        //console.log(data[0].photographers)
        for(const artist of data[0].photographers){
            if(artist.tags.includes(tag)){
                taggedArtists.push(`${artist.id}`) //TODO some artists have sport, other have sportS tag
            }
        }
        return taggedArtists
    }

    async onePhotographer(id){
        let data = await fetch('../data/FishEyeData.json')
        data = await data.json()
        let photographerLibrary =[]
        
        for(const artist of data[0].photographers){
            if(artist.id == id){
                photographerLibrary.push(artist)
            }
        }
        for(const media of data[0].media){
            if(media.photographerId == id){
                photographerLibrary.push(media)
            }
        }
        return photographerLibrary
    }
}