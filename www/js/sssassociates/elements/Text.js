const Text = {
    template:`
	<div v-if="this.text!=null" :style="{backgroundColor:this.text.color}">
		<div :class="{'cont':this.text.container=='true' && this.type!='article','container':this.type=='article'}" v-html="this.text.vhtml"></div>
		<br/>
		<div class="container article_grid" v-if="this.type=='article' && this.articles.length!=0 && !this.request">
			<article v-for="(a,i) in this.articles" class="col s12 article_card card z-depth-0">
				<router-link id="router" class="" :to="'/'+articles[i].slug">
					<div class="bg_img" :style="{backgroundImage: 'url('+articles[i].image+')'}">
					</div>
					<div class="article_title">
						<h4>{{articles[i].title}}</h4>
						<small class="grey-text">{{articles[i].created}}</small>
					</div>
				</router-link>
			</article>
		</div>
		<div class="container" v-if="this.request || this.next">
		<center>
			<div v-if="this.request" class="loader"></div>
			<a v-else-if="this.next" class="btn-flat waves-effect blue white-text" href="#" @click.prevent="getArticles()">Load More</a>
		</center>
	  </div>
	</div>
	`,
    props:['api','data'],
    components:{
    },
    mounted(){
        //this.text=JSON.parse(this.data.content)
       /* console.log(this.$root.css.darkMode)
      this.$root.css.darkMode=false*/
      setTimeout(()=>{
          if(this.type=='article'){
              this.getArticles()
          }
      },100)
    },
    methods:{
        getArticles(){
            $.ajax({
               beforeSend:()=>{
                   this.request=true
               },
               complete:()=>{
                   this.request=false
               },
               url:this.api+'articles/?page='+this.page,
               dataType:'json',
               cache:false,
               error:(e)=>{
                   M.toast({html:'Unable to fetch articles'})
               },
               success:(r)=>{
                   if(r.fetched){
                       //this.articles.push(r.response)
                       
                       r.response.forEach((a,i)=>{
                           var al = this.articles.length
                           this.articles[al]=a
                       })
                       this.page=this.page+1
                       var l = r.response.length
                       if(l<parseInt(r.limit)){
                           this.next=false
                       }
                       else
                       {
                           this.next=true
                       }
                       
                   }
               }
            })
        }
    },
    data(){
        return{
            page:1,
            text:JSON.parse(this.data.content),
            type:this.data.type,
            articles:[],
            request:false,
            next:false
        }
    }
}

export {Text}