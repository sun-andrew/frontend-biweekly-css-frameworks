export const TailwindPage: React.FC = () => {
  return (
    <div className="tw-flex tw-w-full tw-h-screen tw-bg-gradient-to-t tw-from-[#b993d6] tw-to-[#8ca6db] tw-items-center tw-justify-center">
      <div className="tw-w-52 tw-h-72 tw-p-5 tw-bg-white tw-m-auto tw-flex tw-flex-col tw-items-center tw-justify-center tw-shadow-lg tw-rounded-md">
        <img
          className="tw-h-36 tw-w-36"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/258.png"
        />
        <div className="tw-flex tw-flex-row tw-gap-4 tw-items-center">
          <h2 className="tw-text-2xl tw-m-0">ミズゴロウ</h2>
          <span className="tw-text-xs tw-px-2 tw-py-1 tw-text-white tw-bg-[#6390f0] tw-rounded self-center">
            みず
          </span>
        </div>
        <button className="tw-mt-5 tw-px-6 tw-py-2 tw-border-2 tw-border-[#6390f0] tw-bg-white tw-text-[#6390f0] tw-text-sm tw-rounded tw-transition-colors tw-duration-300 tw-hover:tw-bg-[#6390f0] tw-hover:tw-text-white">
          詳細
        </button>
      </div>
    </div>
  );
};
