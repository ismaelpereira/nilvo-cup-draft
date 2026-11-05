import { type FC, useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes, type Player, type Position } from "../utils/consts";

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

  return (
    <button ref={ref} className={`bench-player${isDragging ? " bench-player-dragging" : ""}`} type="button" aria-label={`Arraste ${player.name} para um time`}>
      <span className="player-photo"><img src={player.image} alt={`Foto de ${player.name}`} loading="lazy" /></span>
      <span className="player-info"><strong>{player.name}</strong><small>{player.position}</small></span>
      <span className="player-drag-icon" aria-hidden="true">⠿</span>
    </button>
  );
};

interface Props { benchPlayers: Player[] }

export const PlayerList: FC<Props> = ({ benchPlayers }) => {
  const positions: Position[] = ["Atacante", "Meia", "Defensor", "Goleiro"];
  const positionNumber: Record<Position, string> = { Atacante: "01", Meia: "02", Defensor: "03", Goleiro: "04" };

  return (
    <section className="bench-section" aria-labelledby="bench-title">
      <div className="section-heading bench-heading">
        <div><span className="section-kicker">À DISPOSIÇÃO</span><h2 id="bench-title">Elenco de jogadores</h2></div>
        <span className="bench-total"><strong>{benchPlayers.length}</strong> {benchPlayers.length === 1 ? "JOGADOR" : "JOGADORES"} LIVRES</span>
      </div>
      <div className="position-grid">
        {positions.map((position) => {
          const players = benchPlayers.filter((player) => player.position === position);
          return (
            <section className="position-card" key={position} aria-labelledby={`position-${position}`}>
              <header className="position-header"><span className="position-index">{positionNumber[position]}</span><h3 id={`position-${position}`}>{position}</h3><span className="position-count">{String(players.length).padStart(2, "0")}</span></header>
              <div className="players-list">
                {players.length ? players.map((player) => <DraggablePlayer key={player.name} player={player} />) : <p className="empty-bench">Todos os atletas desta posição já estão em campo.</p>}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
