import React, { useCallback, useEffect, useRef, useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
  label: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  onChange,
  label,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const rangeRef = useRef<HTMLDivElement | null>(null);

  // Convert value to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Update range styling when minVal changes
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Update range styling when maxVal changes
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (rangeRef.current) {
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Notify parent when values change
  useEffect(() => {
    if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div
      className="flex flex-col items-center space-y-5 w-full"
      role="region"
      aria-label={label}
    >
      {/* Label and value display */}
      <div className="px-4 flex items-center justify-between w-[350px] gap-x-5">
        <p className="text-xl font-semibold">{label}</p>
        <div className="flex gap-x-1" aria-live="polite">
          <p className="text-xl font-semibold">{minVal}</p>
          <span aria-hidden="true">-</span>
          <p className="text-xl font-semibold">{maxVal}</p>
        </div>
      </div>

      {/* Slider controls */}
      <div className="multi-slide-input-container w-[350px] relative">
        {/* Min slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-left w-full focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={`Minimum value: ${minVal}`}
          aria-valuenow={minVal}
          aria-valuemin={min}
          aria-valuemax={max}
        />

        {/* Max slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb-right w-full focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={`Maximum value: ${maxVal}`}
          aria-valuenow={maxVal}
          aria-valuemin={min}
          aria-valuemax={max}
        />

        {/* Slider track and range */}
        <div className="slider relative">
          <div className="track-slider dark:bg-gray-700 bg-gray-300 absolute inset-0" />
          <div
            ref={rangeRef}
            className="range-slider dark:bg-primary bg-secondary absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
