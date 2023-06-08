
// USAR LETRA MAIUSCULA NO NOME DA CLASS E NO NOME DO ARQUIVO
class Elevator {

    constructor(){
        
        this.$elevator = $('.elevator');
        this.floorQtd = 3;
        this.initEvents();
    }

    initCamera(){

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
            console.log(e.target); // igual ao this.

            $(btn).addClass("floor-selected");

            let floor = $(btn).data('floor');

            this.goToFloor(floor);

        })

    }

    openDoor() {
        return new Promise((resolve,reject)=>{
            if(this.isDoorOpen()){
                resolve();
            }else{
                this.$elevator.find('.door').addClass('open');
                resolve();
            }
        });
        
    }

    closeDoor() {

        return new Promise( (resolve, reject) => {

            if(this.isDoorOpen()){
                this.$elevator.find('.door').removeClass('open');
                resolve();
            }else{
                resolve()
            } 

        });

   
    }

    isDoorOpen() {
        let doors = this.$elevator.find(".open");
        return doors.hasClass("open");
    }

    goToFloor(number){
        this.closeDoor().then(()=>{

            new Promise((resolve,reject) => {
                this.removeFloorClasses();
                let currentFloor = this.$elevator.data('floor');
                let diff = number - currentFloor;
                let time = diff * 2;
                this.$elevator.addClass(`floor${number}`);
                this.$elevator.data('floor',number);
                this.$elevator.css('-webkit-transition-duration',`${time}s`);

                // evento quando finaliza transicao.
                this.$elevator.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    resolve();
                });
                
            }).then(()=>{
                this.setDisplay(number);

                this.openDoor();

                $(`.buttons .button${number}`).removeClass("floor-selected");

                setTimeout(() => {
                    this.closeDoor();
                }, 3000);
            });

        });

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