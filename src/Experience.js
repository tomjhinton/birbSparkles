import {  useGLTF, Text, Float } from "@react-three/drei"
import { OrbitControls , shaderMaterial, Center, Text3D, meshPhongMaterial} from '@react-three/drei'
import { useRef , useEffect, useState, useMemo} from "react"

import Title from "./Title/Title.js"
import Particles from "./Particles/Particles.js"

import Sparkles from "./Sparkles/Sparkles.js"
import Radio from "./Radio/Radio.js"





export default function Experience(){

    const [sparkly, setSparkly] = useState('Not');



    return <>
    <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5} sparkly={sparkly}/>
      <Title sparkly/>
      {sparkly == "Full" && <Particles sparkly={sparkly}/>}
      <Sparkles sparkly={sparkly}/>
      <Radio  sparkly={sparkly} setSparkly={setSparkly}/>
     
     
     

    </>
}