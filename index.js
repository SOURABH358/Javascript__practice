const RectangleForm = document.getElementById('rectangle__form')
const Root = document.getElementById('root')
const rec = document.createElement('div')
class Rectangle {
    constructor(_width, _height, _color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
    createRectangle(){
        rec.style.backgroundColor = this.color;
        rec.style.height = this.height + 'px';
        rec.style.width = this.width + 'px';
        rec.style.margin = '2rem auto';
        console.log(rec)
        Root.appendChild(rec);
    }
}
RectangleForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.currentTarget.elements[0].value,e.currentTarget.elements[1].value,e.currentTarget.elements[2].value)
    const NewRect = new Rectangle(e.currentTarget.elements[0].value,e.currentTarget.elements[1].value,e.currentTarget.elements[2].value)
    NewRect.createRectangle();
})