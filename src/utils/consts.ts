export type Position = "Atacante" | "Meia" | "Defensor" | "Goleiro";

export type Player = {
   name: string;
   image: string;
   position: Position;
};

export const PLAYER_LIST: Player[] = [
   {
      image: "player_images/Henrique.png",
      name: "Henrique",
      position: "Atacante",
   },
   {
      image: "player_images/Lent.png",
      name: "Lent",
      position: "Atacante",
   },
   {
      image: "player_images/Victor_R.png",
      name: "Victor R",
      position: "Atacante",
   },
   {
      image: "player_images/Vinicius.png",
      name: "Vinícius",
      position: "Atacante",
   },
   {
      image: "player_images/Almeida.png",
      name: "Almeida",
      position: "Atacante",
   },
   {
      image: "player_images/Bellei.png",
      name: "Bellei",
      position: "Atacante",
   },
   {
      image: "player_images/Champz.png",
      name: "Champz",
      position: "Atacante",
   },
   {
      image: "player_images/Enrico.png",
      name: "Enrico",
      position: "Atacante",
   },
   {
      image: "player_images/Patrick.png",
      name: "Patrick",
      position: "Atacante",
   },
   {
      image: "player_images/Mayller.png",
      name: "Mayller",
      position: "Atacante",
   },
   {
      image: "player_images/Sartori.png",
      name: "Sartori",
      position: "Atacante",
   },
   {
      image: "player_images/Yan.png",
      name: "Yan",
      position: "Atacante",
   },
   {
      image: "player_images/Daniel_A.png",
      name: "Daniel A",
      position: "Meia",
   },
   {
      image: "player_images/Felipe_Bignoto.png",
      name: "Felipe Bignoto",
      position: "Meia",
   },
   {
      image: "player_images/Lucas_Augusto.png",
      name: "Lucas Augusto",
      position: "Meia",
   },
   {
      image: "player_images/Lucas_T.png",
      name: "Lucas T",
      position: "Meia",
   },
   {
      image: "player_images/Hugo_A.png",
      name: "Hugo A",
      position: "Meia",
   },
   {
      image: "player_images/Coelho.png",
      name: "Coelho",
      position: "Meia",
   },
   {
      image: "player_images/davi_b.png",
      name: "Davi B",
      position: "Meia",
   },
   {
      image: "player_images/Davi_C.png",
      name: "Davi C",
      position: "Meia",
   },
   {
      image: "player_images/Joao_Paulo.png",
      name: "João Paulo",
      position: "Meia",
   },
   {
      image: "player_images/LG.png",
      name: "LG",
      position: "Meia",
   },
   {
      image: "player_images/Marcelino.png",
      name: "Marcelino",
      position: "Meia",
   },
   {
      image: "player_images/Predo.png",
      name: "Predo",
      position: "Meia",
   },
   {
      image: "player_images/Brunin.png",
      name: "Brunin",
      position: "Defensor",
   },
   {
      image: "player_images/Esteban.png",
      name: "Esteban",
      position: "Defensor",
   },
   {
      image: "player_images/Pazos.png",
      name: "Pazos",
      position: "Defensor",
   },
   {
      image: "player_images/Tuti.png",
      name: "Tuti",
      position: "Defensor",
   },
   {
      image: "player_images/Bernardo.png",
      name: "Bernardo",
      position: "Defensor",
   },
   {
      image: "player_images/Daniel_K.png",
      name: "Daniel K",
      position: "Defensor",
   },
   {
      image: "player_images/Davi_Valle.png",
      name: "Davi Valle",
      position: "Defensor",
   },
   {
      image: "player_images/Osmir.png",
      name: "Osmir",
      position: "Defensor",
   },
   {
      image: "player_images/Nick.png",
      name: "Nick",
      position: "Defensor",
   },
   {
      image: "player_images/Pedro_Henrique.png",
      name: "Pedro Henrique",
      position: "Defensor",
   },
   {
      image: "player_images/Romulo_S.png",
      name: "Rômulo S",
      position: "Defensor",
   },
   {
      image: "player_images/Sergio.png",
      name: "Sergio",
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
      image: "player_images/Mudinho.png",
      name: "Mudinho",
      position: "Goleiro",
   },
   {
      image: "player_images/Nilvo.png",
      name: "Nilvo",
      position: "Goleiro",
   },
   {
      image: "player_images/Samuka.png",
      name: "Samuka",
      position: "Goleiro",
   },
   {
      image: "player_images/Pedro_Assis.png",
      name: "Pedro Assis",
      position: "Goleiro",
   },
];

export const ItemTypes = {
   BOX: "box",
};

export const LOCAL_TEAMS_KEY = "teams";
export const LOCAL_BENCH_KEY = "benchPlayers";
