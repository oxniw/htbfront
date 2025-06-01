// src/app/page.tsx
"use client";
import { BackgroundLines } from "../../components/ui/background-lines";
import './components/animate.css';
import { FlipWords } from "../../components/ui/flip-words"
import  Xianimation  from "./components/xiwarpper"
import React,{useState,useEffect,useMemo} from "react";
import {sanitizeInput} from "@/app/components/remove";
import axios from "axios";
import MyResponsiveLineChart from "./components/dynachart";
import CustomButton from "./components/Custombutton";
import Link from "next/link";
import DynamicBarChart from '@/app/components/DynamicBarChartProps';
import { motion } from 'framer-motion';
export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const words = ["Physics", "Chem", "Biology", "Maths", "English", "Social", "History", "Geography"];
  const [Classs, setClasss] = useState("");
  const [ID, setID] = useState("");
  const [Subject, setSubject] = useState("");
  const [Tries, setTries] = useState("");
  const [XI, setXI] = useState([]);
  const [PERCENTILE, setPERCENTILE] = useState([]);
  const [XIPERCENT, setXIPERCENT] = useState([]);
  const [ZSCORE, setZSCORE] = useState([]);
  const [Xi, setXi] = useState("");
  const [PERCENTILe, setPERCENTILe] = useState("");
  const [XIPERCENt, setXIPERCENt] = useState("");
  const [ZSCORe, setZSCORe] = useState("");
  const [rank, setrank] = useState("");
  const [mean , setMean] = useState("");
  const [med , setMed] = useState("");
  const [mode , setMode] = useState("");
  const [std , setStd] = useState("")
  const [maxscore, setMaxscore] = useState("")
  const [minscore , setMinscore] = useState("")
  const [wich, setWhich] = useState("5");
  const [ximax, setXimax] = useState("")
  const [triestimes , settriestimes] = useState("")
  const  [trysubject , setTrysubject]= useState("")
  const [cl , setcl] = useState("")
  const [zoom, setZoom] = useState<number>(1);
  const [er , seter] = useState(0)
  const [count, setcount] = useState("")
  const [choice, setChoice] = useState<string>('');
  const [ppl, setppl] = useState([]);
  const [sortmethod ,setsortmethod] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };
  const handleChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSubject(e.target.value);
};

    const sortedPpl = useMemo(() => {
      const clone = [...ppl];

      return clone.sort((a, b) => {
        const idA = Object.keys(a).find(k => k !== "name")!;
        const idB = Object.keys(b).find(k => k !== "name")!;
        const rankA = parseInt((a[idA] as PersonStat).rank.split(" / ")[0], 10);
        const rankB = parseInt((b[idB] as PersonStat).rank.split(" / ")[0], 10);

        if (Subject === "lowtomore") return rankA - rankB;
        if (Subject === "moretolow") return rankB - rankA;
        return 0;
      });
    }, [ppl, Subject]);
  type PersonStat = {
  percentile: number;
  rank: string;
  xi: number;
  xipercent: number;
  zscore: number;
  clas : string
};

