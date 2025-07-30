
export type Position = "Atacante" | "Meia" | "Defensor" | "Goleiro";

export type Player = {
   name: string;
   image: string;
   position: Position;
};

export const PLAYER_LIST: Player[] = [
   {
      image: "player_images/Almeida.png",
      name: "Almeida",
      position: "Atacante",
   },
   {
      image: "player_images/Coelho.png",
      name: "Coelho",
      position: "Atacante",
   },
   {
      image: "player_images/davi_b.png",
      name: "davi b",
      position: "Atacante",
   },
   {
      image: "player_images/Hiago.png",
      name: "Hiago",
      position: "Atacante",
   },
   {
      image: "player_images/Lucas_Augusto.png",
      name: "Lucas Augusto",
      position: "Atacante",
   },
   {
      image: "player_images/Osmir.png",
      name: "Osmir",
      position: "Atacante",
   },
   {
      image: "player_images/Pedro_Bhering.png",
      name: "Pedro Bhering",
      position: "Atacante",
   },
   {
      image: "player_images/Vinicius.png",
      name: "Vinícius",
      position: "Atacante",
   },
   {
      image: "player_images/Bruno_R.png",
      name: "Bruno R",
      position: "Defensor",
   },
   {
      image: "player_images/Daniel_A.png",
      name: "Daniel A",
      position: "Defensor",
   },
   {
      image: "player_images/Felipe_Bignoto.png",
      name: "Felipe Bignoto",
      position: "Defensor",
   },
   {
      image: "player_images/Henrique_Carius.png",
      name: "Henrique Cariús",
      position: "Defensor",
   },
   {
      image: "player_images/Hugo_A.png",
      name: "Hugo A",
      position: "Defensor",
   },
   {
      image: "player_images/Lucas_T.png",
      name: "Lucas T",
      position: "Defensor",
   },
   {
      image: "player_images/Rodrigo.png",
      name: "Rodrigo",
      position: "Defensor",
   },
   {
      image: "player_images/Yan.png",
      name: "Yan",
      position: "Defensor",
   },
   {
      image: "player_images/Borges.png",
      name: "Borges",
      position: "Goleiro",
   },
   {
      image: "player_images/Carlos.png",
      name: "Carlos",
      position: "Goleiro",
   },
   {
      image: "player_images/Fael.png",
      name: "Fael",
      position: "Goleiro",
   },
   {
      image: "player_images/Pedro_Henrique.png",
      name: "Pedro Henrique",
      position: "Goleiro",
   },
   {
      image: "player_images/Tote.png",
      name: "Tote",
      position: "Goleiro",
   },
   {
      image: "player_images/Chafei.png",
      name: "Chafei",
      position: "Meia",
   },
   {
      image: "player_images/Daniel_K.png",
      name: "Daniel K",
      position: "Meia",
   },
   {
      image: "player_images/Esteban.png",
      name: "Esteban",
      position: "Meia",
   },
   {
      image: "player_images/Gabriel_C.png",
      name: "Gabriel C",
      position: "Meia",
   },
   {
      image: "player_images/Lent.png",
      name: "Lent",
      position: "Meia",
   },
   {
      image: "player_images/Nilvo.png",
      name: "Nilvo",
      position: "Meia",
   },
   {
      image: "player_images/PP.png",
      name: "PP",
      position: "Meia",
   },
   {
      image: "player_images/Tico.png",
      name: "Tico",
      position: "Meia",
   },
   {
      image: "player_images/Yves.png",
      name: "Yves",
      position: "Meia",
   },
];

export const ItemTypes = {
   BOX: "box",
};

export const LOCAL_TEAMS_KEY = "teams";
export const LOCAL_BENCH_KEY = "benchPlayers";

export const ordemDesejada = ["Goleiro", "Defensor", "Meia", "Atacante"];
   