import {Thumb} from './index.es';
const thumb = new Thumb();

xtag.register('x-praise', {
                          content: '<div id="hands" >'+
                                           ' <div class="pd ">'+
                                              '<span class="hs1"></span>'+
                                              '<span class="hs2"></span>'+
                                              '<span class="hs3"></span>'+
                                             ' <span class="hs4"></span>'+
                                              '<span class="hs5"></span>'+
                                              '<span class="hs6"></span>'+
                                            '</div>'+
                                            '<div id="add" class="hide" ><span >+1</span></div>'+
                                          '</div>',
                          methods: {
                            parise: function(){
                                let _this= this;
                                thumb.addThumb();
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
                                  if (e.path[2].id == "hands") {
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