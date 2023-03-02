import { Html } from "@react-three/drei"



export default function Radio(props){

 

  const handleChange = e => {
    console.log(e.target.value)
    props.setSparkly(e.target.value)
  }

return<>
    <Html
  as='div' // Wrapping element (default: 'div')
  wrapperClass // The className of the wrapping element (default: undefined)
  prepend // Project content behind the canvas (default: false)
  center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
  fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
  distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
  zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
  transform // If true, applies matrix3d transformations (default=false)
  position={[0, -2, 0]}
>
<form className="radio" >
      <h3>Sparkle Level</h3>

      <input type="radio" name="SparkleLevel" value="Not" id="Not"  checked={props.sparkly === "Not"} onChange={handleChange}/>
      <label htmlFor="regular">Not Sparkly</label>

      <input type="radio" name="SparkleLevel" value="Slightly" id="Slightly" checked={props.sparkly === "Slightly"} onChange={handleChange}/>
      <label htmlFor="medium">Slightly Sparkly</label>

      <input type="radio" name="SparkleLevel" value="Full" id="Full" checked={props.sparkly === "Full"} onChange={handleChange}/>
      <label htmlFor="large">Full Sparkly</label>
    </form>
</Html>

</>


}