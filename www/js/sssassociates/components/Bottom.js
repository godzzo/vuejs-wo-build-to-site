import {Share} from './Share.js'
const BottomTemp = `
<footer>
<div class="container hide-on-small-only" style="padding-top:5px;padding-bottom:5px;">
  <p class="left white-text text-lighten-3">Copyright ÂŠ 2017-{{this.year}} SSS & Associates.</p>
  <p class="right white-text text-lighten-3">
    <router-link id="router" to="/terms" class="white-text">
      Terms & Conditions
    </router-link> | 
    <router-link id="router" to="/privacy" class="white-text">
      Privacy Policy
    </router-link>
  </p>
</div>
<div class="threegrid white valign-wrapper hide-on-med-and-up">
  <router-link id="router" @click.native="close()" alt="Home" title="Home" class="btn-flat waves-effect white black-text center modal-close" style="margin:auto; width:100%;" to="/">
    <i class="fa fa-home" style="font-size:35px;"></i>
  </router-link>
  <a class="btn-flat waves-effect white black-text center modal-trigger" alt="Menu" title="Menu" data-target="topmodal" style="margin:auto; width:100%;" href="#mnav">
    <i class="fa fa-chevron-up" style="font-size:35px;"></i>
  </a>
  <a @click="close()" alt="Share" title="Share" class="btn-flat waves-effect white black-text center modal-trigger"  data-target="share" style="margin:auto; width:100%;" href="#share" >
    <i class="fa fa-share-alt" style="font-size:35px;"></i>
  </a>
</div>

<div class="fixed-action-btn modal-trigger hide-on-small-only" data-target="share">
  <a class="btn-floating btn-large blue">
    <i class="large material-icons">share</i>
  </a>
</div>
      
<share></share>
</footer>
`

const Bottom = {
    props:['api'],
    template:BottomTemp,
    components:{
        'share':Share
    },
    data(){
      return{
        year:2020
      }
    },
    mounted(){
      var d = new Date();
      var n = d.getFullYear();
      this.year = n
    },
    methods:{
         close(){
             $('#topmodal').modal('close')
         }
    }
}

export {Bottom}