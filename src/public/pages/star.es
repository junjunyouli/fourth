import {Star} from './index.es';
const star = new Star();

xtag.register('x-star', {
                          content: '<div id="star" >'+
                                            '<div class="star">'+
                                                '<div class="five">'+
                                                '</div>'+
                                            '</div>'+
                                            '<div id="add" class="hide" ><span >+1</span></div>'+
                                          '</div>',
                          methods: {
                            parise: function(){
                                let _this= this;
                                star.addThumb();
                                let add = _this.querySelector("#add");
                                add.className = "show";
                                setTimeout(function() {
                                            add.className = "hide"
                                        }, 800)
                            }
                          },
                          events: {
                            click: function(e){
                              let _this = this;
                                  if (e.path[2].id == "star") {
                                      let t = "";
                                      if (t) {
                                          clearTimeout(t);
                                      }
                                      t = setTimeout(() => {
                                          _this.parise();
                                      }, 500);
                                  }
                            }
                          }
});