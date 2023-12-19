import { useEffect, useState } from "react"

export const Btn: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [win, setWin] = useState(false);
    const goal = 11;

    useEffect(() => {
        if (count1 === goal || count2 === goal) {
            setWin(true);
        }
    }, [count1, count2])

    return <div>
        <div className="flex items-center justify-center space-x-4 w-full">
            <button className="bg-red-500 w-60 h-60 text-2xl" onClick={() => setCount1(count1 + 1)}>{count1}</button>
            <button className="bg-blue-500 w-60 h-60  text-2xl" onClick={() => setCount2(count2 + 1)}>{count2}</button>
        </div>
        <div className=" mt-4 flex items-center justify-center bg-slate-400 text-black">
            {win ? (count1 > count2 ? <div>紅隊</div> : <div>藍隊</div>) : null}
        </div>
    </div>

}