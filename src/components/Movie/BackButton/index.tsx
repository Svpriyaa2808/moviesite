'use client'

type BackButtonProps = {
    onClear: () => void;
};

const BackButton = ({ onClear }: BackButtonProps) => {
    return (
        <button
            className="bg-gray-800 text-white cursor-pointer p-6 min-w-[150px] text-[20px] font-bold rounded-2xl"
            onClick={onClear}
        >
            Back
        </button>
    );
};

export default BackButton;
