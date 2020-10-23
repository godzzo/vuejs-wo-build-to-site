const TopTemp = `
<header><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <div class="navbar">
    <nav class="white">
    <div class="progress white" style="margin:0px;height:2px;">
      <div class="indeterminate" :class="{'blue':this.$root.wrequest,'white':!this.$root.wrequest}"></div>
    </div>
      <div class="nav-wrapper">
        <router-link id="router" to="/" class="brand-logo">
          <img src="/uploads/1584902365.png" alt="SSS & Associates" />
        </router-link>
        <ul class="right">
          <li v-for="(m,i) in this.menu" class="hide-on-med-and-down" :class="{'tdropl':m.type=='group'}">
            <router-link id="router" v-if="m.type=='ind' && m.slug=='/home'" class="blue-text uppercase" to="/">Home</router-link>
            <router-link id="router" v-else-if="m.type=='ind' && m.slug!='/home'" class="blue-text uppercase" :to="{path:m.slug}">{{m.title}}</router-link>
            <a v-else :data-target='m.subname' class="blue-text dropdown-trigger tdrop uppercase" @click.prevent :href="m.slug">{{m.title}}<i class="material-icons right tdropico" v-if="m.type=='group' && m.submenu.length!=0"></i></a>
          </li>
          <li class="hide-on-large-only mnavtrig"><a class="blue-text modal-trigger" href="#nav" data-target="topmodal"><i class="material-icons fh">sort</i></a></li>
        </ul>
        <ul v-for="m in this.menu" v-if="m.type=='group'?true:false" :id="m.subname" class='dropdown-content'>
          <li v-for="sm in m.submenu">
            <router-link id="router" :to="sm.slug" class="blue-text uppercase">{{sm.title}}</router-link>
            <div class="divider" tabindex="-1"></div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!--mobile nav>-->
  <div id="topmodal" class="modal white bottom-sheet">
    <div class="modal-content white" style="padding:0px !important;">
      
          <ul class="collapsible topcollapse collapsible-accordion z-depth-0" style="margin:0px;">
            <li v-for="(m,i) in this.menu">
            <router-link id="router" v-if="m.type!='group' && m.slug=='/home'" @click.native="close(m.type)" class="collapsible-header uppercase blue-text pointer" to="/">Home</router-link>
            <router-link id="router" v-else-if="m.type!='group' && m.slug!='/home'" @click.native="close(m.type)" class="collapsible-header uppercase blue-text pointer" :to="{path:m.slug}">{{m.title}}</router-link>
            <a v-else class="collapsible-header blue-text pointer uppercase" :href="'#'+m.slug">{{m.title}} 
              <i class="material-icons tcoli" v-if="m.type=='group' && m.submenu.length!=0"></i>
            </a>
            
            <div class="collapsible-body tcollapsible-body" v-if="m.type=='group' && m.submenu.length!=0">
              <ul>
                <li v-for="sm in m.submenu" style="" class="pointer">
                  <router-link id="router" class="licollapse blue-text uppercase" :to="sm.slug" @click.native="close()">{{sm.title}}</router-link>
                  <div class="divider" tabindex="-1"></div>
                </li>
              </ul>
            </div>
            </li>
          </ul>
          
          <div style="width:100%;position:relative;" class="hide-on-med-and-up">
            <div class="card waves-effect blue lighten-1 z-depth-0" style="width:50%;float:left;position:relative;">
              <a href="tel:+918247472219" class="white-text"  alt="+91 82 47 47 2219" title="+91 82 47 47 2219">
               <div class="card-content">
                <p class="white-text center-align" style="width:100%;">
                  <i class="fa fa-phone" style="font-size:35px;"></i><br/>
                  <small>+91 82 47 47 2219</small>
                </p>
               </div>
              </a>
            </div>
            <div class="card waves-effect blue lighten-1 z-depth-0" style="width:50%;float:left;position:relative;">
              <a href="mailto:ssscaassociates@gmail.com" class="white-text" alt="ssscaassociates@gmail.com" title="ssscaassociates@gmail.com">
               <div class="card-content">
                <p class="white-text center-align" style="text-overflow: ellipsis;">
                  <i class="fa fa-envelope" style="font-size:35px;"></i><br/>
                  <small>ssscaassociates@gmail.com</small>
                </p>
               </div>
              </a>
            </div>
            <div class="col s12 white center-align">
              <ul style="display:inline-block;margin:0px;" class="center-align">
                <li style="display:inline-block;margin:0px"><p class="black-text">Have any queries <i class="fa fa-question-circle"></i></p></li>&nbsp&nbsp
                <li style="display:inline-block;margin:0px"><router-link id="router" @click.native="close('')" to="contact-us" class="white-text blue btn-flat waves-effect">Contact Us</router-link></li>
              </ul>
            </div>
          </div>
          
          <div class="container white hide-on-med-and-up" style="padding-top:5px;padding-bottom:5px;">
           <p class="center black-text text-lighten-3">Copyright ÂŠ 2017-{{this.year}} SSS & Associates.</p>
           <p class="center black-text text-lighten-3">
            <router-link id="router" to="/terms" class="blue-text" @click.native="close('')">
             Terms & Conditions
            </router-link> | 
            <router-link id="router" to="/privacy" class="blue-text" @click.native="close('')">
             Privacy Policy
            </router-link>
           </p>
          </div>
    </div>
    <div style="height:62px;">
    </div>
  </div>
</header>
`


const Top = {
    template:TopTemp,
    props:['api','data'],
    data(){
      return{
        menu:this.data,
        year:2020
      }
    },
    mounted(){
      $(".tdrop").dropdown({
        hover:true,
        autoTrigger:true,
        alignment:'left',
        coverTrigger:false,
        constrainWidth:false
      });

      $('#topmodal').modal();

      $('.topcollapse').collapsible();

      /*console.log(this.$root.css.darkMode)
      this.$root.css.darkMode=false
      console.log(this.mode)*/
      
      var d = new Date();
      var n = d.getFullYear();
      this.year = n
    },

    methods:{
      close(type){
        var elem = $('#topmodal')
        var ci = M.Modal.getInstance(elem);
        if(type!='group'){
            ci.close()
        }
        
        //console.log('close')
      }
    }
}

export {Top}