const DefaultTemp = `
<center>
  <div class="container col s12 center-align">
    <h3>Something Went Wrong</h3>
    <h5>Looks like our server didn't found any entries! <br/> Please use our navigation menu to find entries.</h5>
    <router-link id="router" class="btn-flat btn-large blue white-text waves-effect" to="/">Go to Homepage</router-link>
  </div>
</center>
`


const Default = {
    template:DefaultTemp,
    components:{
    },
    data(){
      return{
      }
    },
    mounted(){
    }
}

export {Default}