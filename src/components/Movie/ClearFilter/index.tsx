'use client'

type ClearFilterProps = {
    onClear: () => void;
};

const ClearFilter = ({ onClear }: ClearFilterProps) => {
    return (
        <button
            className="bg-gray-800 m-2 text-white cursor-pointer p-6 min-w-[150px] text-[20px] font-bold rounded-2xl"
            onClick={onClear}>Clear Filter</button>
    );
};

export default ClearFilter;
