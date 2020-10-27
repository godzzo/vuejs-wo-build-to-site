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

/**
 * Location: https://sssassociates.org/investment-tax-plan
 * AJAX: https://sssassociates.org/api/v1/front/pages/?slug=investment-tax-plan&_=1603525748413
 * JSON: {"sr":"investment-tax-plan","so":"investment-tax-plan","response":{"id":"5e8292522cf31","sl":"5","showNav":"1","type":"sub","subType":"","slug":"investment-tax-plan","ppid":"5e6f465ee5b46","image":"\/uploads\/1585615687.jpg","title":"Investment & Tax Plan","description":"We assist in Managing your money and plan your financial security and Investments. We deal with Life & General Insurance, Mutual Funds and Fixed Deposits. We help in processing the loans like (Home, Mortgage & Business loans, Term loan & Project loan, Loan Against Property, Preparation of project report, Loan arrangement- Cash credit limit \/ Due diligence for finance\/ Legal) keeping in mind the financial needs of the customers.","robots":"index, follow","keywords":"investments,loan,deduction,fund,investment,insurance,tax,savings,loans,repayment","created":"31 March 2020 06:14:02","updated":"31 March 2020 06:19:11","elements":[{"id":"5e8293b6eb8ea","pid":"5e8292522cf31","sl":"1","type":"text","name":"Text \/ Html","content":"{\"vhtml\":\"<div class=\\\"article_grid\\\"><p align=\\\"center\\\"><img src=\\\"\\\/uploads\\\/1585615822.jpg\\\" style=\\\"width: 70%;\\\"><\\\/p>\\n\\n<div><h4 class=\\\"center\\\">Investment Advisory services<\\\/h4><p>We assist in Managing your money and plan your financial security and Investments. We deal with Life &amp; General Insurance, Mutual Funds and Fixed Deposits. We help in processing the loans like (Home, Mortgage &amp; Business loans, Term loan &amp; Project loan, Loan Against Property, Preparation of project report, Loan arrangement- Cash credit limit \\\/ Due diligence for finance\\\/ Legal) keeping in mind the financial needs of the customers.<\\\/p><\\\/div><\\\/div>\",\"container\":\"true\",\"color\":\"white\"}","updated":"11 May 2020 16:39:03","created":"01 January 1970 05:30:00"},{"id":"5e874f1d522a1","pid":"5e8292522cf31","sl":"2","type":"text","name":"Text \/ Html","content":"{\"vhtml\":\"<h4>80C - Tax Saving Options<\\\/h4>\\n<h4 align=\\\"center\\\"><img style=\\\"width: 50%;\\\" src=\\\"https:\\\/\\\/sssassociates.org\\\/uploads\\\/1585663758.png\\\"><\\\/h4>\\n\\n<div><p><b>Mutual Fund Equity Linked Savings Scheme (MF ELSS ):&nbsp;<\\\/b>This has lowest lock-in period of 3 years. In case of a monthly SIP, each installment has a 3-year lock-in. <\\\/p><p><b>Unit Linked Insurance Plans (ULIPs):<\\\/b>\\n ULIPs are market linked investments offered by insurance companies; \\nlock-in period of 5 years and gains post lock-in are tax free. <\\\/p><p><b>National Pension System (NPS):<\\\/b>\\n Investments of up to Rs.1.5 lac can be claimed for tax deduction in a \\nfinancial year. Besides, an additional deduction of up to Rs.50,000 can \\nbe claimed under Section 80CCD(1 B). <br><\\\/p><p><b>Employee Provident Fund:<\\\/b>\\n This is your contribution towards provident fund that gets deducted \\nfrom your salary. Contributions towards Voluntary Provident Fund can \\nalso be considered for deduction.<\\\/p><p><b>Public Provident Fund:<\\\/b>This\\n investment has one of the longest tenures of 15 years with further \\nextension of 5 years allowed each time. The interest rates are linked to\\n that of government securities. <\\\/p><p><b>National Savings Certificate (NSC):<\\\/b> Investments in NSC can be claimed as deduction. <br><\\\/p><p><b>Bank Fixed Deposits:<\\\/b>\\n Fixed deposits of5 years with a scheduled bank are eligible for \\ndeduction. Senior Citizen Savings Scheme (SCSS ): Investments in SCSS \\ncan also be claimed as deduction. <br><\\\/p><p><b>Life Insurance Premium:&nbsp;<\\\/b>You can claim this deduction when you pay the life insurance premium for yourself, your spouse or your children. <br><\\\/p><p><b>Tuition Fees:<\\\/b> If you have paid tuition fees towards full-time education of your children, you can claim deduction for up to two children. <br><\\\/p><p><b>Home loan principal repayment:<\\\/b> Repayment of principal amount towards a housing loan can be considered.&nbsp;<\\\/p>\\n\\n\\n<div style=\\\"text-align: center; \\\"><img src=\\\"https:\\\/\\\/sssassociates.org\\\/uploads\\\/1585616219.png\\\" style=\\\"width: 50%;\\\"><\\\/div><\\\/div>\",\"container\":\"true\",\"color\":\"#f8f8f8\"}","updated":"03 April 2020 20:43:48","created":"01 January 1970 05:30:00"},{"id":"5e8752be39d1e","pid":"5e8292522cf31","sl":"3","type":"text","name":"Text \/ Html","content":"{\"vhtml\":\"<br><h4>FINANCIAL\\\/LOAN &amp; PROPERTY<\\\/h4>\\n<div class=\\\"article_grid\\\">\\n<p align=\\\"center\\\"><img style=\\\"width: 70%;\\\" alt=\\\"Real Estate\\\" src=\\\"\\\/uploads\\\/1585926961.jpg\\\"><\\\/p>\\n\\n<ol><li>Property Consultancy Real estate Consultants and would be honored to be your personal property advisory for buying, Selling &amp; leasing of Flats, Shops, Offices, &amp; Plots.<\\\/li><li><p>We arranges and processes loans keeping in mind the financial needs of the customers, Like Home loans, Loan Against Property Mortgage Loans, Business Loans, Personal Loans, O.D.\\\/C.C., L.R.D. etc.<\\\/p><\\\/li><\\\/ol>\\n<\\\/div>\",\"container\":\"true\",\"color\":\"white\"}","updated":"03 April 2020 20:52:21","created":"01 January 1970 05:30:00"}]},"fetched":true,"status":200}
 * 
 * router.beforeEach((to, from, next) => { gtag('config', 'UA-161949132-1', {'page_path': to.path});
 */

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