type PersonWithName = {
  name: string;
  [key: string]: PersonStat | string;
};
  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(Number(e.target.value));
  };
  const [Stats , setStats] = useState([
  { score: 0, people: 2 },
  { score: 1, people: 4 },
  { score: 2, people: 6 },
  { score: 3, people: 8 },
  { score: 4, people: 3 },
  { score: 5, people: 10 },
  { score: 6, people: 5 },
  { score: 7, people: 1 },
  { score: 8, people: 0 },
  { score: 9, people: 2 },
  { score: 10, people: 7 },
])
  const send = async () => {
    console.log(Subject)
    const classs:string = sanitizeInput(Classs);
    const id:string = sanitizeInput(ID);
    const subject:string = sanitizeInput(Subject);
    const tries:string = sanitizeInput(Tries);
    if (!classs || !id || !subject || !tries || classs.trim() === "" || id.trim() === "" || subject.trim() === "" || tries.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    try {
    const res = await axios.post(`${apiUrl}/api/getdata1`, {
      class: classs,
      id: id,
      subject: subject,
      tries: tries,
      
  })
    if (res.status === 200) {
      seter(res.status)
      console.log(res.data.userdata)
      setXI(res.data.totaldata[`xi`]);
      setPERCENTILE(res.data.totaldata[`percentile`]);
      setXIPERCENT(res.data.totaldata[`xipercent`]);
      setZSCORE(res.data.totaldata[`zscore`]);
      setXi(res.data.userdata["xi"])
      setPERCENTILe(res.data.userdata[`percentile`])
      setXIPERCENt(res.data.userdata[`xipercent`])
      setZSCORe(res.data.userdata[`zscore`])
      setrank(res.data.userdata[`rank`])
      setStd(res.data.totals["std"])
      setMean(res.data.totals["mean"])
      setMode(res.data.totals["mode"])
      setMed(res.data.totals["med"])
      setMaxscore(res.data.totals["max"])
      setMinscore(res.data.totals["min"])
      setStats(res.data.stats)
      settriestimes(tries)
      setXimax(res.data.ximax)
      setTrysubject(subject)
      setcl(res.data.cl)
      setppl(res.data.all)
      console.log(res.data.all)
      setcount(res.data.totals["count"])
      console.log(ppl)
    } } catch (error) {
    if (axios.isAxiosError(error)) {
    if (error.response) {
      alert(
        `Because: ${(error.response.data.error)}}`
      );
    } else if (error.request) {
      alert('No response received: ' + error.request);
    } else {
      alert('Request setup error: ' + error.message);
    }

  } else {
    alert('Unexpected error: ' + error);
  }
}
    
}
  return (
    <div className="p-4 bg-white text-black">
      <div className="text-center mt-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Welcome to Your Dashboard
          </h1>
          
        </div>
      <div className=" h-[20rem] text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 flex items-center justify-center rounded-2xl w-full z-10 mb-4 border-2 border-gray-300 fade-in">
        <FlipWords words={words} duration={2000} />
        
        <BackgroundLines className="absolute rounded-2xl w-full z-0 h-[20rem]">
        {null}
        </BackgroundLines>
        </div>
      <h2 className="text-2xl font-semibold text-purple-600 drop-shadow-md mt-8">
      Input
      </h2>

        <div className="flex flex-row w-full h-full gap-5 text-black">
          <div className="flex w-full h-full gap-4">
            <div className="relative flex h-16 w-full">
              <div className="absolute p-3 text-sm">
                ID
              </div>
              <input
                onChange={(e) => {setID(e.target.value);}}
                type="search"
                className="flex border-2 hover:border-slate-950 bg-slate-300 rounded-xl h-16 pl-4 pt-6 w-full transition duration-300"
              />
            </div>
            <div className="relative flex h-16 w-full text-black">
              <div className="absolute p-3 text-sm">
                Class
              </div>
              <input
                type="search"
                className="flex border-2 hover:border-slate-950 bg-slate-300 rounded-xl h-16 w-full pl-4 pt-6  transition duration-300"
                onChange={(e) => {setClasss(e.target.value);}}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full gap-5 text-black">
          <div className="flex w-full h-full gap-4">
            <div className="relative flex h-16 w-full">
              <div className="absolute p-3 text-sm">
                Subject
              </div>
              <select id="fruit" value={Subject} onChange={handleChange} className="text-center flex border-2 hover:border-slate-950 bg-slate-300 rounded-xl h-16 pl-4 pt-6 w-full transition duration-300">
                <option value="">--Subject--</option>
                <option value="math 1">math 1</option>
                <option value="math 2">math 2</option>
                <option value="normal sci">normal sci</option>
                <option value="bio">bio</option>
                <option value="chem">chem</option>
                <option value="thai">thai</option>
                <option value="physics">physics</option>
                <option value="soc">soc</option>
                <option value="eng">eng</option>
              </select>
            </div>
            <div className="relative flex h-16 w-full">
              <div className="absolute p-3 text-sm">
                Examination No
              </div>
              <input
                onChange={(e) => {setTries(e.target.value);}}
                type="search"
                className="flex border-2 hover:border-slate-950 bg-slate-300 rounded-xl h-16 pl-4 pt-6 w-full transition duration-300"
              />
            </div>
          </div>
        </div>
        <button 
        onClick={send}
        className="text-black justify-center items-center relative flex p-2 border-2 hover:border-slate-950 bg-slate-300 transition duration-300 rounded-xl h-24 md:w-60">
          
              
              <Xianimation/>
            </button>
            <hr className="my-10 border-0 h-[2px] bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full" />
            <div className="text-center mt-12 mb-4">
            <h2 className="text-3xl font-bold text-purple-600 inline-flex items-center gap-2">
              <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a1 1 0 01-1-1v-6a1 1 0 012 0v6a1 1 0 01-1 1zm4 0a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1zm-8 0a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z" />
              </svg>
              Stats Section
            </h2>
          </div>
          <CustomButton label="Update log" variant="solid" onClick={() => setWhich("5")} now={wich} target="5" />
          <CustomButton label="Point" variant="solid" onClick={() => setWhich("2")} now={wich} target="2" />
          <CustomButton label="Graph" variant="solid" onClick={() => setWhich("1")} now={wich} target="1"/>
          <CustomButton label="Total" variant="solid" onClick={() => setWhich("3")} now={wich} target="3"/>
          <CustomButton label="Board" variant="solid" onClick={() => setWhich("4")} now={wich} target="4"/>
        {
          wich === "1" && er === 200 && (
            <div className="gap-5  h-full  rounded-2xl w-full z-10 grid grid-rows-2 lg:grid-cols-2 p-5 fade-in overflow-auto">
            <div className="rounded-xl flex flex-col w-full h-full justify-center items-center lg:p-5 border border-gray-300">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
              Xi!!!!!
              </h2>
                <MyResponsiveLineChart datas={XI}
                xKey="tries"
                lineKeys={[`xi`]}/>
            </div>
            <div className="rounded-xl border border-gray-300 flex flex-col w-full h-full justify-center items-center lg:p-5">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
              percentile!!!!!
              </h2>
                <MyResponsiveLineChart datas={PERCENTILE}
                xKey="tries"
                lineKeys={[`percentile`]}/>
            </div>
            <div className="rounded-xl border border-gray-300 flex flex-col w-full h-full justify-center items-center lg:p-5">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
              xipercent!!!!!
              </h2>
                <MyResponsiveLineChart datas={XIPERCENT}
                xKey="tries"
                lineKeys={[`xipercent`]}/>
            </div>
            <div className="rounded-xl border border-gray-300 flex flex-col w-full h-full justify-center items-center lg:p-5">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
              zscore!!!!!
              </h2>
                <MyResponsiveLineChart datas={ZSCORE}
                xKey="tries"
                lineKeys={[`zscore`]}/>
            </div>
            
          </div>
          )
        }
        {
          wich === "2" && er === 200 && (
            <div className="gap-5  h-full  rounded-2xl w-full z-10 grid grid-rows-2 lg:grid-cols-2 p-5 fade-in">
        <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">คะเเนน</h2>
          <p className="mt-2 text-gray-600">คะเเนนรอบนี้คุณได้ {Xi} คะเเนน!!</p>
          
        </div>
        <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">percentile</h2>
          <p className="mt-2 text-gray-600">คุณชนะ {PERCENTILe} คน จาก 100 คน!!</p>
          
        </div>
        <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">ค่าเฉลี่ย</h2>
          <p className="mt-2 text-gray-600">รอบนี้คุณได้ค่าเฉลี่ย {XIPERCENt} !!</p>
          
        </div>
        <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Zscore</h2>
          <p className="mt-2 text-gray-600">รอบนี้คุณได้ค่ามาตรฐาน {ZSCORe}</p>
          
        </div>
        <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">ได้ที่</h2>
          <p className="mt-2 text-gray-600">สอบรอบนี้ได้ที่ {rank.split("/")[0]} จาก {rank.split("/")[1]} !!</p>
        </div>
        
      </div>
          )
          
        }
        {
          wich === "3" && er === 200 && (
            
      <div>
        <div className="text-center mt-12 mb-4">
            <h2 className="text-3xl font-bold text-purple-600 inline-flex items-center gap-2">
              คะเเนนสอบ {trysubject} ของห้อง {cl} รอบที่ {triestimes} คะเเนนเต็ม {ximax}
            </h2>
          </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Zoom Level: {zoom}x
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={zoom}
            onChange={handleZoomChange}
            className="w-full"
          />
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: `calc(100% + ${Stats.length * 100 * (zoom-1)}px)` }}>
            <DynamicBarChart
              data={Stats}
              xKey="score"
              yKey="people"
              xLabel="คะแนน"
              yLabel="จำนวนคน"
              barColor="#10B981"
            />
          </div>
        </div>
        <div className="gap-5  h-full  rounded-2xl w-full z-10 grid grid-rows-2 lg:grid-cols-2 p-5 fade-in">
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">max</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้คะเเนนมากสุด : {maxscore} !!</p>

            </div>
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">min</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้คะเเนนน้อยสุด : {minscore} !!</p>
            </div>
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">mean</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้ค่าเฉลี่ย : {mean} !!</p>
            </div>
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">med</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้มัธยฐาน : {med} !!</p>
            </div>
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">mode</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้ฐานนิยม : {mode} มี {count} !!</p>
            </div>
            <div className="mt-10 mx-auto w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800">std</h2>
              <p className="mt-2 text-gray-600">สอบรอบนี้ส่วนเบี่ยงเบนมาตรฐาน : {std} !!</p>
            </div>
      </div >
      
      
      </div>
      
          )
          
        }
        {wich === "4" && er === 200  && (
          
          <div className="relative max-h-screen p-6 fade-in gap-5 overflow-auto">
            <div>
              <div className="text-center mt-12 mb-4 justify-center items-center flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-purple-600 inline-flex items-center gap-2">
                  คะเเนนสอบ {trysubject} ของห้อง {cl} รอบที่ {triestimes} คะเเนนเต็ม {ximax} 
                </h2><select
                  id="fruit"
                  value={Subject}
                  onChange={handleChanged}
                  className="justify-center items-center text-xl flex border-2 hover:border-slate-950 bg-white rounded-xl h-10 w-48 transition duration-300"
                >
                  <option value="normal">ปกติ</option>
                  <option value="lowtomore">น้อยไปมาก</option>
                  <option value="moretolow">มากไปน้อย</option>
                </select>
              </div>
            </div>
            {sortedPpl.map((item: PersonWithName, i) => {
              const keys = Object.keys(item).filter((k) => k !== 'name');
              const key = keys[0];
              const data = item[key] as PersonStat;
              const name = item.name;

              return (
                <div key={i} className="p-4 rounded-lg shadow bg-white/30 backdrop-blur-md mb-4">
                  <h3 className="font-bold text-gray-800">👤 {name}</h3>
                  <p className="text-gray-700">🆔 ID: {key}</p>
                  <p className="text-gray-700">🏆 ห้อง: {data.clas}</p>
                  <p className="text-gray-700">🏅 อันดับ: {data.rank}</p>
                  <p className="text-gray-700">📊 คะแนน xi: {data.xi}</p>
                  <p className="text-gray-700">📈 เปอร์เซ็นไทล์: {data.percentile}%</p>
                  <p className="text-gray-700">📉 Z-Score: {data.zscore}</p>
                </div>
              );
            })}
          </div>
        )
        }
        {wich === "5" && er === 200 && (
          <div className="gap-5 h-screen  rounded-2xl w-full z-10 flex p-5 fade-in flex-col">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
                Update log
              </h2>
            <div className="rounded-xl flex flex-col w-full h-full lg:p-5 border border-gray-300 overflow-auto">
              <div className="w-full max-w-md p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800">วันที่ 4 มิถุนายน 2568</h2>
            <p className="mt-2 text-gray-600">Lets do it, TB 18</p>
          </div>
            </div>
        </div>
        )}
        <div className="gap-5  h-full  rounded-2xl w-full z-10 flex p-5 fade-in ">
          <div className="rounded-xl flex flex-col w-full h-full lg:p-5 border border-gray-300">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-thin tracking-tight">
              Contact
            </h2>
            
            <p>
              
            Link:{" "}
            <Link
              href="https://www.instagram.com/namnourng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="ml-1 transition duration-300 hover:text-blue-600 text-blue-400"
                style={{ textShadow: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0 0 6px rgba(59,130,246,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                instagram
              </span>
            </Link>
            
          </p>
          <p>
              
            Link:{" "}
            <Link
              href="https://github.com/oxniw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="ml-1 transition duration-300 hover:text-blue-600 text-blue-400"
                style={{ textShadow: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = "0 0 6px rgba(59,130,246,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                github
              </span>
            </Link>
            
          </p>
          </div>
      </div>
      
    </div>
  );
}
