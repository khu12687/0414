class GameObject{
    constructor(objectId,container,src,width,heigh,velX,velY,x,y){
        //맴버변수 : 클래스 안에 소속된 변수를 가리킴
        //인스턴스 변수 : 클래스로부터 생성된 인스턴스에 소속된 변수
        this.objectId=objectId; //용도: 객체를 구분하기 위한 식별값
        this.container=container;
        this.div=document.createElement("div");
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.heigh=heigh;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;
        this.g=0.6;

        //스타일 적용
        this.div.style.width=this.width+"px";
        this.div.style.height=this.heigh+"px";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        //이미지의 크기를 기본적으로 div와 일치시킴..
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.heigh+"px";

        //부모컨테이너의부착
        this.div.appendChild(this.img); //div에 이미지 부착!!
        this.container.appendChild(this.div); //부모 컨테이너에 부착!!
    }
    //내용이 완성되지않는 미완성 메서드를 가리켜 추상메서드라 하면
    //abstract 키워드를 붙여야하는데, 아쉽게도 자바스크립에서는 추상 메서드를 지원하지않는다
    //특히 내용이 완성되지 않았음에  대한 판단은{브레스}가 없는 메서드를의미한다
    tick(){} // 자바에서는 abstract tick()
    render(){}
}