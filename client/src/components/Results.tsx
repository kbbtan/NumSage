import { isEmpty } from "@/utils/helper";
import Leaderboard from "./Leaderboard";
import { useAppStore } from "@/utils/store";

const Results = () => {
  const {
    solved,
    incorrect,
    attempted,
    finalScores,
    resetSolved,
    resetIncorrect,
    setIsCompleted,
    resetAttempted,
    setFinalScores,
  } = useAppStore();

  return (
    <>
      <div className="mb-5 flex w-2/3 items-center justify-evenly">
        <div>
          <h2 className="text-2xl text-text-accent">Accuracy:</h2>
          <h1 className="text-7xl text-accent">
            {Math.floor((solved / attempted) * 100)}%
          </h1>
        </div>

        <div>
          <h2 className="text-2xl text-text-accent">Missed Numbers:</h2>

          <ol className="mt-2 w-full rounded border border-sub-color">
            {isEmpty(incorrect) ? (
              <li className="flex justify-between bg-bg-color px-5 py-3 text-xl text-text-accent">
                <span>You didn&rsquo;t miss any numbers! 🎉</span>
              </li>
            ) : (
              Object.entries(incorrect)
                .sort((a, b) => b[1] - a[1])
                .map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between bg-bg-color px-5 py-3 text-xl text-text-accent"
                  >
                    <span>
                      {key}: {value}
                    </span>
                  </li>
                ))
            )}
          </ol>
        </div>
      </div>
      {!isEmpty(finalScores) && <Leaderboard final />}
      <button
        onClick={() => {
          resetSolved();
          resetAttempted();
          resetIncorrect();
          setFinalScores({});
          setIsCompleted(false);
        }}
        className="mt-4 rounded border border-sub-color px-5 py-1 text-xl text-sub-color hover:border-text-accent hover:text-text-accent"
      >
        Restart
      </button>
    </>
  );
};

export default Results;
