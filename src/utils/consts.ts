export type Position = "Atacante" | "Meia" | "Defensor" | "Goleiro";

export type Player = {
   name: string;
   image: string;
   position: Position;
};

export const PLAYER_LIST: Player[] = [
   {
      image: "public/player_images/Almeida.png",
      name: "Almeida",
      position: "Meia",
   },
   {
      image: "public/player_images/Bellei.png",
      name: "Bellei",
      position: "Atacante",
   },
   {
      image: "public/player_images/Esteban.png",
      name: "Esteban",
      position: "Defensor",
   },
   {
      image: "public/player_images/Felipe_Bignoto.png",
      name: "Felipe Bignoto",
      position: "Meia",
   },
   {
      image: "public/player_images/Lucas_Augusto.png",
      name: "Lucas Augusto",
      position: "Meia",
   },
   {
      image: "public/player_images/Marcelino.png",
      name: "Marcelino",
      position: "Meia",
   },
   {
      image: "public/player_images/Nick.png",
      name: "Nick",
      position: "Defensor",
   },
   {
      image: "public/player_images/Nilvo.png",
      name: "Nilvo",
      position: "Goleiro",
   },
   {
      image: "public/player_images/Otavio.png",
      name: "Otavio",
      position: "Defensor",
   },
   {
      image: "public/player_images/Patrick.png",
      name: "Patrick",
      position: "Atacante",
   },
   {
      image: "public/player_images/Pazos.png",
      name: "Pazos",
      position: "Defensor",
   },
   {
      image: "public/player_images/Pedro_Henrique.png",
      name: "Pedro Henrique",
      position: "Defensor",
   },
   {
      image: "public/player_images/PP.png",
      name: "PP",
      position: "Goleiro",
   },
   {
      image: "public/player_images/Samuka.png",
      name: "Samuka",
      position: "Goleiro",
   },
   {
      image: "public/player_images/Predo.png",
      name: "Predo",
      position: "Defensor",
   },
   {
      image: "public/player_images/Romulo_S.png",
      name: "Rômulo S",
      position: "Defensor",
   },
   {
      image: "public/player_images/LG.png",
      name: "LG",
      position: "Meia",
   },
   {
      image: "public/player_images/Joao_Paulo.png",
      name: "João Paulo",
      position: "Meia",
   },
   {
      image: "public/player_images/Justin.png",
      name: "Justin",
      position: "Atacante",
   },
   {
      image: "public/player_images/Sartori.png",
      name: "Sartori",
      position: "Atacante",
   },
   {
      image: "public/player_images/Sergio.png",
      name: "Sergio",
      position: "Defensor",
   },
   {
      image: "public/player_images/Tuti.png",
      name: "Tuti",
      position: "Defensor",
   },
   {
      image: "public/player_images/Lent.png",
      name: "Lent",
      position: "Atacante",
   },
   {
      image: "public/player_images/Henrique.png",
      name: "Henrique",
      position: "Atacante",
   },
   {
      image: "public/player_images/Henrique_Carius.png",
      name: "Henrique Cariús",
      position: "Atacante",
   },
   {
      image: "public/player_images/Enrico.png",
      name: "Enrico",
      position: "Atacante",
   },
   {
      image: "public/player_images/Bernardo.png",
      name: "Bernardo",
      position: "Defensor",
   },
   {
      image: "public/player_images/Coelho.png",
      name: "Coelho",
      position: "Meia",
   },
   {
      image: "public/player_images/Digão.png",
      name: "Digão",
      position: "Defensor",
   },
   {
      image: "public/player_images/Davi_Valle.png",
      name: "Davi Valle",
      position: "Defensor",
   },
   {
      image: "public/player_images/Daniel_K.png",
      name: "Daniel K",
      position: "Defensor",
   },
   {
      image: "public/player_images/Daniel_A.png",
      name: "Daniel A",
      position: "Meia",
   },
   {
      image: "public/player_images/Borges.png",
      name: "Borges",
      position: "Goleiro",
   },
   {
      image: "public/player_images/Brunin.png",
      name: "Brunin",
      position: "Defensor",
   },
   {
      image: "public/player_images/Carlos.png",
      name: "Carlos",
      position: "Goleiro",
   },
   {
      image: "public/player_images/davi_b.png",
      name: "Davi B",
      position: "Meia",
   },
   {
      image: "public/player_images/Vinicius.png",
      name: "Vinícius",
      position: "Atacante",
   },
   {
      image: "public/player_images/Yan.png",
      name: "Yan",
      position: "Atacante",
   },
   {
      image: "public/player_images/Victor_R.png",
      name: "Victor R",
      position: "Atacante",
   },
   {
      image: "public/player_images/Champz.png",
      name: "Champz",
      position: "Atacante",
   },
   {
      image: "public/player_images/Davi_C.png",
      name: "Davi C",
      position: "Goleiro",
   },
];

export const ItemTypes = {
   BOX: "box",
};

export const LOCAL_TEAMS_KEY = "teams";
export const LOCAL_BENCH_KEY = "benchPlayers";
