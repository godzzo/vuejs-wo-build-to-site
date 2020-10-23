const ShareTemp = 
`<div id="share" class="modal">
    <div class="modal-content">
      <h4>Share this Page</h4>
      <div class="container center-align">
        <a href="#facebook" id="share_fb" class="btn-flat blue white-text waves-effect" @click.prevent="share('facebook')">
          <i class="fa fa-facebook"></i>&nbsp &nbsp Facebook
        </a>
        <a href="#twitter" id="share_fb" class="btn-flat blue lighten-2 white-text waves-effect" @click.prevent="share('twitter')">
          <i class="fa fa-twitter"></i>&nbsp &nbsp Twitter
        </a>
        <a href="#pinterest" id="share_fb" class="btn-flat red darken-3 white-text waves-effect" @click.prevent="share('pinterest')">
          <i class="fa fa-pinterest"></i>&nbsp &nbsp Pinterest
        </a>
        <a href="#whatsapp" id="share_fb" class="btn-flat green lighten-1 white-text waves-effect" @click.prevent="share('whatsapp')">
          <i class="fa fa-whatsapp"></i>&nbsp &nbsp WhatsApp
        </a>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#close" class="modal-close waves-effect waves-red btn-flat">Close</a>
    </div>
  </div>`

const Share = {
    template:ShareTemp,
    mounted(){
        $('#share').modal({
        });
    },
    methods:{
        share(s){
            if(s=='facebook'){
                window.open('https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u='+window.location+'&display=popup&ref=plugin&src=share_button','_blank')
            }
            else
            if(s=='twitter'){
                window.open('https://twitter.com/intent/tweet/?url='+window.location,'_blank')
            }
            else
            if(s=='pinterest'){
                
                window.open('http://pinterest.com/pin/create/button/?url='+window.location,'_blank')
            }
            if(s=='whatsapp'){
                
                window.open('http://wa.me/?text='+window.location,'_blank')
            }
        }
    },
    data(){
        return{
            url:window.location
        }
    }
}

export{
    Share
}