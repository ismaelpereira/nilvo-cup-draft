import { type FC, useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, TEAM_ROSTER_SIZE, type Player, ordemDesejada } from "../utils/consts";

interface Props {
  teams: Record<string, Player[]>;
  moveToTeam: (player: Player, teamKey: string) => void;
  moveToBench: (player: Player, teamKey: string) => void;
  canDropPlayer: (player: Player, teamKey: string) => boolean;
}

const TeamCard: FC<{
  teamKey: string;
  teamNumber: number;
  players: Player[];
  moveToTeam: Props["moveToTeam"];
  moveToBench: Props["moveToBench"];
  canDropPlayer: Props["canDropPlayer"];
}> = ({ teamKey, teamNumber, players, moveToTeam, moveToBench, canDropPlayer }) => {
  const ref = useRef<HTMLElement>(null);
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    canDrop: (item: { player: Player }) => canDropPlayer(item.player, teamKey),
    drop: (item: { player: Player }) => moveToTeam(item.player, teamKey),
    collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
  }), [teamKey, moveToTeam, canDropPlayer]);

  useEffect(() => {
    if (ref.current) drop(ref.current);
  }, [drop]);

  const sortedPlayers = [...players].sort(
    (a, b) => ordemDesejada.indexOf(a.position) - ordemDesejada.indexOf(b.position),
  );

  return (
    <article ref={ref} className={`team-card${isOver && canDrop ? " team-card-over" : ""}${isOver && !canDrop ? " team-card-blocked" : ""}`}>
      <header className="team-card-header">
        <div className="team-name"><span className="team-emblem">{String(teamNumber).padStart(2, "0")}</span><h3>Time {teamNumber}</h3></div>
        <span className="team-count">{players.length}<span> / {TEAM_ROSTER_SIZE}</span></span>
      </header>
      <div className="team-roster" aria-label={`Jogadores do Time ${teamNumber}`}>
        {sortedPlayers.map((player) => (
          <button className="roster-player" key={player.name} onClick={() => moveToBench(player, teamKey)} type="button" title={`${player.name} — clique para devolver ao elenco`}>
            <img src={player.image} alt="" loading="lazy" />
            <span>{player.name}</span>
            {(player.pot || player.position === "Goleiro") && <span className="roster-pot">{player.pot ? `P${player.pot}` : "GK"}</span>}
            <span className="remove-player" aria-hidden="true">×</span>
          </button>
        ))}
        {Array.from({ length: Math.max(0, TEAM_ROSTER_SIZE - players.length) }, (_, index) => (
          <div className="roster-empty" key={`empty-${index}`}><span className="empty-plus" aria-hidden="true">＋</span><span>Vaga em aberto</span></div>
        ))}
      </div>
      <div className="team-card-foot"><span>ELENCO</span><span>{players.length === TEAM_ROSTER_SIZE ? "TIME COMPLETO" : `${TEAM_ROSTER_SIZE - players.length} VAGA${TEAM_ROSTER_SIZE - players.length === 1 ? "" : "S"}`}</span></div>
    </article>
  );
};

export const TeamTable: FC<Props> = ({ teams, moveToTeam, moveToBench, canDropPlayer }) => (
  <div className="teams-grid">
    {Object.entries(teams).map(([key, players], index) => (
      <TeamCard key={key} teamKey={key} teamNumber={index + 1} players={players} moveToTeam={moveToTeam} moveToBench={moveToBench} canDropPlayer={canDropPlayer} />
    ))}
  </div>
);
