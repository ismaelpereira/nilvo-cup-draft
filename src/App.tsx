import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PlayerList } from "./components/PlayerList";
import { TeamTable } from "./components/TeamTable";
import {
  LOCAL_BENCH_KEY,
  LOCAL_TEAMS_KEY,
  PLAYER_LIST,
  type Player,
} from "./utils/consts";
import "./styles.css";

const TEAM_KEYS = ["team1", "team2", "team3", "team4", "team5", "team6"];

function isValidPlayerArray(data: unknown): data is Player[] {
  return Array.isArray(data) && data.every(
    (player) => player && typeof player === "object" && "name" in player && "position" in player,
  );
}

function getEmptyTeams(): Record<string, Player[]> {
  return Object.fromEntries(TEAM_KEYS.map((key) => [key, []]));
}

function readTeams(): Record<string, Player[]> {
  try {
    const saved = localStorage.getItem(LOCAL_TEAMS_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : null;
    if (!parsed || typeof parsed !== "object") return getEmptyTeams();
    const teams = parsed as Record<string, unknown>;
    if (!TEAM_KEYS.every((key) => isValidPlayerArray(teams[key]))) return getEmptyTeams();
    return Object.fromEntries(TEAM_KEYS.map((key) => [key, teams[key]]));
  } catch {
    return getEmptyTeams();
  }
}

function App() {
  const [benchPlayers, setBenchPlayers] = useState<Player[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_BENCH_KEY);
      const parsed: unknown = saved ? JSON.parse(saved) : null;
      return isValidPlayerArray(parsed) ? parsed : PLAYER_LIST;
    } catch {
      return PLAYER_LIST;
    }
  });
  const [teams, setTeams] = useState<Record<string, Player[]>>(readTeams);

  const moveToTeam = (player: Player, teamKey: string) => {
    setBenchPlayers((current) => current.filter((candidate) => candidate.name !== player.name));
    setTeams((current) => ({
      ...current,
      [teamKey]: [...current[teamKey].filter((candidate) => candidate.name !== player.name), player],
    }));
  };

  const moveToBench = (player: Player, teamKey: string) => {
    setTeams((current) => ({
      ...current,
      [teamKey]: current[teamKey].filter((candidate) => candidate.name !== player.name),
    }));
    setBenchPlayers((current) => current.some((candidate) => candidate.name === player.name)
      ? current
      : [...current, player]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_TEAMS_KEY, JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem(LOCAL_BENCH_KEY, JSON.stringify(benchPlayers));
  }, [benchPlayers]);

  const clearDraft = () => {
    localStorage.removeItem(LOCAL_TEAMS_KEY);
    localStorage.removeItem(LOCAL_BENCH_KEY);
    window.location.reload();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Copa Nilvo, início">
            <img className="wordmark-logo" src="/assets/copa-nilvo.svg" alt="Logo da Copa Nilvo" />
            <span className="wordmark-copy"><span>COPA</span><strong>NILVO</strong></span>
          </a>
          <div className="header-season"><span className="live-dot" /> EDIÇÃO 2026 <span className="header-divider">/</span> FUTEBOL DE SEGUNDA</div>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="page-title">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> O SORTEIO COMEÇA AQUI</div>
              <h1 id="page-title">DRAFT <span>5ª</span><br />COPA NILVO</h1>
              <p className="hero-tagline">“A verdadeira glória eterna!”</p>
              <p className="hero-description">Monte os times. Compartilhe a resenha.<br className="desktop-break" /> Que comece a disputa.</p>
            </div>
            <div className="hero-stamp" aria-label="5ª edição da Copa Nilvo, seis times e trinta jogadores">
              <span className="stamp-top">COPA NILVO</span>
              <strong>5ª</strong>
              <span className="stamp-bottom">EDIÇÃO <i>•</i> 2026</span>
            </div>
            <div className="hero-stripe"><span>JUNTOS PELO JOGO</span></div>
          </section>

          <section className="draft-section" aria-labelledby="teams-title">
            <div className="section-heading">
              <div><span className="section-kicker">A COMPETIÇÃO</span><h2 id="teams-title">Times do draft</h2></div>
              <div className="section-tools"><span className="drag-hint"><span aria-hidden="true">↕</span> Arraste os jogadores para montar os times</span><button className="reset-button" onClick={clearDraft} type="button"><span aria-hidden="true">↺</span> Limpar draft</button></div>
            </div>
            <TeamTable teams={teams} moveToTeam={moveToTeam} moveToBench={moveToBench} />
          </section>

          <PlayerList benchPlayers={benchPlayers} />
        </main>

        <footer className="site-footer">
          <div className="footer-brand"><img className="footer-logo" src="/assets/copa-nilvo.svg" alt="" /><span><strong>COPA NILVO</strong><small>A verdadeira glória eterna!</small></span></div>
          <div className="sponsor-area"><span className="sponsor-label">APRESENTADO POR</span><div className="sponsor-slot" aria-label="Área reservada para os logotipos dos patrocinadores"><span>LOGOTIPOS DOS PATROCINADORES</span></div></div>
          <span className="footer-edition">5ª EDIÇÃO <i>•</i> 2026</span>
        </footer>
      </div>
    </DndProvider>
  );
}

export default App;
