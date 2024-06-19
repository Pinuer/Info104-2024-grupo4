import { NextResponse } from "next/server";

export const puntos =[
    {id: 1, nombre : "La Cervecería Kunstmann ", coordenadas : [-39.836583, -73.278583], 
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/%22La+Cervecer%C3%ADa%22+Kunstmann/@-39.8368501,-73.2808802,17z/data=!3m1!4b1!4m6!3m5!1s0x9615f1e07207c325:0xe36903a999717487!8m2!3d-39.8368501!4d-73.2783053!16s%2Fg%2F11b7q5fnmy?entry=ttu"},
    
    {id:2, nombre:"Cerveceria Nothus", coordenadas: [-39.824107, -73.238481],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}], 
    linkD:"https://www.google.com/maps/place/Cervecer%C3%ADa+Nothus/@-39.8242023,-73.2410789,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef0e551fe46f:0xfa8f800ffdf30f2c!8m2!3d-39.8242023!4d-73.238504!16s%2Fg%2F11f7n4qfrm?entry=ttu",
    premios:["Plata Copa Cervezas de América, Chile 2022 (Etapa Nacional)",
        "Plata Copa Tayrona, Colombia 2023", 
        "Plata Copa Austral, Argentina 2023" ,
        "Oro Copa Cervezas de América, Chile 2022 (Etapa Final)",
        "Bronce Copa Cervezas de América 2022 (Etapa Nacional)", 
        "Plata Copa Mitad del Mundo, Ecuador 2023",
        "Plata Mejor Cerveza de América, Copa Cervezas de América, Chile 2023",
        "Oro Mejor Cerveza de Chile, Copa Cervezas de América, Chile 2023",     
        "Oro Copa Cervezas de América, Chile 2023", 
        "Plata Copa Austral, Argentina 2023" ]},

    
    {id:3, nombre:"Cerveceria Calle Calle", coordenadas: [-39.855059, -73.189059],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Calle+Calle/@-39.8551644,-73.1917385,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef31ec2ca56b:0xd62d67d323685dad!8m2!3d-39.8551644!4d-73.1891636!16s%2Fg%2F11bz__l6q6?entry=ttu",
    premios:["ORO Copa cervecera MITAD DEL MUNDO (2022)",
        "ORO 6°COPA NACIONAL DE CERVECEROS", 
        "BRONCE 6°COPA NACIONAL DE CERVECEROS" ]},

    {id:4, nombre:"Cerveceria los Torreones", coordenadas: [-39.807622621037474, -73.21547458765774],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Los+Torreones/@-39.8109733,-73.2233311,15z/data=!4m6!3m5!1s0x9615ee9d6365a1ef:0x319091958e03d416!8m2!3d-39.8085011!4d-73.2156046!16s%2Fg%2F11dxlgkjlb?entry=ttu"},

    {id:5, nombre:"Bar Bundor", coordenadas: [-39.80899418365889, -73.25492250642007],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Bar+Bundor/@-39.8097689,-73.2575078,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede0c5b2a819:0xfd70cd0832753598!8m2!3d-39.8097689!4d-73.2549275!16s%2Fg%2F11g6qjtxh9?entry=ttu",
    premios:[ "Bronce Mejor Bar Cervecero", 
        "Oro en la Chile Beer Cup de 2014", 
        "Plata, Cerveza Kali, Copa Cervezas de América, Chile 2023",
        "Bronce, Cerveza Cacao Brown Ale, Copa Cervezas de América, Chile 2023"]},

    {id:6, nombre:"El Growler", coordenadas: [-39.8097984810652, -73.25409887445188],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/El+Growler/@-39.8099551,-73.2566899,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede0be7b6785:0x8bcdcfe539bf5071!8m2!3d-39.8099551!4d-73.2541096!16s%2Fg%2F11bwyw4n1r?entry=ttu"},

    {id:7, nombre:"El Regreso Beer Company", coordenadas: [-39.819660127756805, -73.24644226089781],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/El+Regreso+Beer+Company/@-39.8194331,-73.2518908,17z/data=!4m6!3m5!1s0x9615ef67d9d57b29:0x8511798f794376fb!8m2!3d-39.8198217!4d-73.2462508!16s%2Fg%2F11kqr_pqzn?entry=ttu"},

    {id:8, nombre:"Cerveza carva", coordenadas: [-39.834844724481535, -73.2187401575215],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+carva/@-39.8349889,-73.221299,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef253ada5a3d:0x6a072d3c207b87c5!8m2!3d-39.8349889!4d-73.2187187!16s%2Fg%2F11fj061jms?entry=ttu"},

    {id:9, nombre:"Cerveza Totem", coordenadas: [-39.85027684666218, -73.19666409984868],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+Totem/@-39.8504457,-73.1992444,17z/data=!3m1!4b1!4m6!3m5!1s0x9615eff07eed37b7:0xf0b946a74affaf24!8m2!3d-39.8504457!4d-73.1966641!16s%2Fg%2F11sbdbqgbd?entry=ttu"},

    {id:10, nombre:"Drakkar Hidromiel", coordenadas: [-39.82687211885121, -73.22671976266108],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Drakkar+Hidromiel/@-39.8309865,-73.2282931,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef81512fcdb3:0xb78bfc9ff1b44b4e!8m2!3d-39.8309865!4d-73.2257128!16s%2Fg%2F11lfzpt_vc?entry=ttu"},

    {id:11, nombre:"Cerveza Schenke Brüder", coordenadas: [-39.77481266517584, -73.1938453354861],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+Schenke+Brüder/@-39.775465,-73.1964558,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ede37b2a36dd:0xb532df1f1f92fea7!8m2!3d-39.775465!4d-73.1938755!16s%2Fg%2F11s610nrzv?entry=ttu",
    premios:["Bronce, German lagers Copa Cervezas de América, Chile 2022 (Etapa Nacional)"]},

    {id:12, nombre:"Cerveza 3 Puentes", coordenadas: [-39.83504528204056, -73.20354547544007],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cerveza+3+Puentes/@-39.8377206,-73.2060705,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef3990a57233:0x8505b5beb6122d7b!8m2!3d-39.8377206!4d-73.2034902!16s%2Fg%2F11flgbw9ww?entry=ttu"},
    
    {id:13, nombre:"La Bota Cervecera ", coordenadas: [-39.81289639386381, -73.24800577348306],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/La+Bota+Cervecera/@-39.8147735,-73.2577225,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef240dea5907:0x5758e8ad55600e30!8m2!3d-39.8147735!4d-73.2551422!16s%2Fg%2F11fk3yl1bj?entry=ttu"},

        
    {id:14, nombre:"Cervecería Mättig Spa", coordenadas: [-39.86179899527966, -73.19204416281889],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Mättig+Spa/@-39.8635937,-73.1949105,17z/data=!4m6!3m5!1s0x9615efab831f513d:0x3930b3835e522e02!8m2!3d-39.8639531!4d-73.1917121!16s%2Fg%2F11ng6h5j_0?entry=ttu"},

    {id:15, nombre:"Cervecería Elfo Del Bosque", coordenadas: [-39.842699789597006, -73.20635907804606],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/Cervecería+Elfo+Del+Bosque/@-39.8451762,-73.20986,17z/data=!3m1!4b1!4m6!3m5!1s0x9615eee042bd5ef3:0xd51f3e12d89dfe66!8m2!3d-39.8451762!4d-73.2072797!16s%2Fg%2F11hcw0rqnz?entry=ttu"}

];

export async function GET(){
    return new NextResponse.json(puntos);
}