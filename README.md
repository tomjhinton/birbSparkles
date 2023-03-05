# birbSparkles

- You know how it's often a good idea to plan something properly before you do it?
- I did not do that.
- I now have problems.

***

- First thought - what should I make sparkle?
- Easy, I have this photorealistisc scan of Raphaël de Courville Processing Community Lead Fellow.
- Covered up the derrière so it didn't cause too much distraction.

***

- Second Thought - How do I make it sparkle?
- Point cloud?
- Get the geometry positions of the model and stick little stars over them.
- Kinda works, that's at least slightly sparkly.

***

- Second thought .5 - Could I do it better.
- The model does know Raph's special dance.
- The dance is so powerful it breaks everything.
- The geometry positions of a skinned mesh become a pain on animation. 

***

- Maybe just do the sparkly with a shader material not points?
- Used [GLTF to JSX](https://gltf.pmnd.rs/) to get a react version of the model.
- Scaled it up slightly so it looks like its a second layer of the model.
- Transaprency and little stars.
- This is much more sparkly.
- But the dance isn't working. 
- Ohhh, wait this is also always a pain because of the geometry of a skinned mesh on animation.
- Got too focused on that. 
- Found the vertex shader that works with animations and passes the stuff it needs.

***

- Now I'll just switch back to slightly sparkly.
- And now the model is paused in the wrong position. 
- This means the point cloud version does'nt line up.
- I do not know why. 
- Might be a problem with the model.
- Might be an issue with my usage of animation mixer.
- Might be an issue with my react code.
- Only certainty is I've done something dumb.

***

- Did some dumb stuff with shaders on the title because I knew how to do that and it made me feel better about the broken bit. 
- Stars/sparkles are from the [Pixel Spirt Deck](https://pixelspiritdeck.com/)
- Need a json version of the font for the title. [Used this](https://gero3.github.io/facetype.js/)
- Very much lost control of my point numbering system.
- Should have also planned what I'd right here.

