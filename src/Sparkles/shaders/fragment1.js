export default /* glsl */`uniform float uTime;

varying vec2 vUv;
uniform vec2 uResolution;
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
  trip.xyz += warpsScale * .05 * sin(11. * trip.yzx + (uTime * .15));
  trip.xyz += warpsScale * .025 * sin(17. * trip.yzx + (uTime * .15));
  
}  

void uvRipple(inout vec2 uv, float intensity){

vec2 p = uv -.5;


  float cLength=length(p);

   uv= uv +(p/cLength)*cos(cLength*15.0-uTime*.5)*intensity;

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
  vec2 uv2 = (gl_FragCoord.xy - uResolution * .5) / uResolution.yy + 0.5;


  float t = (uTime * 2.) + uv.x;
  
  uv = fract( uv * 200.);
 
 vec3  color = vec3(0.90725, 0.9108, 0.9857);

 color += sin(t);

//  color = vec3(uv.x, uv.y, 1.);

//  coswarp(color, 3.);
//  coswarp(color, 3.);

 float alpha =1.;
  
 

    //   alpha = step(length(uv -.5), .2 * sin(t));
      alpha = stroke(star(uv,  6, .09), .3, .3);

    //   alpha = 0;

   
    // alpha *= sin(t);

     
        
      

  
    gl_FragColor = vec4(vec3(color.r, color.g, color.b), alpha);
}`