<template>
<div>
  <Loading v-if="isLoading" />
  <b-row v-if="!isLoading">
    <b-col md="12" offset-md="2" class="pt-5">
      <h2 class="subTitulo d-none d-lg-block pb-3 pr-5">An archive from twitch chat logs.</h2>
       <p class="subTitulosm d-sm-block d-md-none">An archive from twitch chat logs.</p>
      <b-form :class="[{animated:isError},{shake: isError}]"> 
      <b-col md="6" offset-md="1">
          <b-form-group
        id="input-group-2"
        :label="descricao"
        label-for="input-2"
      >
        <div class="bordaForm p-3 mb-2">
          <b-form-input
            id="input-2"
            v-model="form.userName"
            type="text"
            required
            placeholder="Username"
            class="my-3"
          ></b-form-input>
          <b-form-input
            id="input-1"
            v-model="form.message"
            type="text"
            placeholder="Message"
            class="my-3"
          ></b-form-input>
           <b-form-select @change="chooseChannel" class="mb-3" v-model="selected"  :options="options"></b-form-select>
          <label for="input-time">Pick a timestamp</label>
          <b-form-input
            id="input-time"
            v-model="form.hour"
            type="time"
            placeholder="Time"
            step="1"
           
          ></b-form-input>
      
          <b-row class="d-flex justify-content-between">
            <b-col md="6"   class="mb-3">
              <label class="labelDate">Start Date</label>
              <b-form-input placeholder="teste" size='sm' style="width:100% !important" type="date" v-model="form.dateFrom"></b-form-input>
                </b-col>
                <b-col md="6"   class="mb-3">
                  <label class="labelDate">End Date</label>
                  <b-form-input placeholder="teste" size='sm' style="width:100% !important"  type="date" v-model="form.dateEnd"></b-form-input>
                </b-col>
              </b-row>
        </div>
         <b-button :disabled="isSelected"  block @click="onSubmitSubtitle" type="submit" variant="primary" class="resetButton">{{buttonText}}</b-button>
      </b-form-group>
      </b-col>
    </b-form>
    </b-col>
  </b-row>
</div>
  
</template>

<script>
  import axios from 'axios' 
  import Loading from './Loader'
  import moment from 'moment'
  export default {
    components:{
      Loading
    },
    data() {
      return {
        form: {
          userName: '',
          message: '',
          info: '',
          hour: '',
          dateFrom:'',
          dateEnd:''
        },
         selected: '',
         options:[
          { value: '', text: 'Please select a channel:' },
          { value: 'DSP', text: 'Darksydephil' },
           { value: 'Projared', text: 'Projared' }
        ],
        show: true,
        isError: false,
        descricao:'',
        isLoading: false,
        fullPage: true,
        isSelected: true,
        buttonText: "Choose a channel first",
        page: 1,
        limit: 51
      }
    },
    components: {
            Loading
        },
    methods: {
      chooseChannel(){
        if(this.selected === ''){
          this.isSelected = true
          this.buttonText = "Choose a channel first"
        }else{
          this.isSelected = false
          this.buttonText = "Search"
        }
      },
      onSubmitSubtitle(evt){
        evt.preventDefault()
          let checkDate = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment(`${this.form.dateEnd}`, "YYYYMMDD"),'days')
          let checkDateTodayFrom = moment(`${this.form.dateFrom}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
          let checkDateTodayEnd = moment(`${this.form.dateEnd}`, "YYYYMMDD").diff(moment().format("YYYY-MM-DD"),'days')
          if(checkDate >= 0){
            this.form.dateEnd = this.form.dateFrom
          };
          if(checkDateTodayFrom >= 0){
            this.form.dateFrom = moment().format("YYYY-MM-DD")
          };
          if(checkDateTodayEnd >= 0){
            this.form.dateEnd = moment().format("YYYY-MM-DD")
          }
         this.isLoading = true
        axios.post(`${this.selected}`,{
          userName: this.form.userName,
          message:this.form.message,
          hour:this.form.hour,
          dateFrom: this.form.dateFrom,
          dateEnd: this.form.dateEnd
        },{params:{
          page: this.page,
          limit: this.limit
        }})
        .then((data)=>{
           this.info = data.data.data
           this.$emit('info-video',this.info,this.page,this.limit,this.form.userName,this.form.message,this.form.hour,this.form.dateFrom,this.form.dateEnd,data.data.totalPages,data.data.totalResults,this.selected)
           this.isLoading = false
           
        })
        .catch((erro)=>{
        this.descricao = erro.response.data.msg;
        this.isError = true;
         this.isLoading = false
        setTimeout(()=>{
          this.descricao = '';
          this.isError = false
        },3000)
        })
      }
    }
  }
</script>
