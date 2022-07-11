AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{type:"string",default:""}
    },

    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    handlePostersListState: function(){
        
            const id= this.el.getAttribute("id")
            const posterId = ["comic1","comic2","comic3","comic4"]

            if (posterId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id
                });
                this.el.setAttribute("material",{
                    color:"blue",
                    opacity:1
                })
            }
        
    },

    handleMouseEnterEvent: function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePostersListState();
        })
    },

    handleMouseLeaveEvent: function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id === selectedItemId){
                    el.setAttribute("material",{
                        color:"white",
                        opacity:1
                    })
                }
            }
        })
    }
})