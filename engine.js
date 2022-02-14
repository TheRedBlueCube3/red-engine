class Component{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }
    hide(){
        this.$el.style.display = 'none'
    }
    show(){
        this.$el.style.display = 'block'
    }
}
class Box extends Component{
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}
class Circle extends Box{
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}
const box = new Box({
    selector: "#box",
    size:120,
    color: 'red'
})
box.$el.addEventListener('click',function(){
    box.hide()
    console.log('You touched me!')
    setTimeout(()=>{
        box.show()
    },1000)
})