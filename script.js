
    var app = new Vue({
        el: '#app',
              data(){
              return{
                  playerheal: 80,
                  bossheal: 90,
                  gamestart : false,
                  message: '',
                  turns: []
              }
              },
              methods: {
                  start: function(){
                      this.gamestart = true;
                      this.playerheal = 100;
                      this.bossheal = 100;
                  },
                  dam: function(){
                      if(this.check()){
                          return;
                      }   
                      var damage= this.inputDamage(2,10);
                      this.bossheal -= damage;
                      this.turns.unshift({
                          isPlayer: true,
                          textLong: "Player đấm Boss: " + damage,
                      });
                      this.boss();
                      this.message = 'Đấm';
                  },
                   da: function(){
                         if(this.check()){
                          return;
                      }
                      var damage = this.inputDamage(10,20);
                      this.bossheal -= damage;
                      this.turns.unshift({
                          isPlayer: true,
                          textLong: "Player đá Boss: " + damage,
                      });
                      this.boss();
                      this.message = 'Đá';
                  },
                   hoimau: function(){
                       if(this.playerheal > 70){
                           return false;
                       }
                       else if (this.playerheal <=60){
                           this.playerheal += 10;
                           this.message = 'Hồi máu thành công';
                       }
                       else { this.message = 'Hồi máu thành công';
                           return this.playerheal =70;
                           
                       }
                  },
                   dauhang: function(){
                          this.gamestart =false;
                          this.turns= []
                          alert(' you lost')
                  },
                  inputDamage: function(Mindamage, Maxdamage){
                      return Math.max(Math.floor(Math.random() * Maxdamage) +1 , Mindamage);
                  },
                  boss: function(){
                      var damage = this.inputDamage(7,15);
                       this.playerheal -= damage;
                         this.turns.unshift({
                          isPlayer: false,
                          textLong: "Boss cắn: " + damage,
                      })
          
                      this.check();
                  },
                  check: function()
                  {
                          if(this.bossheal <0){
                              if(confirm("you win! new game?"))
                              {
                                  this.start();
                                  this.turns= []
                              }
                              else{
                                  this.gamestart =false;
                                  this.turns= []
                              }
                           }
                           else if(this.playerheal <0)
                           {
                                if(confirm("you lost! new game?"))
                              {
                                  this.start();
                                  this.turns= []
                              }
                              else{
                                  this.gamestart =false;
                                  this.turns= []
                              }
                           }
                           if(this.bossheal <15){
                               return this.bossheal = 30;
                           }
                  }
              }
          })
          
