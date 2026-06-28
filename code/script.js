const envelope = document.querySelector(".envelope");
const container = document.querySelector(".container");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {
    container.classList.toggle("open");

    if (container.classList.contains("open")) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }
});
document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.className="cursor-heart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },800);

});
document.addEventListener("click", (e) => {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "24px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "heartFloat .8s forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
});if(container.classList.contains("open")){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="❤️";

            heart.className="cursor-heart";

            heart.style.left=Math.random()*window.innerWidth+"px";

            heart.style.top=window.innerHeight+"px";

            document.body.appendChild(heart);

            setTimeout(()=>heart.remove(),1200);

        },i*120);

    }

}