<template>
  <div class="about animated fadeIn main">
    <b-row>
      <b-col md="12" class="top-padding">
        <br class="py-2 d-sm-block d-md-none" />
        <div class="bordaForm">
          <h2 class="text-center aboutHeader pb-1">ABOUT</h2>
          <div class="paddingBottomDiv d-none d-lg-block">
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />Archive Chat Logs is a search engine for the log files from
              twitch and youtube channels.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />You can search by username, message and/or date.
            </p>
          </div>
          <div class="paddingBottomDivsm d-sm-block d-md-none">
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />Archive Chat Logs is a search engine for the log files from
              twitch and youtube channels.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />You can search by username, message and/or date.
            </p>
          </div>
        </div>
        <br />
        <div class="bordaForm">
          <h2 class="text-center aboutHeader pb-1">HOW IT WORKS</h2>
          <div class="paddingBottomDiv d-none d-lg-block">
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The search is capped by 10k results, you can narrow it down
              using a date range.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The <b>username field</b> has three types of search:
            </p>
            <p>
              <b>Match:</b>The regular search,will look for results that contain
              the whole word.
            </p>
            <p>
              <b>Example:</b> The results for "Dspgamming": Dspgamming,
              Dspgammingisafaggot, JimcuckedDspgamming.
            </p>
            <p>
              <b>Prefix:</b> Will look for results that contains a term that
              begins with the word.
            </p>
            <p>
              <b>Example:</b> The results for "onlyiced": onlyicedcoffee,
              onlyicedfag, fuckonlyicedNicknames.
            </p>
            <p>
              <b>Similar Matches:</b>Will look for results similar to the word.
            </p>
            <p>
              <b>Example:</b> The results for "Kevin": Kevin, Tevin, Melvin.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The <b>message field</b> has two types of search:
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Match phrase:</b> The regular search, it will look for
              results that contain the whole phrase.
            </p>
            <p>
              <b>Example:</b> The results for "bills to pay": how many bills to
              pay today phil, Phil has bills to pay and it’s our job to pay
              them, press 1 if you have bills to pay also.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Match phrase prefix:</b>Will look for results that contain
              the phrase in the same order plus every result that begins with
              the last word.
            </p>
            <p>
              <b>Example:</b> The results for "play the f": DO YOU WANNA PLAY
              THE F GAME??, do you wanna play the f****** game, Play the F*****
              game already.
            </p>
          </div>
          <div class="paddingBottomDivsm d-sm-block d-md-none">
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The search is capped by 10k results, you can narrow it down
              using a date range.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The <b>username field</b> has three types of search:
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Match:</b>The regular search, it will look for results that
              contain the whole word.
            </p>
            <p>
              <b>Example:</b> The results for "Dspgamming": Dspgamming,
              Dspgammingisafaggot, JimcuckedDspgamming.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Prefix:</b>Will look for results that contains a term that
              begins with the word.
            </p>
            <p>
              <b>Example:</b> The results for "onlyiced": onlyicedcoffee,
              onlyicedfag, fuckonlyicedNicknames.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Similar Matches:</b> Will look for results similar to the
              word.
            </p>
            <p>
              <b>Example:</b> The results for "Kevin": Kevin, Tevin, Melvin.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              />The <b>message field</b> has two types of search:
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Match phrase:</b> The regular search, will look for results
              that contain the whole phrase.
            </p>
            <p>
              <b>Example:</b> The results for "bills to pay": how many bills to
              pay today phil, Phil has bills to pay and it’s our job to pay
              them, press 1 if you have bills to pay also.
            </p>
            <p>
              <v-icon
                name="circle"
                flip="horizontal"
                scale="1"
                class="pb-2"
              /><b>Match phrase prefix:</b> Will look for results that contain
              the phrase in the same order plus every result that begins with
              the last word.
            </p>
            <p>
              <b>Example:</b> The results for "play the f": DO YOU WANNA PLAY
              THE F GAME??, do you wanna play the f****** game, Play the F*****
              game already.
            </p>
          </div>
        </div>
        <div class="bordaForm d-none d-lg-block my-3">
          <h2 class="text-center aboutHeader">CONTACT</h2>
          <b-row>
            <b-col md="6">
              <h5 class="pl-2">
                <v-icon name="envelope" scale="2" /> fabricio22101985@gmail.com
              </h5>
            </b-col>
            <b-col md="6">
              <div class="d-flex justify-content-center pr-4">
                <a
                  class="linkCard px-2"
                  href="https://www.linkedin.com/in/fabricio-almeida-medeiros-53b14a1a0/"
                  ><h2><font-awesome-icon :icon="['fab', 'linkedin']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://api.whatsapp.com/send?phone=5521974719720&text=ol%C3%A1"
                  ><h2><font-awesome-icon :icon="['fab', 'whatsapp']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://github.com/Fabricio2210"
                  ><h2><font-awesome-icon :icon="['fab', 'github']" /></h2
                ></a>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="bordaForm d-sm-block d-md-none my-3">
          <h2 class="text-center aboutHeader">CONTACT</h2>
          <b-row>
            <b-col md="6">
              <div class="d-flex justify-content-center pr-4">
                <a
                  class="linkCard px-2"
                  href="https://www.linkedin.com/in/fabricio-almeida-medeiros-53b14a1a0/"
                  ><h2><font-awesome-icon :icon="['fab', 'linkedin']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://api.whatsapp.com/send?phone=5521974719720&text=ol%C3%A1"
                  ><h2><font-awesome-icon :icon="['fab', 'whatsapp']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://github.com/Fabricio2210"
                  ><h2><font-awesome-icon :icon="['fab', 'github']" /></h2
                ></a>
              </div>
            </b-col>
          </b-row>
        </div>
        <!-- <div class="bordaForm d-none d-lg-block my-3">
          <h2 class="text-center aboutHeader">CONTACT</h2>
          <b-row>
            <b-col md="6">
              <h5 class="pl-2">
                <v-icon name="envelope" scale="2" /> fabricio22101985@gmail.com
              </h5>
            </b-col>
            <b-col md="6">
              <div class="d-flex justify-content-center pr-4">
                <a
                  class="linkCard px-2"
                  href="https://t.me/fabricio2210"
                  ><h2><font-awesome-icon :icon="['fab', 'telegram']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://api.whatsapp.com/send?phone=5521974719720&text=ol%C3%A1"
                  ><h2><font-awesome-icon :icon="['fab', 'whatsapp']" /></h2
                ></a>
                <a
                  class="linkCard px-2"
                  href="https://github.com/Fabricio2210"
                  ><h2><font-awesome-icon :icon="['fab', 'github']" /></h2
                ></a>
              </div>
            </b-col>
          </b-row>
        </div> -->
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.top-padding {
  padding-top: 70px !important;
}
</style>