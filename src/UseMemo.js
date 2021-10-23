import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState, useMemo } from "react";

const getAverage = (n) => {
  console.log("getAverage");
  if (n.length === 0) return 0;
  const sum = n.reduce((a, b) => a + b);
  return sum / n.length;
};

const UseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
      <div>평균값: {avg}</div>
    </div>
  );
};

export default UseMemo;
