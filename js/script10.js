const Spisok = { 
    data(){
        return{
            inputValue: '',
            notes: []
        }
    },
    methods:{
        inputChangeValue(event){
            this.inputValue = event.target.value
        },
        start(){
            this.notes.unshift(this.inputValue)
            this.inputValue = ''
        },
        middle(){
            let mid
            mid = this.notes.length / 2
            if(this.notes.length < 2){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }else{
                let part1 = this.notes.splice(0, mid)
                let part2 = this.notes
                this.notes = [...part1, this.inputValue, ...part2]
                this.inputValue = ''
            }
        
        },
        end(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }
        
    }
 
}
Vue.createApp(Spisok).mount('#spisok')
