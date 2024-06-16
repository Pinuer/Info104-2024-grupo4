import { NextResponse } from "next/server";

export const puntos =[
    {id: 1, nombre : "La Cervecería Kunstmann ", coordenadas : [-39.836583, -73.278583], 
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/%22La+Cervecer%C3%ADa%22+Kunstmann/@-39.8368501,-73.2808802,17z/data=!3m1!4b1!4m6!3m5!1s0x9615f1e07207c325:0xe36903a999717487!8m2!3d-39.8368501!4d-73.2783053!16s%2Fg%2F11b7q5fnmy?entry=ttu",
    servcio:["Consumo en el lugar", "Para llevar", "Entrega"]},
    
    {id:2, nombre:"Cerveceria Nothus", coordenadas: [-39.824107, -73.238481],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}], 
    linkD:"https://www.google.com/maps/place/Cervecer%C3%ADa+Nothus/@-39.8242023,-73.2410789,17z/data=!3m1!4b1!4m6!3m5!1s0x9615ef0e551fe46f:0xfa8f800ffdf30f2c!8m2!3d-39.8242023!4d-73.238504!16s%2Fg%2F11f7n4qfrm?entry=ttu"},

    
    {id:3, nombre:"Cerveceria Calle Calle", coordenadas: [-39.855059, -73.189059],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:4, nombre:"Cerveceria los Torreones", coordenadas: [-39.807622621037474, -73.21547458765774],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:5, nombre:"Bar Bundor", coordenadas: [-39.80899418365889, -73.25492250642007],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:6, nombre:"El Growler", coordenadas: [-39.8097984810652, -73.25409887445188],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:7, nombre:"El Regreso Beer Company", coordenadas: [-39.819660127756805, -73.24644226089781],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:8, nombre:"Cerveza carva", coordenadas: [-39.834844724481535, -73.2187401575215],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:9, nombre:"Cerveza Totem", coordenadas: [-39.85027684666218, -73.19666409984868],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:10, nombre:"rakkar Hidromiel", coordenadas: [-39.82687211885121, -73.22671976266108],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:11, nombre:"Cerveza Schenke Brüder", coordenadas: [-39.82687211885121, -73.22671976266108],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:12, nombre:"Cerveza 3 Puentes", coordenadas: [-39.82687211885121, -73.22671976266108],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},
    
    {id:13, nombre:"La Bota Cervecera ", coordenadas: [-39.81289639386381, -73.24800577348306],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

        
    {id:14, nombre:"Cervecería Mättig Spa", coordenadas: [-39.86179899527966, -73.19204416281889],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:15, nombre:"Cervecería Elfo Del Bosque", coordenadas: [-39.842699789597006, -73.20635907804606],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]}

];

export async function GET(){
    return new NextResponse.json(puntos);
}