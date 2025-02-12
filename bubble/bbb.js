document.body.addEventListener('click',(event)=>{
    const circle=document.createElement('div');
    circle.className='circle';
    circle.textContent="Hi";
    const x= event.clientX;
    const y= event.clientY;
    circle.style.left=`${x-25}px`
    circle.style.top=`${y-25}px`

    const massages= ["Hi","Hello","Honey","Boney","Its Me","Bye","Pretty","lol" ," Laxmi pagal"];
    circle.textContent=massages[Math.floor(Math.random()*massages.length)];

    const color =["red","blue","orange","green","yellow","purple","wheat","Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray", "Brown", "Cyan", "Magenta", "Turquoise", "Beige", "Violet", "Lavender", "Gold", "Silver", "Indigo"];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)]; 
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();

    },5000) 
})