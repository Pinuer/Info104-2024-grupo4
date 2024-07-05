import { NextResponse } from "next/server";

export const puntos =[
    {id: 1, nombre : "La Cervecería Kunstmann ", coordenadas : [-39.836583, -73.278583], 
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/%22La+Cervecer%C3%ADa%22+Kunstmann/@-39.8368501,-73.2808802,17z/data=!3m1!4b1!4m6!3m5!1s0x9615f1e07207c325:0xe36903a999717487!8m2!3d-39.8368501!4d-73.2783053!16s%2Fg%2F11b7q5fnmy?entry=ttu",
    premios: ["Medalla de Plata en World Beer Awards",
        "Medalla de Oro en la Copa Cervezas de América",
        "Medalla de Oro en Copa Cervezas de América",
        "Medalla de Bronce English Style Brown Ale",
        "Mejor diseño de botella y embalaje Barley Wine​",        
        "Medalla de Plata en World Beer Awards"
    ]},
    
    {id:2, nombre:"Cerveceria Nothus", coordenadas: [-39.824107, -73.238481],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}], 
    linkD:"https://www.google.com/maps/place/Cervecer%C3%ADa+Nothus/@-39.8242023,-73.2410789,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef0e551fe46f:0xfa8f800ffdf30f2c!8m2!3d-39.8242023!4d-73.238504!16s%2Fg%2F11f7n4qfrm?entry=ttu",
    premios:["Medalla de Plata Copa Cervezas de América",
        "Medalla de Plata Copa Tayrona", 
        "Medalla de Plata Copa Austral",
        "Medalla de Oro Copa Cervezas de América",
        "Medalla de Oro Copa Cervezas de América",     
        "Medalla Oro Copa Cervezas de América"
    ]},

    
    {id:3, nombre:"Cerveceria Calle Calle", coordenadas: [-39.855059, -73.189059],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Calle+Calle/@-39.8551644,-73.1917385,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef31ec2ca56b:0xd62d67d323685dad!8m2!3d-39.8551644!4d-73.1891636!16s%2Fg%2F11bz__l6q6?entry=ttu",
    premios:["Medallas de Oro en categorías como American Pale Ale y Porter",
        "Medallas de plata y bronce en diversas ediciones de Copa Cervezas de América", 
        "Medallas de Oro en categorías como American IPA, Stout, y Pale Ale",
        "Medallas de plata y bronce en Campeonato Chileno de Cervezas" ]},

    {id:4, nombre:"Cerveceria los Torreones", coordenadas: [-39.807622621037474, -73.21547458765774],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Los+Torreones/@-39.8109733,-73.2233311,15z/data=!4m6!3m5!1s0x9615ee9d6365a1ef:0x319091958e03d416!8m2!3d-39.8085011!4d-73.2156046!16s%2Fg%2F11dxlgkjlb?entry=ttu",
    premios:["Medalla de Oro en la Copa Cervezas de América",
        "Medalla de Oro en el Campeonato Chileno de Cervezas"
    ]},

    {id:5, nombre:"Bar Bundor", coordenadas: [-39.80899418365889, -73.25492250642007],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Bar+Bundor/@-39.8097689,-73.2575078,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede0c5b2a819:0xfd70cd0832753598!8m2!3d-39.8097689!4d-73.2549275!16s%2Fg%2F11g6qjtxh9?entry=ttu",
    premios:[ "Bronce Mejor Bar Cervecero", 
        "Oro en la Chile Beer Cup de 2014", 
        "Plata, Cerveza Kali, Copa Cervezas de América",
        "Bronce, Cerveza Cacao Brown Ale, Copa Cervezas de América"]},

    {id:6, nombre:"El Growler", coordenadas: [-39.8097984810652, -73.25409887445188],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/El+Growler/@-39.8099551,-73.2566899,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede0be7b6785:0x8bcdcfe539bf5071!8m2!3d-39.8099551!4d-73.2541096!16s%2Fg%2F11bwyw4n1r?entry=ttu",
    premios:["Medalla de Plata SCHWARZELAGER"]},

    {id:7, nombre:"El Regreso Beer Company", coordenadas: [-39.819660127756805, -73.24644226089781],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/El+Regreso+Beer+Company/@-39.8194331,-73.2518908,17z/data=!4m6!3m5!1s0x9615ef67d9d57b29:0x8511798f794376fb!8m2!3d-39.8198217!4d-73.2462508!16s%2Fg%2F11kqr_pqzn?entry=ttu"},

    {id:8, nombre:"Cerveza carva", coordenadas: [-39.834844724481535, -73.2187401575215],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+carva/@-39.8349889,-73.221299,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef253ada5a3d:0x6a072d3c207b87c5!8m2!3d-39.8349889!4d-73.2187187!16s%2Fg%2F11fj061jms?entry=ttu"},

    {id:9, nombre:"Cerveza Totem", coordenadas: [-39.85027684666218, -73.19666409984868],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 0}],
    linkD:"https://www.google.com/maps/place/Cerveza+Totem/@-39.8504457,-73.1992444,17z/data=!3m1!4b1!4m6!3m5!1s0x9615eff07eed37b7:0xf0b946a74affaf24!8m2!3d-39.8504457!4d-73.1966641!16s%2Fg%2F11sbdbqgbd?entry=ttu"},

    {id:10, nombre:"Drakkar Hidromiel", coordenadas: [-39.82687211885121, -73.22671976266108],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 0}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Drakkar+Hidromiel/@-39.8309865,-73.2282931,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef81512fcdb3:0xb78bfc9ff1b44b4e!8m2!3d-39.8309865!4d-73.2257128!16s%2Fg%2F11lfzpt_vc?entry=ttu"},

    {id:11, nombre:"Cerveza Schenke Brüder", coordenadas: [-39.77481266517584, -73.1938453354861],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+Schenke+Brüder/@-39.775465,-73.1964558,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede37b2a36dd:0xb532df1f1f92fea7!8m2!3d-39.775465!4d-73.1938755!16s%2Fg%2F11s610nrzv?entry=ttu",
    premios:["Bronce, German lagers Copa Cervezas de América 2022"]},

    {id:12, nombre:"Cerveza 3 Puentes", coordenadas: [-39.83504528204056, -73.20354547544007],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 0}],
    linkD:"https://www.google.com/maps/place/Cerveza+3+Puentes/@-39.8377206,-73.2060705,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef3990a57233:0x8505b5beb6122d7b!8m2!3d-39.8377206!4d-73.2034902!16s%2Fg%2F11flgbw9ww?entry=ttu"},

    {id:13, nombre:"La Bota Cervecera ", coordenadas: [-39.81289639386381, -73.24800577348306],
    tipos : [{tipo : "Lager", estado : 0}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/La+Bota+Cervecera/@-39.8147735,-73.2577225,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef240dea5907:0x5758e8ad55600e30!8m2!3d-39.8147735!4d-73.2551422!16s%2Fg%2F11fk3yl1bj?entry=ttu"},

    {id:14, nombre:"Cervecería Mättig Spa", coordenadas: [-39.86179899527966, -73.19204416281889],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Mättig+Spa/@-39.8635937,-73.1949105,17z/data=!4m6!3m5!1s0x9615efab831f513d:0x3930b3835e522e02!8m2!3d-39.8639531!4d-73.1917121!16s%2Fg%2F11ng6h5j_0?entry=ttu"},

    {id:15, nombre:"Cervecería Elfo Del Bosque", coordenadas: [-39.842699789597006, -73.20635907804606],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Elfo+Del+Bosque/@-39.8451762,-73.20986,17z/data=!3m1!4b1!4m6!3m5!1s0x9615eee042bd5ef3:0xd51f3e12d89dfe66!8m2!3d-39.8451762!4d-73.2072797!16s%2Fg%2F11hcw0rqnz?entry=ttu",
    premios:["Medalla Plata Copa Cervezas de América",
        "Medalla Oro Copa de Cervezas Tayrona"]},

    {id:16, nombre:"Cuello Negro",coordenadas:[-39.854937558127055, -73.32756645581802],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://maps.app.goo.gl/p3Hetxsvb3MAL8yVA",
    premios:["Medalla de Oro BRUSSELS BEER CHALLENGE",
        "Medalla de Bronce INTERNATIONAL BEER CHALLENGE",
        "Medalla de Plata COPA CERVECERA PACÍFICO",
        "Medalla de Oro BRUSSELS BEER CHALLENGE",
        "Medalla de Bronce en COPA CERVEZAS DE AMERICA",
        "Medalla de Bronce Stout"]},

    {id:17, nombre:"Cervecería Viralata",coordenadas:[-39.82461289726107, -73.22270294746943],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecer%C3%ADa+Viralata/@-39.8248725,-73.2252242,17z/data=!4m14!1m7!3m6!1s0x9615ef1abb186d7f:0xa49363ee3428a2eb!2sCervecer%C3%ADa+Viralata!8m2!3d-39.8248766!4d-73.2226493!16s%2Fg%2F11vbp92hfr!3m5!1s0x9615ef1abb186d7f:0xa49363ee3428a2eb!8m2!3d-39.8248766!4d-73.2226493!16s%2Fg%2F11vbp92hfr?entry=ttu",
    premios:["Medalla Bronce Copa Austral",
        "Medalla Oro Copa Cervecera Mitad Del Mundo",
        "Medalla Plata Copa de Cervezas Tayrona",
        "Medalla Plata Copa Patagónica de Cervezas",
        "Medalla Bronce Desafío Conquistadores"
    ]
    },

    {id:18, nombre:"Barbudo Growler", coordenadas:[-39.817147697805694, -73.24293788979706],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Barbudo+Growler/@-39.8173002,-73.2454806,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef857ee885df:0x58a1a8360dbbc1b4!8m2!3d-39.8173043!4d-73.2429057!16s%2Fg%2F11h6n4stfx?hl=es&entry=ttu"},

    {id:19, nombre:"Cervecería Valdilluvia", coordenadas:[-39.82396865669709, -73.21892697445966],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 0}],
    linkD:"https://maps.app.goo.gl/fmtLbysvmrCN5Wn46"
    },

    {id:20, nombre:"Bünemann´s SPELUNKE", coordenadas:[-39.8076187222947, -73.24982602329263],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://maps.app.goo.gl/B6B9J2oiAL73jbo89"
    },

    {id:21, nombre:"Cerveza Nebú", coordenadas:[-39.82396865669709, -73.2106872281042],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 0}],
    linkD:"https://maps.app.goo.gl/ZZrd9omYHZeGjd5e6",
    premios:["Medalla Bronce Copa America",
        "Medalla Bronce Copa America Summer Golden"]}


];

export async function GET(){
    return new NextResponse.json(puntos);
}

