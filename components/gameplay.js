AFRAME.registerComponent("game-play", {
    schema:{
        elementid: {type: 'string', default:'#ring1'}
    },
    isCollided: function(elementid){
        const element = document.querySelector(elementid)
        element.addEventListener('collide',e=>{
            if(elementid.includes('#ring')){
                console.log(elementid + ' collision')
            }
            else if(elementid.includes('#hurdle')){
                console.log(elementid + ' collision')
            }
        })
    },
    update: function(){
        this.isCollided(this.data.elementid)
    }
})