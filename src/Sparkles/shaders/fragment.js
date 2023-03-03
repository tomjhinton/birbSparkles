export default /* glsl */`uniform float uTime;

varying vec2 vUv;
uniform vec2 uResolution;
varying vec3 pos;
const float PI = 3.1415926535897932384626433832795;
const float TAU = PI * 2.;


  
vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;

}

void coswarp(inout vec3 trip, float warpsScale ){

  trip.xyz += warpsScale * .1 * sin(3. * trip.yzx + (uTime * .15));
  trip.xyz += warpsScale * .05 * sin(uTime * trip.yzx + (uTime * .15));
  trip.xyz += warpsScale * .025 * sin(17. * trip.yzx + (uTime * .15));
  
}  

void uvRipple(inout vec2 uv, float intensity){

vec2 p = uv -.5;


  float cLength=length(p);

   uv= uv +(p/cLength)*cos(cLength*15.0-uTime*.5)*intensity;

} 



vec3 shape( in vec2 p, float sides ,float size)
{
  
   float d = 0.0;
  vec2 st = p *2.-1.;

  // Number of sides of your shape
  float N = sides ;

  // Angle and radius from the current pixel
  float a = atan(st.x,st.y)+PI ;
  float r = (2.* PI)/(N) ;

  // Shaping function that modulate the distance
  d = cos(floor(.5+a/r)*r-a)*length(st);
  

  return  vec3(1.0-smoothstep(size,size +.1,d));
}

float stroke(float x, float s, float w){
  float d = step(s, x+ w * .5) - step(s, x - w * .5);
  return clamp(d, 0., 1.);
}
  

float star(vec2 st, int V, float s) {
  st = st*4.-2.;
  float a = atan(st.y, st.x)/TAU;
  float seg = a * float(V);
  a = ((floor(seg) + 0.5)/float(V) + 
      mix(s,-s,step(.5,fract(seg)))) 
      * TAU;
  return abs(dot(vec2(cos(a),sin(a)),
                 st));
}




void main() {
  vec2 uv = vUv;
  vec2 uv2 = uv;
  uv = (gl_FragCoord.xy - uResolution * .5) / uResolution.yy + 0.5;
  
 
 vec3 color = vec3(0.);
  
 
 vec2 coOrd = gl_PointCoord;

 

   float alpha = 1.;


     float t = (uTime * 5.) + length(pos.xy);

     coOrd = rotate2D(coOrd, PI + t);

    //  uvRipple(uv, .5);

     color = vec3(0.90725, 0.9108, 0.9857);
     color += sin(t);

       
  


  
      

       
      //  color = vec3(step(color.r, .5), step(color.g, .5), step(color.b, .5)) ;
      // color = mix(color, color2, .5);

        float distanceToCenter = distance(coOrd, vec2(.5));
        // alpha = 1.- step(shape(coOrd, 3., .5).r, .5);
        alpha = stroke(star(coOrd,  6, .09), .5, .5);

      //  if(pos.z <0.1){
      //    alpha = 0.;
      //  }
       

  
    gl_FragColor = vec4(vec3(color.r, color.g, color.b), alpha);
}`