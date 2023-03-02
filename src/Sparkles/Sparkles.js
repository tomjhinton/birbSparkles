import { useRef, useEffect, useMemo } from "react"
import { OrbitControls , shaderMaterial, Center} from '@react-three/drei'
import { useAnimations,useGLTF, Clone } from "@react-three/drei"
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";
import { EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Points } from "@react-three/drei";
import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'

import vertexShader1 from './shaders/vertex1.js'
import fragmentShader1 from './shaders/fragment1.js'

import { useFrame, extend } from "@react-three/fiber";
import * as THREE from 'three';


export default function Experience(props){

    let raph = useRef()
    let raph2 = useRef()

    let ref = useRef()
    // ref.current.matrixWorldNeedsUpdate = true
    const model = useGLTF('raph3.glb')
    const copiedModel = useMemo(() => model.scene.clone(), [])

  



    const group = useRef();
    const { nodes, materials, animations } = useGLTF("raph3.glb");
    

 const animations1 = useAnimations(model.animations, raph)
 
 const { actions, mixer } = useAnimations(animations, group);

 const PlaneMaterial = shaderMaterial(

    {
        uTime: 0,
        uResolution:{x:0, y:0}
       
    },
    vertexShader1,
    fragmentShader1,
    

)
extend({PlaneMaterial})


const planeMaterial = useRef()

// planeMaterial.current.transparent = true
useFrame((state, delta) => {
if(props.sparkly === "Full"  ){
    planeMaterial.current.uTime += delta

if (
    planeMaterial.current.uResolution.x === 0 &&
    planeMaterial.current.uResolution.y === 0
   ) {
    planeMaterial.current.uResolution.x = screen.width;
    planeMaterial.current.uResolution.y = screen.height;
    
   }}
// planeMaterial.current.transparent = true
})



 const PointMaterial = shaderMaterial(

    {
        uTime: 0,
        uResolution: {x: screen.width, y: screen.height}
        
       
    },
    vertexShader,
    fragmentShader,

    
)
extend({PointMaterial})





const pointMaterial = useRef()


  useFrame((state, delta) => {
  
  if(props.sparkly === "Slightly"){  
    pointMaterial.current.uTime += delta
    if (
     pointMaterial.current.uResolution.x === 0 &&
     pointMaterial.current.uResolution.y === 0
    ) {
     pointMaterial.current.uResolution.x = screen.width;
     pointMaterial.current.uResolution.y = screen.height;
     
    }}
   
  });

    useEffect(() =>
    {
       let action
    
      action = animations1.actions['stand']
        if(props.sparkly === "Full"){
             action = animations1.actions['metarigAction']

        // actions.metarigAction.play()
        action.reset().fadeIn(0.5).play()
        }

         if(props.sparkly !== "Full"){
       
            action.stop()
             action = animations1.actions['stand']
             action.reset().fadeIn(0.5).play()
            //  console.log(action)
            
        
        }
       

        // return () => {

        //     action.reset().fadeIn(0.5).play()
            

        // }

        
    }, [props])

    return(

        <>
        
    <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>


      <primitive ref={raph} object={ model.scene } 
         scale={ 1 }
        //  position={ [ 0, -.5, 2.5 ]}
        
          />

{/* {props.sparkly === "Not" &&<primitive ref={raph2} object={ copiedModel } 
         scale={ 1 }
        //  position={ [ 0, -.5, 2.5 ]}
         />} */}



   {props.sparkly === "Slightly" && <Points scale={1.03} positions={copiedModel.children[0].children[1].children[0].geometry.attributes.position.array} stride={3} ref={ref}  position-y={0}>
    <pointMaterial ref={pointMaterial} depthWrite={false} transparent />
    </Points>}


    {props.sparkly === "Full" &&  <group ref={group} dispose={null} scale={1.03}>
       <group name="Scene">
         <group name="metarig" position={[0, -1.04, 0]}>
           <primitive object={nodes.spine} />
           <group name="Vert">
             <skinnedMesh
               name="Vert_1"
               geometry={nodes.Vert_1.geometry}
              
               skeleton={nodes.Vert_1.skeleton}
               
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>

             <skinnedMesh
               name="Vert_2"
               geometry={nodes.Vert_2.geometry}
               material={materials["Material.001"]}
               skeleton={nodes.Vert_2.skeleton}
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>

             <skinnedMesh
               name="Vert_3"
               geometry={nodes.Vert_3.geometry}
               material={materials["Material.002"]}
               skeleton={nodes.Vert_3.skeleton}
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>
             <skinnedMesh
               name="Vert_4"
               geometry={nodes.Vert_4.geometry}
               material={materials["Material.003"]}
               skeleton={nodes.Vert_4.skeleton}
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>

             <skinnedMesh
               name="Vert_5"
               geometry={nodes.Vert_5.geometry}
               material={materials["Material.004"]}
               skeleton={nodes.Vert_5.skeleton}
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>
             <skinnedMesh
               name="Vert_6"
               geometry={nodes.Vert_6.geometry}
               material={materials["Material.005"]}
               skeleton={nodes.Vert_6.skeleton}
             >
                  <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
                  </skinnedMesh>
             <skinnedMesh
               name="Vert_7"
               geometry={nodes.Vert_7.geometry}
               material={materials["Material.006"]}
               skeleton={nodes.Vert_7.skeleton}
             >
            <planeMaterial  side={THREE.DoubleSide} ref={planeMaterial} transparent />
            </skinnedMesh>
           </group>
         </group>
       </group>
     </group>
}

        </>

        

    )
}



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// export function Model(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/raph.glb");
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group name="metarig" position={[0, -1.04, 0]}>
//           <primitive object={nodes.spine} />
//           <group name="Vert">
//             <skinnedMesh
//               name="Vert_1"
//               geometry={nodes.Vert_1.geometry}
//               material={materials.Material}
//               skeleton={nodes.Vert_1.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_2"
//               geometry={nodes.Vert_2.geometry}
//               material={materials["Material.001"]}
//               skeleton={nodes.Vert_2.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_3"
//               geometry={nodes.Vert_3.geometry}
//               material={materials["Material.002"]}
//               skeleton={nodes.Vert_3.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_4"
//               geometry={nodes.Vert_4.geometry}
//               material={materials["Material.003"]}
//               skeleton={nodes.Vert_4.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_5"
//               geometry={nodes.Vert_5.geometry}
//               material={materials["Material.004"]}
//               skeleton={nodes.Vert_5.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_6"
//               geometry={nodes.Vert_6.geometry}
//               material={materials["Material.005"]}
//               skeleton={nodes.Vert_6.skeleton}
//             />
//             <skinnedMesh
//               name="Vert_7"
//               geometry={nodes.Vert_7.geometry}
//               material={materials["Material.006"]}
//               skeleton={nodes.Vert_7.skeleton}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/raph.glb");
