import {Text} from '../elements/Text.js'
import {Grid} from './elements/Grid.js'
import {Horiz} from './elements/Horiz.js'
import {Slider} from './elements/Slider.js'
import {Collapse} from './elements/Collapse.js'
import {aGrid} from './elements/aGrid.js'
import {Tabs} from './elements/Tabs.js'
import {ElForm} from './elements/Form.js'
import {Default} from './Default.js'
import {SubPage} from './subPage.js'
const PagesTemp = `
<section>
    <div v-if="this.request">
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
    <div v-else>
      <div v-if="!this.fetch">
        <center>
          <default>
          </default>
        </center>
      </div>
      <div v-else>
        <div v-if="this.$route.path!='/' && this.$route.path!='/home'" id="pslider" >
          <div id="bg" style="height: 400px; width:100%;background-size:cover;background-repeat:no-repeat;background-position:center;" :style="{backgroundImage:'url('+this.page.image+')'}">
                
                <div class="screen valign-wrapper">
                <div class="caption hsc center-align" style="width:100%;">
                    <h1 class="white-text">{{this['page']['title']}}</h1>
                </div>
                </div>
          </div>
        </div>
        <!--page elements start--->
        <section v-for="(e,i) in this.page.elements" :key="e.id+e.sl">
          <grid v-if="e.type=='grid'?true:false" :api="api" :data="e"></grid>
          <texte id="page" v-else-if="e.type=='text'?true:false" :api="api" :data="e"></texte>
          <texte id="page" v-else-if="e.type=='article'?true:false" :api="api" :data="e"></texte>
          <horiz v-else-if="e.type=='horizgrid'?true:false" :api="api" :data="e"></horiz>
          <slider id="page" v-else-if="e.type=='slider'?true:false" :api="api" :data="e"></slider>
          <collapse id="page" v-else-if="e.type=='collapse'?true:false" :api="api" :data="e"></collapse>
          <agrid v-else-if="e.type=='agrid'?true:false" :api="api" :data="e"></agrid>
          <tabs id="page" v-else-if="e.type=='tabs'?true:false" :api="api" :data="e"></tabs>
          <elform id="page" v-else-if="e.type=='form'?true:false" :api="api" :data="e"></elform>
          <div class="row" v-else>
            <center><h5 class="grey-text">Err_Unknown_Element</h5></center>
          </div>
          
        </section>
        <subpage v-if="this.page.type=='group'?true:false" :api="api" :data="this.page"></subpage>
        <!---page elements end--->
      </div>
    </div>
</section>
`



const Pages = {
    template:PagesTemp,
    props:['api'],
    components:{
        'grid':Grid,
        'texte':Text,
        'collapse':Collapse,
        'slider':Slider,
        'horiz':Horiz,
        'agrid':aGrid,
        'tabs':Tabs,
        'elform':ElForm,
        'default':Default,
        'subpage':SubPage
    },
    data(){
      return{
          ap:this.api,
          pssr:true,
          fetch:false,
          slug:this.$route.params.pathMatch,
          request:true,
          page:{}
      }
    },
    mounted(){
        //console.log(this.$root.pssr)
        //console.log(page.page)
        if(this.$route.path!='/'){
            this.slid()
        }
        if(page.page!==undefined && this.$root.pssr===true){
            
            const p = page.page
            this.fetch=p.fetched
            if(p.fetched){
                this.page=p.response
                this.slid()
                
            }
            else
            {
                this.page.elements=[]
            }
            this.$root.pssr=false
            this.request=false
            this.$root.wrequest=false
            page.page=undefined
        }
        else
        {
            this.$root.pssr=false
            this.request=false
            
            this.getPage()
            //console.log('ex')
        }
        
    },
    methods:{
        slid(){
            /*setTimeout(()=>{
                $('#pslider').slider({
                'indicators':false,
                height:250,
                duration:500,
                interval:6000
            })
            },200)*/
        },
        getPage(){
            if(this.$route.path=='/'){
                this.slug='home'
            }
            else{
                this.slug=this.$route.params.pathMatch.split('/')[1]
            }
            if(this.$root.pssr==false){
                $.ajax({
                beforeSend:()=>{
                    this.request=true
                    this.$root.wrequest=true
                },
                complete:()=>{
                    this.request=false
                    this.$root.wrequest=false
                },
                cache:false,
                dataType:'json',
                url:this.api+'pages/?slug='+this.slug,
                success:(res)=>{
                    this.fetch=res.fetched
                    if(res.fetched){
                        this.page=res.response
                        this.slid()
                        if(this.slug=='home'){
                            document.title = 'SSS & CO. Associates | Online Tax & Legal Services'
                        }
                        else
                        {
                            document.title=res.response.title+' - SSS & CO. Associates'
                        }
                    }
                    else
                    {
                        this.page.elements=[]
                    }           

                }
            })
            }
        }
    }
}

export {Pages}