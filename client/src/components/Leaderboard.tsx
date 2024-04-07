import { useAppStore } from "@/utils/store";

type LeaderboardProps = {
  final: boolean;
};

const Leaderboard = ({ final }: LeaderboardProps) => {
  const { gameRoom, playerScores, finalScores } = useAppStore();
  const scores = final ? finalScores : playerScores;
  return (
    gameRoom && (
      <div className="mt-20 flex flex-col items-center text-xl text-text-accent">
        <h1>Leaderboard</h1>

        <ul>
          {Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([id, score], index) => {
              const strScore = score === -1 ? "???" : score;
              return id === gameRoom.sessionId ? (
                <li key={id} className="font-bold">
                  {index + 1}. {id} (You): {strScore}
                </li>
              ) : (
                <li key={id}>
                  {index + 1}. {id}: {strScore}
                </li>
              );
            })}
        </ul>

        <h1 className="mt-5 text-sm text-text-accent">
          Room ID: {gameRoom.roomId}
        </h1>
      </div>
    )
  );
};

export default Leaderboard;
