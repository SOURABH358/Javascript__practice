function getVolume(height, width, length){
    return height*width*length;
}
console.log(getVolume(10,30,20))

function getVolumeCurry(height){
    return function(width){
        return function(length){
            return height*width*length;
        }
    }
}
console.log(getVolumeCurry(10)(30)(20))