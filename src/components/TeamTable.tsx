import { type FC, useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, type Player, ordemDesejada } from "../utils/consts";

interface Props {
  teams: Record<string, Player[]>;
  moveToTeam: (player: Player, teamKey: string) => void;
  moveToBench: (player: Player, teamKey: string) => void;
}

const TeamCard: FC<{
  teamKey: string;
  teamNumber: number;
  players: Player[];
  moveToTeam: Props["moveToTeam"];
  moveToBench: Props["moveToBench"];
}> = ({ teamKey, teamNumber, players, moveToTeam, moveToBench }) => {
  const ref = useRef<HTMLElement>(null);
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item: { player: Player }) => moveToTeam(item.player, teamKey),
    collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
  }), [teamKey, moveToTeam]);

  useEffect(() => {
    if (ref.current) drop(ref.current);
  }, [drop]);

  const sortedPlayers = [...players].sort(
    (a, b) => ordemDesejada.indexOf(a.position) - ordemDesejada.indexOf(b.position),
  );

  return (
    <article ref={ref} className={`team-card${isOver && canDrop ? " team-card-over" : ""}`}>
      <header className="team-card-header">
        <div className="team-name"><span className="team-emblem">{String(teamNumber).padStart(2, "0")}</span><h3>Time {teamNumber}</h3></div>
        <span className="team-count">{players.length}<span> / 5</span></span>
      </header>
      <div className="team-roster" aria-label={`Jogadores do Time ${teamNumber}`}>
        {sortedPlayers.map((player) => (
          <button className="roster-player" key={player.name} onClick={() => moveToBench(player, teamKey)} type="button" title={`${player.name} — clique para devolver ao elenco`}>
            <img src={player.image} alt="" loading="lazy" />
            <span>{player.name}</span>
            <span className="remove-player" aria-hidden="true">×</span>
          </button>
        ))}
        {Array.from({ length: Math.max(0, 5 - players.length) }, (_, index) => (
          <div className="roster-empty" key={`empty-${index}`}><span className="empty-plus" aria-hidden="true">＋</span><span>Vaga em aberto</span></div>
        ))}
      </div>
      <div className="team-card-foot"><span>ELENCO</span><span>{players.length === 5 ? "TIME COMPLETO" : `${5 - players.length} VAGA${5 - players.length === 1 ? "" : "S"}`}</span></div>
    </article>
  );
};

export const TeamTable: FC<Props> = ({ teams, moveToTeam, moveToBench }) => (
  <div className="teams-grid">
    {Object.entries(teams).map(([key, players], index) => (
      <TeamCard key={key} teamKey={key} teamNumber={index + 1} players={players} moveToTeam={moveToTeam} moveToBench={moveToBench} />
    ))}
  </div>
);
