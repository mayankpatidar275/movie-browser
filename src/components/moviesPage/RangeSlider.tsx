import React, { useCallback, useEffect, useState, useRef } from "react";

const RangeSlider = ({
  min,
  max,
  onChange,
  label,
}: {
  min: number;
  max: number;
  onChange: (
    value: React.SetStateAction<{
      min: number;
      max: number;
    }>
  ) => void;
  label: string;
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // set the width of the range to decrease from right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (minVal != minValRef.current || maxVal != maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="flex items-center justify-center flex-col space-y-5 w-full">
      <div className="px-4 flex items-center justify-between w-3/4 gap-x-5">
        <p className="text-xl font-semibold">{label}</p>
        <div className="flex gap-x-1">
          <p className="text-xl font-semibold">{minVal}</p>
          <span>-</span>
          <p className="text-xl font-semibold">{maxVal}</p>
        </div>
      </div>

      <div className="multi-slide-input-container w-[400px] bg-red-300">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-left w-[400px]"
          style={{
            zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb-right w-[400px]"
          style={{
            zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
          }}
        />

        <div className="slider">
          <div className="track-slider dark:bg-primary bg-secondary" />
          <div className="range-slider dark:bg-primary bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
