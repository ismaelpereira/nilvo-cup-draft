import { type FC, useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes, type Player, type Position } from "../utils/consts";

type PotFilter = "all" | "1" | "2" | "goalkeepers";

const DraggablePlayer: FC<{ player: Player }> = ({ player }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { player },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }), [player]);

  useEffect(() => {
    if (ref.current) drag(ref.current);
  }, [drag]);

  const potLabel = player.pot ? `Pote ${player.pot}` : player.position === "Goleiro" ? "Sem pote" : "Pote pendente";

  return (
    <button ref={ref} className={`bench-player${isDragging ? " bench-player-dragging" : ""}`} type="button" aria-label={`Arraste ${player.name}, ${potLabel}, para um time`}>
      <span className="player-photo"><img src={player.image} alt={`Foto de ${player.name}`} loading="lazy" /></span>
      <span className="player-info"><strong>{player.name}</strong><small>{potLabel}</small></span>
      <span className="player-drag-icon" aria-hidden="true">⠿</span>
    </button>
  );
};

interface Props { benchPlayers: Player[] }

export const PlayerList: FC<Props> = ({ benchPlayers }) => {
  const [potFilter, setPotFilter] = useState<PotFilter>("all");
  const positions: Position[] = ["Atacante", "Meia", "Defensor", "Goleiro"];
  const positionNumber: Record<Position, string> = { Atacante: "01", Meia: "02", Defensor: "03", Goleiro: "04" };
  const filteredPlayers = benchPlayers.filter((player) => {
    if (potFilter === "1") return player.pot === 1;
    if (potFilter === "2") return player.pot === 2;
    if (potFilter === "goalkeepers") return player.position === "Goleiro";
    return true;
  });

  return (
    <section className="bench-section" aria-labelledby="bench-title">
      <div className="section-heading bench-heading">
        <div><span className="section-kicker">À DISPOSIÇÃO</span><h2 id="bench-title">Elenco de jogadores</h2></div>
        <div className="bench-tools">
          <label className="pot-filter-label" htmlFor="pot-filter">Pote</label>
          <select id="pot-filter" className="pot-filter" value={potFilter} onChange={(event) => setPotFilter(event.target.value as PotFilter)}>
            <option value="all">Todos</option>
            <option value="1">Pote 1</option>
            <option value="2">Pote 2</option>
            <option value="goalkeepers">Goleiros · sem pote</option>
          </select>
          <span className="bench-total"><strong>{filteredPlayers.length}</strong> LIVRES</span>
        </div>
      </div>
      <div className="position-grid">
        {positions.map((position) => {
          const players = filteredPlayers.filter((player) => player.position === position);
          return (
            <section className="position-card" key={position} aria-labelledby={`position-${position}`}>
              <header className="position-header"><span className="position-index">{positionNumber[position]}</span><h3 id={`position-${position}`}>{position}</h3><span className="position-count">{String(players.length).padStart(2, "0")}</span></header>
              <div className="players-list">
                {players.length ? players.map((player) => <DraggablePlayer key={player.name} player={player} />) : <p className="empty-bench">Nenhum jogador neste filtro.</p>}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
