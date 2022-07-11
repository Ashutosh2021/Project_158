AFRAME.registerComponent("poster",{
    init: function(){
        this.postersContainer=this.el
        this.createPosters()
    },

    createPosters: function(){
        const thumbNailsRef = [
            {
              id: "comic1",
              title: "Comic 1",
              url: "./assets/images/img1.jpg",
            },
            {
              id: "comic2",
              title: "Comic 2",
              url: "./assets/images/img2.jpg",
            },
      
            {
              id: "comic3",
              title: "Comic 3",
              url: "./assets/images/img3.jpg",
            },
            {
              id: "comic4",
              title: "Comic 4",
              url: "./assets/images/img4.jpg",
            },
          ];

          previousXPosition=-60

          for(var item of thumbNailsRef){
            var posX = previousXPosition+25
            var posY = -3
            var posZ = -40

            var position={x:posX ,y:posY ,z:posZ}

            previousXPosition=posX

            const borderEl = this.createBorders(item.id,position)
            const thumbNailEl = this.createThumbnails(item)
            borderEl.appendChild(thumbNailEl)
            const titleEl = this.createTitle(item,position)
            borderEl.appendChild(titleEl)

            this.postersContainer.appendChild(borderEl)
          }
    },
    
    createBorders: function(id,position){
        const entityEl = document.createElement("a-entity")

        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            height:24,
            width:19.25
        })
        entityEl.setAttribute("material",{
            opacity:1,
            color:"#ffffff"
        })
        entityEl.setAttribute("cursor-listener",{})

        return entityEl
    },

    createThumbnails:function(item){
        const entityEl = document.createElement("a-entity")

        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            height:21,
            width:15
        })
        entityEl.setAttribute("material",{src:item.url})
        entityEl.setAttribute("position",{x:0,y:0,z:0.1})
        return entityEl
    },


    createTitle: function(item,position){
        const entityEl = document.createElement("a-entity")

        entityEl.setAttribute("text",{
            font:"dejavu",
            align:"center",
            width: 1,
            color:"#552211",
            value:item.title
        })

        var elementPosition=position
        elementPosition.y=-20
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("visible",true)

        return entityEl
    }
})