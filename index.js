
    function addWorkCard(params = {} ){
    const template = document.querySelector("#portfolio-card-template");
    const container = document.querySelector(".portfolio-content");

    template.content.querySelector(".portfolio-card-titulo").textContent = params.title;

    template.content.querySelector(".portfolio-card-text").textContent = params.description;

    template.content.querySelector(".portfolio-image").src = params.image;

    template.content.querySelector(".portfolio-card-link").href = params.url;


    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}


function getWorks(){
}

return fetch("https://preview.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=4QeymoSpTHLZ4Abi4GHRd6--tUHt56IPFQKu6smlZvU&&content_type=work"

).then(res=>{
    return res.json()
    
}).then((data)=>{
    const fieldCollection = data.items.map((item)=>{
        return{
            title: item.fields.titulo,
            description: item.fields.description,
            image: item.fields.image,
            url: item.fields.url
        }
    })
    return fieldCollection
});




function main(){

    
    getWorks().then(function(works){
        for( const w of works){
            addWorkCard(w)
        }
    })
}
main();


//addWorkCard({title: "hola",
//             url:"https://google.com",
//            image:"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5c07de155bafe805dc7886ef/sonic0_0.jpg"});
//addWorkCard();
//addWorkCard();



