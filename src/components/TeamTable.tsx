import { type FC, useEffect, useRef, type CSSProperties } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, type Player } from "../utils/consts";

const style: CSSProperties = {
   color: "white",
   padding: "1rem",
   textAlign: "center",
   fontSize: "1rem",
   float: "left",
   height: "500px",
   backgroundColor: "#424041",
};

interface Props {
   teams: Record<string, Player[]>;
   moveToTeam: (player: Player, teamKey: string) => void;
   moveToBench: (player: Player, teamKey: string) => void;
}

const TeamDropCell: FC<{
   teamKey: string;
   players: Player[];
   moveToTeam: (player: Player, teamKey: string) => void;
   moveToBench: (player: Player, teamKey: string) => void;
}> = ({ teamKey, players, moveToTeam, moveToBench }) => {
   const ref = useRef<HTMLDivElement>(null);

   const [{ isOver, canDrop }, drop] = useDrop(() => ({
      accept: ItemTypes.BOX,
      drop: (item: { player: Player }) => {
         moveToTeam(item.player, teamKey);
      },
      collect: (monitor) => ({
         isOver: monitor.isOver(),
         canDrop: monitor.canDrop(),
      }),
   }));

   useEffect(() => {
      if (ref.current) {
         drop(ref.current);
      }
   }, [drop]);

   const isActive = isOver && canDrop;

   return (
      <td>
         <div
            ref={ref}
            style={{
               ...style,
               backgroundColor: isActive ? "#3A3839" : "#424041",
               width: "150px",
            }}
         >
            <br />
            {players.map((player) => (
               <div
                  key={player.name}
                  onClick={() => moveToBench(player, teamKey)}
                  style={{
                     cursor: "pointer",
                     margin: "4px",
                     color: "white",
                     opacity: "100%",
                     fontFamily: `"League Gothic", sans-serif`,
                     fontSize: "32px",
                  }}
               >
                  {player.name}
               </div>
            ))}
         </div>
      </td>
   );
};

export const TeamTable: FC<Props> = ({ teams, moveToTeam, moveToBench }) => {
   const teamKeys = Object.keys(teams);

   return (
      <div
         style={{
            paddingTop: "20em",
            display: "flex",
            justifyContent: "center",
         }}
      >
         <table>
            <thead>
               <tr>
                  {teamKeys.map((key, i) => (
                     <th
                        key={key}
                        style={{
                           color: "white",
                           fontFamily: `"League Gothic", sans-serif`,
                           fontSize: "38px",
                        }}
                     >
                        Time {i + 1}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               <tr>
                  {teamKeys.map((key) => (
                     <TeamDropCell
                        key={key}
                        teamKey={key}
                        players={teams[key]}
                        moveToTeam={moveToTeam}
                        moveToBench={moveToBench}
                     />
                  ))}
               </tr>
            </tbody>
         </table>
      </div>
   );
};
