
// USAR LETRA MAIUSCULA NO NOME DA CLASS E NO NOME DO ARQUIVO
class Elevator {

    constructor(){
        
        this.$elevator = $('.elevator');
        this.floorQtd = 3;
        this.isMovement = false;
        this.queue = [];
        this.initCamera();
        this.initEvents();
    }

    initCamera(){ // acionar camera.

        navigator.mediaDevices.getUserMedia({
            video:true,
        }).then(stream => {

            let video = this.$elevator.find('camera')[0];
            video.srcObject = stream;
        }).catch(err => {
            console.log(err);
        })

    }

    initEvents(){

        $('.buttons .btn').on("click", e => {

            let btn = e.target;
            //console.log(e.target); // igual ao this.

            $(btn).addClass("floor-selected");

            let floor = $(btn).data('floor');

            this.goToFloor(floor);

        })

    }

    openDoor() {
        return new Promise((resolve,reject)=>{
            if(this.isDoorOpen()){

                this.transitionEnd(()=>{
                    resolve();
                });
                
            }else{

                this.$elevator.find('.door').addClass('open');

                this.transitionEnd(()=>{
                    
                    resolve();

                });
            }
        });
        
    }

    closeDoor() {

        return new Promise( (resolve, reject) => {

            if(this.isDoorOpen()){
                
                this.$elevator.find('.door').removeClass('open');

                setTimeout(() => {
                    resolve();
                },1500);
                
            }else{
                
                resolve();

            } 

        });

   
    }

    isDoorOpen() {
        let doors = this.$elevator.find(".open");
        return doors.hasClass("open");
    }

    transitionEnd(callback){
        // evento quando finaliza transicao.
        this.$elevator.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            callback();
        });
    }

    goToFloor(number){

        if(!this.isMoviment){

            this.isMoviment = true;

            this.closeDoor().then(()=>{

                new Promise((resolve,reject) => {

                    let currentFloor = this.$elevator.data('floor');

                    if( number != currentFloor){
                        this.removeFloorClasses();
                        let diff = number - currentFloor;
                        let time = diff * 2;
                        this.$elevator.addClass(`floor${number}`);
                        this.$elevator.data('floor',number);
                        this.$elevator.css('-webkit-transition-duration',`${time}s`);
                        
                        this.transitionEnd(()=>{
                            resolve();
                        });
                    }else{
                        resolve();
                    }
                    

                }).then(()=>{
                    this.setDisplay(number);

                    this.openDoor().then(()=>{

                        $(`.buttons .button${number}`).removeClass("floor-selected");

                        this.isMoviment = false;

                        setTimeout(() => {
                            this.closeDoor();
                        }, 3000);

                        setTimeout(()=>{

                            if(this.queue.length){

                                let newFloor = this.queue.shift();

                                this.goToFloor(newFloor);
                            }

                        },2000);

                    });

                });

            });

        }else{
            this.queue.push(number);
        }

    }

    setDisplay(floor){
        this.$elevator.find(".display").text(floor);
    }

    removeFloorClasses(){
        for(let i=1;i<=this.floorQtd;i++){

            this.$elevator.removeClass(`floor${i}`);

        }
    }

}