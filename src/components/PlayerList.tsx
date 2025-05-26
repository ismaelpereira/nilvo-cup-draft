import { type CSSProperties, type FC, useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes, type Player, type Position } from "../utils/consts";
import bgplayer from "../../public/assets/player_card.png";

const style: CSSProperties = {
   border: "1px dashed white",
   color: "white",
   fontFamily: `"League Gothic", sans-serif`,
   fontSize: "32px",
   cursor: "move",
   backgroundImage: `url(${bgplayer})`,
   backgroundRepeat: "no-repeat",
   height: "40px",
   width: "200px",
   paddingLeft: "0.3em",
};

const DraggablePlayer: FC<{ player: Player }> = ({ player }) => {
   const ref = useRef<HTMLDivElement>(null);

   const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.BOX,
      item: { player },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }));

   useEffect(() => {
      if (ref.current) {
         drag(ref.current);
      }
   }, [drag]);

   return (
      <div
         ref={ref}
         style={{
            ...style,
            opacity: isDragging ? 0.4 : 1,
         }}
      >
         <img src={player.image} width="20px" height="20px" /> | {player.name}
      </div>
   );
};

interface Props {
   benchPlayers: Player[];
}

export const PlayerList: FC<Props> = ({ benchPlayers }) => {
   const positions: Position[] = ["Atacante", "Meia", "Defensor", "Goleiro"];

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "",
         }}
      >
         <h2
            style={{
               color: "white",
               fontFamily: `"League Gothic", sans-serif`,
               fontSize: "42px",
            }}
         >
            Jogadores
         </h2>
         <div
            style={{
               display: "flex",
               fontFamily: "Century Gothic",
               gap: "2em",
            }}
         >
            {positions.map((pos) => {
               const players = benchPlayers.filter((p) => p.position === pos);
               return (
                  <div
                     key={pos}
                     style={{ clear: "both", marginBottom: "1rem" }}
                  >
                     <h3
                        style={{
                           color: "white",
                           fontFamily: `"League Gothic", sans-serif`,
                           fontSize: "32px",
                           textAlign: "center",
                        }}
                     >
                        {pos}
                     </h3>
                     {players.length === 0 ? (
                        <p
                           style={{
                              color: "#777",
                              fontFamily: `"League Gothic", sans-serif`,
                              fontSize: "24px",
                           }}
                        >
                           Nenhum jogador
                        </p>
                     ) : (
                        players.map((player) => (
                           <DraggablePlayer key={player.name} player={player} />
                        ))
                     )}
                  </div>
               );
            })}
         </div>
      </div>
   );
};
