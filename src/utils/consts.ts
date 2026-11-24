export type Position = "Atacante" | "Meia" | "Defensor" | "Goleiro";

export type Pot = 1 | 2;

export type Player = {
   name: string;
   image: string;
   position: Position;
   pot?: Pot | null;
};

export const PLAYER_LIST: Player[] = [
   {
      image: "player_images/Arthur.png",
      name: "Arthur",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Borges.png",
      name: "Borges",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Henrique.png",
      name: "Henrique",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Mayller.png",
      name: "Mayller",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Victor_R.png",
      name: "Victor R",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Vinicius.png",
      name: "Vinícius",
      pot: 1,
      position: "Atacante",
   },
   {
      image: "player_images/Yan.png",
      name: "Yan",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Almeida.png",
      name: "Almeida",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Bellei.png",
      name: "Bellei",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Chafei.png",
      name: "Chafei",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Hugo.png",
      name: "Hugo",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Pedro_A.png",
      name: "Pedro A",
      pot: 2,
      position: "Atacante",
   },
   {
      image: "player_images/Predo.png",
      name: "Predo",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Rafael.png",
      name: "Rafael",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Brunin.png",
      name: "Brunin",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Esteban.png",
      name: "Esteban",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Gustavo.png",
      name: "Gustavo",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Leo_Donato.png",
      name: "Leo Donato",
      pot: 1,
      position: "Defensor",
   },
   {
      image: "player_images/Daniel_K.png",
      name: "Daniel K",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Davi_Valle.png",
      name: "Davi Valle",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Pedro_Henrique.png",
      name: "Pedro Henrique",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Fabricio.png",
      name: "Fabrício",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Hiago.png",
      name: "Hiago",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Romulo_S.png",
      name: "Rômulo S",
      pot: 2,
      position: "Defensor",
   },
   {
      image: "player_images/Carlos.png",
      name: "Carlos",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/Davi_C.png",
      name: "Davi C",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/Guga.png",
      name: "Guga",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/Nilvo.png",
      name: "Nilvo",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/Ronaldin.png",
      name: "Ronaldin",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/Tote.png",
      name: "Tote",
      pot: null,
      position: "Goleiro",
   },
   {
      image: "player_images/davi_b.png",
      name: "Davi B",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/PP.png",
      name: "PP",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/Daniel_A.png",
      name: "Daniel A",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/Lucas_Augusto.png",
      name: "Lucas Augusto",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/Lucas_T.png",
      name: "Lucas T",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/Rick.png",
      name: "Rick",
      pot: 1,
      position: "Meia",
   },
   {
      image: "player_images/Champz.png",
      name: "Champz",
      pot: 2,
      position: "Meia",
   },
   {
      image: "player_images/Renan_B.png",
      name: "Renan B",
      pot: 2,
      position: "Meia",
   },
   {
      image: "player_images/Bruno_R.png",
      name: "Bruno R",
      pot: 2,
      position: "Meia",
   },
   {
      image: "player_images/Joao_Pedro.png",
      name: "João Pedro",
      pot: 2,
      position: "Meia",
   },
   {
      image: "player_images/Otavio.png",
      name: "Otávio",
      pot: 2,
      position: "Meia",
   },
   {
      image: "player_images/Tiago_M.png",
      name: "Tiago M",
      pot: 2,
      position: "Meia",
   },
];

export const TEAM_COUNT = 6;
export const TEAM_ROSTER_SIZE = Math.ceil(PLAYER_LIST.length / TEAM_COUNT);

export function canDraftPlayerIntoTeam(
   team: Player[],
   incoming: Player,
): boolean {
   if (
      team.length >= TEAM_ROSTER_SIZE ||
      team.some((player) => player.name === incoming.name)
   ) {
      return false;
   }

   if (incoming.position === "Goleiro") {
      return !team.some((player) => player.position === "Goleiro");
   }

   if (incoming.pot != null) {
      return !team.some(
         (player) =>
            player.position === incoming.position && player.pot === incoming.pot,
      );
   }

   return true;
}

export const ItemTypes = {
   BOX: "box",
};

export const LOCAL_TEAMS_KEY = "teams";
export const LOCAL_BENCH_KEY = "benchPlayers";

export const ordemDesejada = ["Goleiro", "Defensor", "Meia", "Atacante"];
