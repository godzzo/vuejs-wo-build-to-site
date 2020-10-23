import Vue from './vue.js'

import {Top} from './components/Top.js'
import {Bottom} from './components/Bottom.js'
import {Pages} from './components/Pages.js'

Vue.use(VueRouter);

const MainTemplate = 
`
<section>
<div v-if="this.request==false">
<div class="hc black" style="width:100%;">
  <div class="cont">
    <div class="row" style="margin:0px;">
      <div class="col s12 m6">
        <ul style="display:inline-block;margin:0px;">
          <li style="display:inline-block;margin:0px"><p class="white-text" style="font-size:15px;"><i class="fa fa-phone"></i>&nbsp<a href="tel:+918247472219" title="+91 82 47 47 2219" alt="+91 82 47 47 2219" class="white-text"> +91 82 47 47 2219 </a></p></li>&nbsp&nbsp
          <li class="hide-on-med-and-down" style="display:inline-block;margin:0px"><p class="white-text" style="font-size:15px;"><i class="fa fa-envelope"></i>&nbsp<a alt="ssscaassociates@gmail.com" title="ssscaassociates@gmail.com" href="mailto:ssscaassociates@gmail.com" class="white-text"> ssscaassociates@gmail.com </a></p></li>
        </ul>
      </div>
      <div class="col s12 m6 right-align">
        <ul style="display:inline-block;margin:0px;">
          <li style="display:inline-block;margin:0px"><p class="white-text" style="font-size:15px;">Have any queries <i class="fa fa-question-circle"></i></p></li>&nbsp&nbsp
          <li style="display:inline-block;margin:0px"><router-link id="router" to="contact-us" class="white-text blue btn-flat waves-effect" style="font-size:12px;">Contact Us</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  
</div>
  <top :api="this.api" :data="this.menu"></top>
  <keep-alive>
   <router-view :key="$route.path" :api="this.api"></router-view>
  </keep-alive>
  <div class="bpatch white"></div>
  <div class="bottom" style="height:62px;"><bottom :api="this.api"></bottom></div>
  
</div>
<div v-else>
<div class="valign-wrapper" style="width:100%;height:100%;position:absolute;top:0px;right:0px;bottom:0px;left:0px;">
<div style="margin:auto;">
<h3 class="center-align">SSS & CO.</h3>
 <div class="progress">
      <div class="indeterminate blue"></div>
  </div>
  <h3 class="center-align">ASSOCIATES</h3>
</div>
</div>
</div>
</section>
`

const router = new VueRouter({
  mode: 'history',
  routes: [
  {
    path: '*',
    component: Pages,
    name:'Page',
    reuse:true,
    meta:{title:'SSS & Associates'}
  },
  /*{
    path: '*',
    component: Default,
    name:'default',
    meta:{title:'404 - Not Found'}
  }*/]
})

router.beforeEach((to, from, next) => {
    //document.title = to.meta.title
    next()
    $("html, body").animate({ scrollTop: 0 });
    
    /*Analytics*/
    gtag('config', 'UA-161949132-1', {'page_path': to.path});
    //ga('set', 'page', to.path);


    //console.log(to.path)

    
});

$( "body" ).delegate( "a", "click", function(e) {
              e.preventDefault();
             //console.log(e)
             if(e.currentTarget.host==='sssassociates.org' || e.currentTarget.host==='www.sssassociates.org'){
                
                
             var path = e.currentTarget.href.replace('https://','')
             path = path.replace('http://','')
             path = path.replace('sssassociates.org','')
             //console.log
             if(e.currentTarget.hash===''){
                 if(!e.currentTarget.id.includes('router')){
                     router.push(path)
                 }
             }
                
               
             }
             else{
                 if(e.currentTarget.target===''){
                     e.currentTarget.target='_self'
                 }
                window.open(e.currentTarget.href,e.currentTarget.target);
             }
         });

var vm = new Vue({
    el: '#root',
    components: {
      'top':Top,
      'bottom':Bottom
    },
    router:router,
    template: MainTemplate,
    /*store:store,*/
    data () {
        return {
            wrequest:false,
            ssr:true,
            pssr:true,
          request:true,
          api:'/api/v1/front/',
          menu:[],
          menuEx:[{
            title:'What\'s New ?',
            slug:'/what-snew',
            type:'ind',
            order:2
          },
          {
            title:'More',
            slug:'/more',
            subname:'ne',
            type:'group',
            order:3,
            submenu:[
              {
                title:'Terms & Conditions',
                slug:'/terms'
              },
              {
                title:'Privacy Policy',
                slug:'/privacy'
              }
            ]
          }]
        }
    },
    beforeMount(){
      //console.log('he')  
    },
    mounted(){
        
        if(page.menu!==undefined){
             
             if(page.menu.length!==0){
                 page.menu.reverse().forEach(element => {
                 this.menu.unshift(element)
               });
               this.request=false
               this.ssr=false
             }
             else
             {
                 this.ssr=false
                 this.getMenu()
             }
         }
         else
         {
             this.ssr=false
             this.getMenu()
         }
         
         $('#ppload').slideUp();
         ppload=false;
    },
    watch: {
      
    },
    methods:{
      getMenu(){
        this.request=true
        if(this.ssr===false){
            $.ajax({
          url:this.api+'menu/',
          method:'POST',
          cache:false,
          dataType:'json',
          success:(r)=>{
            r.response.reverse().forEach(element => {
              this.menu.unshift(element)
            });
            this.request=false
          }
         })
        }
      }
    }
})