<template>
  <div class="container">
      <b-col>
        <FormSearch class="animated fadeIn" @info-video="passData" v-if="ifNoData"/>
      </b-col>
      <b-col class="pt-2">
        <TableContent v-if="ifData" :info2.sync="info" :page="page" :limit="limit" :formUserName="formUserName" :formMessage="formMessage" :formHour="formHour" :dateFrom="dateFrom" :dateEnd="dateEnd" :totalPages2="totalPages" :totalResults="totalResults" :subject="subject" />
      </b-col>
    
  </div>
</template>

<script>
// @ is an alias to /src
import FormSearch from '@/components/FormSearch.vue'
import TableContent from '@/components/TableContent.vue'

export default {
  name: 'home',
  components: {
   FormSearch,
   TableContent
  },
  data(){
    return{
      ifData: false,
      ifNoData: true,
      info: null,
      page: null,
      limit: null,
      formUserName: null,
      formMessage: null,
      formHour: null,
      dateFrom: null,
      dateEnd: null,
      totalPages: null,
      totalResults: null,
      subject: null
    }
  },
  methods:{
    passData(...data){
      this.info = data[0];
      this.page = data[1];
      this.limit = data[2];
      this.formUserName = data[3];
      this.formMessage = data[4];
      this.formHour = data[5],
      this.dateFrom = data[6];
      this.dateEnd = data[7];
      this.totalPages = data[8],
      this.totalResults = data[9]
      this.ifNoData = false;
      this.subject = data[10],
      this.ifData = true;
    }
  }
}
</script>
