import { useEffect, useState, type CSSProperties } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TeamTable } from "./components/TeamTable";
import { PlayerList } from "./components/PlayerList";
import {
   LOCAL_BENCH_KEY,
   LOCAL_TEAMS_KEY,
   PLAYER_LIST,
   type Player,
} from "./utils/consts";
import background from "../public/assets/background.jpg";

const style: CSSProperties = {
   backgroundImage: `url(${background})`,
   backgroundRepeat: "no-repeat",
   width: "100%",
   height: "100%",
   fontFamily: "Lovelo, sans-serif",
   backgroundSize: "100% 100%",
   margin: "0px",
   padding: "0px",
   display: "flex",
   gap: "1em",
   justifyContent: "center",
   alignItems: "center",
};

function isValidPlayerArray(data: any): data is Player[] {
   return (
      Array.isArray(data) &&
      data.every((p) => typeof p === "object" && "name" in p)
   );
}

const getEmptyTeams = () => ({
   team1: [],
   team2: [],
   team3: [],
   team4: [],
   team5: [],
   team6: [],
});

function App() {
   const [benchPlayers, setBenchPlayers] = useState<Player[]>(() => {
      try {
         const saved = localStorage.getItem(LOCAL_BENCH_KEY);
         const parsed = saved ? JSON.parse(saved) : null;
         return isValidPlayerArray(parsed) ? parsed : PLAYER_LIST;
      } catch {
         return PLAYER_LIST;
      }
   });
   const [teams, setTeams] = useState<Record<string, Player[]>>(() => {
      try {
         const saved = localStorage.getItem(LOCAL_TEAMS_KEY);
         const parsed = saved ? JSON.parse(saved) : null;
         if (parsed && typeof parsed === "object") {
            const keys = ["team1", "team2", "team3", "team4", "team5", "team6"];
            for (const key of keys) {
               if (!Array.isArray(parsed[key])) return getEmptyTeams();
            }
            return parsed;
         }
         return getEmptyTeams();
      } catch {
         return getEmptyTeams();
      }
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

   useEffect(() => {
      localStorage.setItem(LOCAL_TEAMS_KEY, JSON.stringify(teams));
   }, [teams]);

   useEffect(() => {
      localStorage.setItem(LOCAL_BENCH_KEY, JSON.stringify(benchPlayers));
   }, [benchPlayers]);

   const clearCache = () => {
      localStorage.clear();
      location.reload();
   };

   return (
      <div style={style}>
         <DndProvider backend={HTML5Backend}>
            <button onClick={clearCache}>Limpar</button>
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
