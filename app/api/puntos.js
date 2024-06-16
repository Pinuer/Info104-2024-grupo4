import { NextResponse } from "next/server";

export const puntos =[
    {id: 1, nombre : "La Cervecería Kunstmann ", coordenadas : [-39.836583, -73.278583], 
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}],
    linkD:"https://www.google.com/maps/place/%22La+Cervecer%C3%ADa%22+Kunstmann/@-39.8368501,-73.2808802,17z/data=!3m1!4b1!4m6!3m5!1s0x9615f1e07207c325:0xe36903a999717487!8m2!3d-39.8368501!4d-73.2783053!16s%2Fg%2F11b7q5fnmy?entry=ttu"},
    
    {id:2, nombre:"Cerveceria Nothus", coordenadas: [-39.824107, -73.238481],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 0}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    
    {id:3, nombre:"Cerveceria Calle Calle", coordenadas: [-39.855059, -73.189059],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]},

    {id:4, nombre:"Cerveceria los Torreones", coordenadas: [-39.807622621037474, -73.21547458765774],
    tipos : [{tipo : "Lager", estado : 1}, {tipo : "Sinfiltar", estado : 1}, {tipo : "Bock", estado : 1}, {tipo : "PaleAle", estado : 1}, {tipo : "Trigo", estado : 1}]}
    
];

export async function GET(){
    return new NextResponse.json(puntos);
}