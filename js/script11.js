const Block = {
    data(){
        return{
            title: 'Принципы SOLID',
            color: "pink"
        }
    },
    methods:{
        blo(){
            if(this.color == 'pink'){
                this.title = 'Мой любимый принцип Барбары Лисков. А вообще я топлю за KISS(«Keep it simple, stupid»)'
                this.color = "aqua"
            }else{
                this.title = 'Принципы SOLID'
                this.color = "pink"
            }
        }
    }
}
Vue.createApp(Block).mount('#block')