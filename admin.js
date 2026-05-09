function save(){

const data={

width:width.value,
height:height.value,
bg:bg.value,
logo:logo.value,

title:title.value,
desc:desc.value,

titleColor:titleColor.value,
descColor:descColor.value,

titleSize:titleSize.value,
descSize:descSize.value,

font:font.value,
effect:effect.value

};

localStorage.setItem("newsData",JSON.stringify(data));

}
