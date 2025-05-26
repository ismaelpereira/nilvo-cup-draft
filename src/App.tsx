import { useState, type CSSProperties } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TeamTable } from "./components/TeamTable";
import { PlayerList } from "./components/PlayerList";
import { PLAYER_LIST, type Player } from "./utils/consts";
import background from "./assets/background.jpg";

const style: CSSProperties = {
   backgroundImage: `url(${background})`,
   backgroundRepeat: "no-repeat",
   width: "100%",
   height: "100%",
   fontFamily: "Lovelo, sans-serif",
   backgroundSize: "100% 100%",
   margin: "0px",
   padding: "0px",
};

function App() {
   const [benchPlayers, setBenchPlayers] = useState<Player[]>(PLAYER_LIST);
   const [teams, setTeams] = useState<Record<string, Player[]>>({
      team1: [],
      team2: [],
      team3: [],
      team4: [],
      team5: [],
      team6: [],
   });

   const moveToTeam = (player: Player, teamKey: string) => {
      setBenchPlayers((prev) => prev.filter((p) => p.name !== player.name));
      setTeams((prev) => ({
         ...prev,
         [teamKey]: [...prev[teamKey], player],
      }));
   };

   const moveToBench = (player: Player, teamKey: string) => {
      setTeams((prev) => ({
         ...prev,
         [teamKey]: prev[teamKey].filter((p) => p.name !== player.name),
      }));
      setBenchPlayers((prev) => [...prev, player]);
   };

   return (
      <div style={style}>
         <DndProvider backend={HTML5Backend}>
            <TeamTable
               teams={teams}
               moveToTeam={moveToTeam}
               moveToBench={moveToBench}
            />
            <PlayerList benchPlayers={benchPlayers} />
         </DndProvider>
      </div>
   );
}

export default App;
